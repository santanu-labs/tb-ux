

 I'll start by thoroughly researching the codebase to understand the full feature set and project context before drafting an architecture plan. 

Research perks feature & project context

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/perks.html#1-1), lines 1 to 500

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/perks.html#501-501), lines 501 to 1000

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/perks.html#1001-1001), lines 1001 to 1500

Read [](file:///Users/saan-personal/Documents/tb-ux/docs/project-context.md#1-1), lines 1 to 200

Read [](file:///Users/saan-personal/Documents/tb-ux/docs/corporate-admin-page.md#1-1), lines 1 to 200

Read [](file:///Users/saan-personal/Documents/tb-ux/js/main.js#1-1), lines 1 to 300

Read [](file:///Users/saan-personal/Documents/tb-ux/package.json)

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/perks.html#1501-1501), lines 1501 to 1760

Read [](file:///Users/saan-personal/Documents/tb-ux/docs/project-context.md#200-200), lines 200 to 674

Read [](file:///Users/saan-personal/Documents/tb-ux/docs/corporate-admin-page.md#200-200), lines 200 to 548

Read [](file:///Users/saan-personal/Documents/tb-ux/js/main.js#300-300), lines 300 to 338

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/employees.html#1-1), lines 1 to 50

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/dashboard.html#1-1), lines 1 to 50

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/financial-summary.html#1-1), lines 1 to 50

Read [](file:///Users/saan-personal/Documents/tb-ux/admin/payment-details.html#1-1), lines 1 to 50

Read [](file:///Users/saan-personal/Library/Application%20Support/Code/User/workspaceStorage/cc4094f06c2975d0033f0700574ff2da/GitHub.copilot-chat/chat-session-resources/f7f4badb-56ec-42e8-a14f-9e4acc2324da/toolu_bdrk_01AxZRYwhqqUoMfCK932bums__vscode-1772253878184/content.txt#1-1), lines 1 to 600

Read [](file:///Users/saan-personal/Library/Application%20Support/Code/User/workspaceStorage/cc4094f06c2975d0033f0700574ff2da/GitHub.copilot-chat/chat-session-resources/f7f4badb-56ec-42e8-a14f-9e4acc2324da/toolu_bdrk_01AxZRYwhqqUoMfCK932bums__vscode-1772253878184/content.txt#600-600), lines 600 to 686

The research is thorough. Before I draft the architecture, let me clarify a few key decisions: 

Asked 4 questions (Tech Stack, Scope, Deployment, Multi-tenant)

Asked 3 questions (Node FW, Auth, Scheduler)

Good — all key decisions are locked in. Here's the complete architecture plan:

---

## Plan: Perks Module — Backend Architecture

**TL;DR**: Build a multi-tenant Perks backend in **Express.js + MongoDB** (shared DB, row-level `orgId` isolation) with **third-party auth** (Auth0/Clerk), **Agenda.js** for scheduling birthday/anniversary automation jobs, and **Docker Compose** for deployment. The module spans 7 Mongoose collections across 4 feature domains: Manual Perks, Automations, Peer-to-Peer Recognition, and Forecasting. All mutations are audit-logged. Budget enforcement, eligibility rules, and approval workflows are handled in service-layer middleware.

---

### Steps

#### 1. Project Structure — Express Modular Monolith

Organise the backend as a **feature-sliced monolith** under `src/`:

```
src/
├── config/          # env vars, DB connection, Auth0 config, Agenda setup
├── middleware/       # auth, tenantResolver, rbac, errorHandler, validate
├── modules/
│   ├── perks/       # Manual perks CRUD + assignment
│   ├── automations/ # Automation rules + scheduler jobs
│   ├── recognition/ # P2P cards, recognitions, approval flow
│   ├── forecast/    # Read-only forecast computation
│   ├── budget/      # Budget tracking, shared by perks + recognition
│   └── audit/       # Audit log writer (cross-cutting)
├── shared/          # Mongoose base schemas, enums, pagination helpers, notification service
├── jobs/            # Agenda job definitions (birthday, anniversary, SLA escalation)
└── app.js           # Express app bootstrap
```

Each module contains: `*.model.js` (Mongoose schema), `*.routes.js`, `*.controller.js`, `*.service.js`, `*.validator.js` (Joi/Zod).

#### 2. MongoDB Collections (7 primary + 2 config singletons)

**Collection 1: `perks`** — Manual perk definitions

| Field | Type | Notes |
|-------|------|-------|
| `_id` | ObjectId | |
| `orgId` | ObjectId | Tenant discriminator (indexed) |
| `name` | String | e.g. "Summer Travel Credit" |
| `description` | String | |
| `type` | String enum | `TRAVEL_CREDIT`, `DISCOUNT`, `EXPERIENCE` |
| `value` | Number | Monetary or percentage value |
| `valueType` | String enum | `FIXED`, `PERCENTAGE` |
| `validFrom` | Date | |
| `validUntil` | Date / null | null for rolling perks |
| `rollingDays` | Number / null | e.g. 30 days from assignment |
| `assignmentScope` | String enum | `ALL`, `SELECTED`, `DEPARTMENT` |
| `scopeFilter` | Mixed | Array of employee IDs or department IDs |
| `status` | String enum | `ACTIVE`, `EXPIRED`, `DEACTIVATED`, `DRAFT` |
| `createdBy` | ObjectId → User | |
| `createdAt`, `updatedAt` | Date | Mongoose timestamps |

Compound index: `{ orgId: 1, status: 1 }`, `{ orgId: 1, validUntil: 1 }`

**Collection 2: `perkAssignments`** — Individual perk credits issued to employees

| Field | Type | Notes |
|-------|------|-------|
| `orgId` | ObjectId | |
| `perkId` | ObjectId → Perk / null | null for P2P-generated |
| `employeeId` | ObjectId → User | |
| `value` | Number | Snapshot of value at assignment time |
| `assignedAt` | Date | |
| `expiresAt` | Date | |
| `status` | String enum | `ACTIVE`, `USED`, `EXPIRED`, `REVOKED` |
| `source` | String enum | `MANUAL`, `AUTOMATION`, `P2P_RECOGNITION` |
| `automationEventId` | ObjectId / null | |
| `recognitionId` | ObjectId / null | |

Indexes: `{ orgId: 1, employeeId: 1, status: 1 }`, `{ orgId: 1, perkId: 1 }`, `{ expiresAt: 1 }` (TTL-like for status transition job)

**Collection 3: `automations`** — Automation rule definitions

| Field | Type | Notes |
|-------|------|-------|
| `orgId` | ObjectId | |
| `name` | String | |
| `triggerType` | String enum | `BIRTHDAY`, `ANNIVERSARY_ALL`, `ANNIVERSARY_1YR`, `ANNIVERSARY_3YR`, `ANNIVERSARY_5YR`, `ANNIVERSARY_10YR`, `FIXED_DATE` |
| `perkType` | String enum | `TRAVEL_CREDIT`, `DISCOUNT`, `EXPERIENCE` |
| `perkValue` | Number | Single value (simple) |
| `tieredValues` | Array of `{ years: Number, value: Number }` | For anniversary milestones |
| `validForDays` | Number | |
| `scope` | String enum | `ALL_EMPLOYEES`, `BY_DEPARTMENT`, `BY_ROLE` |
| `scopeFilter` | Mixed | |
| `fixedDate` | Object `{ month, day }` / null | For `FIXED_DATE` type |
| `isActive` | Boolean | |
| `createdBy`, `createdAt`, `updatedAt` | | |

**Collection 4: `automationEvents`** — Execution log per automation trigger

| Field | Type | Notes |
|-------|------|-------|
| `orgId` | ObjectId | |
| `automationId` | ObjectId | |
| `employeeId` | ObjectId | |
| `triggerDate` | Date | The birthday/anniversary date |
| `perkAssignmentId` | ObjectId / null | |
| `status` | String enum | `PENDING`, `ASSIGNED`, `FAILED` |
| `error` | String / null | Failure reason |
| `executedAt` | Date | |

Index: `{ automationId: 1, employeeId: 1, triggerDate: 1 }` (unique — prevents duplicate triggers)

**Collection 5: `recognitionCards`** — P2P card templates

| Field | Type |
|-------|------|
| `orgId` | ObjectId |
| `name` | String (e.g. "Great Teamwork 🤝") |
| `description` | String |
| `icon` | String enum (8 values) |
| `iconColorTheme` | String enum (`BLUE`, `AMBER`, `VIOLET`, `GREEN`, `PINK`, `CYAN`) |
| `perkValue` | Number |
| `isActive` | Boolean |
| `createdBy`, `createdAt`, `updatedAt` | |

**Collection 6: `recognitions`** — Individual P2P recognition events

| Field | Type | Notes |
|-------|------|-------|
| `orgId` | ObjectId | |
| `senderId` | ObjectId | |
| `recipientId` | ObjectId | |
| `cardId` | ObjectId → RecognitionCard | |
| `message` | String | Personal appreciation message |
| `amount` | Number | Card value or custom amount |
| `status` | String enum | `PENDING_APPROVAL`, `APPROVED`, `REJECTED`, `AUTO_APPROVED`, `QUEUED` |
| `visibility` | String enum | `PUBLIC`, `PRIVATE`, `MANAGER_VISIBLE` |
| `approverId` | ObjectId / null | |
| `approvedAt` | Date / null | |
| `rejectionReason` | String / null | |
| `perkAssignmentId` | ObjectId / null | Created on approval |
| `escalatedAt` | Date / null | When SLA escalation kicked in |
| `createdAt`, `updatedAt` | | |

Indexes: `{ orgId: 1, status: 1, createdAt: -1 }`, `{ orgId: 1, senderId: 1, createdAt: -1 }`, `{ orgId: 1, recipientId: 1 }`

**Collection 7: `auditLogs`** — Immutable event log

| Field | Type |
|-------|------|
| `orgId` | ObjectId |
| `actorId` | ObjectId |
| `action` | String (e.g. `PERK_CREATED`, `RECOGNITION_APPROVED`) |
| `resource` | String (collection name) |
| `resourceId` | ObjectId |
| `changes` | Object (diff: `{ field: { from, to } }`) |
| `ipAddress` | String |
| `createdAt` | Date |

**Singleton Configs (embedded in an `orgConfigs` collection or separate)**:

**`p2pConfig`** — One doc per org with all program rules (eligibility, limits, cooldowns, budget caps, message rules, visibility, notification channels). ~20 fields matching the Program Rules sub-tab.

**`approvalConfig`** — One doc per org with approval mode, threshold, escalation SLA, escalation action, timeout, notification preference.

#### 3. API Endpoints

**Auth middleware** on all routes: verify Auth0/Clerk JWT → extract `userId` + `orgId` → attach to `req`. RBAC middleware checks `role` (`ORG_ADMIN`, `CO_ADMIN`, `EMPLOYEE`).

**Perks (`/api/v1/perks`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/` | Admin | List perks (paginated, filter by status/type) |
| `GET` | `/:id` | Admin | Get perk detail + assignment count |
| `POST` | `/` | Admin | Create perk |
| `PUT` | `/:id` | Admin | Update perk |
| `PATCH` | `/:id/deactivate` | Admin | Set status to DEACTIVATED |
| `POST` | `/:id/duplicate` | Admin | Clone expired perk as DRAFT |
| `DELETE` | `/:id` | Admin | Delete (only if EXPIRED) |
| `POST` | `/:id/assign` | Admin | Assign perk to employees (body: employee IDs / dept / all) |
| `GET` | `/:id/assignments` | Admin | List assignments for a perk |
| `GET` | `/summary` | Admin | Budget summary (total, allocated, remaining, active count) |

**Perk Assignments (`/api/v1/perk-assignments`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/my` | Employee | List current user's active perk assignments |
| `GET` | `/employee/:employeeId` | Admin | List perk assignments for an employee |
| `PATCH` | `/:id/revoke` | Admin | Revoke an assignment |

**Automations (`/api/v1/automations`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/` | Admin | List all automations |
| `POST` | `/` | Admin | Create automation |
| `PUT` | `/:id` | Admin | Update automation |
| `PATCH` | `/:id/toggle` | Admin | Toggle `isActive` |
| `DELETE` | `/:id` | Admin | Delete automation |
| `GET` | `/:id/events` | Admin | List execution events (paginated) |
| `GET` | `/upcoming` | Admin | Next 30 days of pending auto-assignments |

**Recognition Cards (`/api/v1/recognition-cards`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/` | Admin/Employee | List active cards (employee sees active only) |
| `POST` | `/` | Admin | Create card |
| `PUT` | `/:id` | Admin | Update card |
| `PATCH` | `/:id/toggle` | Admin | Toggle active/inactive |

**Recognitions (`/api/v1/recognitions`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `POST` | `/` | Employee | Send a recognition (triggers eligibility + budget validation) |
| `GET` | `/feed` | Admin | Activity feed (paginated, filter by card, time range) |
| `GET` | `/pending` | Admin/Manager | Pending approvals queue |
| `PATCH` | `/:id/approve` | Admin/Manager | Approve recognition → creates PerkAssignment |
| `PATCH` | `/:id/reject` | Admin/Manager | Reject with reason |
| `GET` | `/stats` | Admin | Summary stats (sent count, budget used, unique senders, pending count) |
| `GET` | `/my/sent` | Employee | Recognitions I sent |
| `GET` | `/my/received` | Employee | Recognitions I received |

**P2P Config (`/api/v1/p2p-config`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/` | Admin | Get current P2P program rules |
| `PUT` | `/` | Admin | Update program rules |
| `GET` | `/approval` | Admin | Get approval flow config |
| `PUT` | `/approval` | Admin | Update approval flow config |

**Forecast (`/api/v1/forecast`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/summary` | Admin | Projected annual, manual vs. automation split, next-30-days total |
| `GET` | `/monthly` | Admin | Monthly breakdown table (manual + birthday + anniversary per month) |
| `GET` | `/upcoming-assignments` | Admin | Same as `GET /automations/upcoming` (can alias) |

**Budget (`/api/v1/budget`)**

| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/` | Admin | Current FY budget: total, allocated, remaining |
| `PUT` | `/` | Admin | Set/update annual budget |
| `GET` | `/p2p` | Admin | P2P monthly budget status |

#### 4. Service Layer — Key Business Logic

**`PerksService`**
- `createPerk()` — validate dates, calculate budget impact, create doc
- `assignPerk()` — bulk-create `PerkAssignment` docs; enforce `remainingBudget >= value × assigneeCount`
- `deactivatePerk()` — set status, optionally revoke all active assignments
- `duplicatePerk()` — clone with new ID, status=DRAFT, clear dates
- Expiration cron: daily job marks ACTIVE perks with `validUntil < today` as EXPIRED; marks ACTIVE assignments with `expiresAt < today` as EXPIRED

**`AutomationService`**
- `runDailyAutomations()` — Agenda.js job running at 00:30 UTC daily:
  1. Fetch all active automations grouped by `orgId`
  2. For each automation, query employees matching the trigger:
     - `BIRTHDAY` → `employee.dateOfBirth` month/day == today
     - `ANNIVERSARY_*` → `employee.joinDate` + N years == today
     - `FIXED_DATE` → config month/day == today
  3. For each matched employee, check `automationEvents` for duplicate (same automation + employee + triggerDate)
  4. Create `PerkAssignment` + `AutomationEvent` + send notification
- `getUpcomingAssignments(orgId, days)` — query employees with birthdays/anniversaries in the next N days, cross-ref active automations, project future assignments

**`RecognitionService`**
- `sendRecognition(senderId, recipientId, cardId, message, amount)`:
  1. **Eligibility checks** (from `P2PConfig`): sender tenure, role, recipient not self, not blocked pair, repeat-to-same-person limit, cooldown check, recognitions-per-month cap
  2. **Budget checks**: org monthly budget remaining, sender monthly limit remaining, recipient monthly cap remaining
  3. If budget exhausted → set status `QUEUED` for next month
  4. **Approval routing** (from `ApprovalConfig`):
     - `INSTANT` → auto-approve immediately, create PerkAssignment
     - `AUTO_BELOW_THRESHOLD` → if `amount ≤ threshold` → auto-approve; else route to approver
     - `MANAGER_ALL` / `HR_ADMIN` → set status `PENDING_APPROVAL`, determine approver
  5. Create `Recognition` doc, send notifications
- `approveRecognition(id, approverId)` — validate approver authority, create `PerkAssignment` for recipient, update status, send notification
- `rejectRecognition(id, approverId, reason)` — update status, send notification to sender

**`ApprovalEscalationJob`** — Agenda.js job running every hour:
  1. Find `PENDING_APPROVAL` recognitions where `createdAt + SLA hours < now`
  2. Based on `escalationAction`: auto-approve, escalate to HR, escalate to skip-level, or auto-reject
  3. If escalated, update `approverId` + `escalatedAt` + send escalation notification
  4. If secondary escalation timeout exceeded, apply final action

**`ForecastService`** — Pure computation, no writes:
  - `getMonthlyForecast(orgId, fiscalYear)`:
    1. Manual perks: sum active perk values × assignment counts, spread evenly across validity months
    2. Birthday automation: count employees with birthdays per month × birthday perk value
    3. Anniversary automation: count employees hitting each milestone per month × tiered value
    4. Return monthly breakdown + totals
  - `getProjectedAnnual(orgId)`: sum all 12 months

**`BudgetService`** — Shared by perks + recognition:
  - Tracks `totalBudget` (set by admin), `allocatedAmount` (sum of all active PerkAssignment values), `remainingAmount` (derived)
  - P2P monthly budget: reset tracking at month start (or compute on-the-fly with aggregation on `recognitions` collection)

**`AuditService`** — Called by all services after any mutation:
  - `log(orgId, actorId, action, resource, resourceId, changes)` → insert into `auditLogs`

#### 5. Middleware Stack

| Order | Middleware | Purpose |
|-------|-----------|---------|
| 1 | `cors` | CORS configuration for frontend origins |
| 2 | `helmet` | Security headers |
| 3 | `express.json` | Body parsing |
| 4 | `rateLimiter` | Rate limiting (express-rate-limit) |
| 5 | `authMiddleware` | Verify Auth0/Clerk JWT, attach `req.user` |
| 6 | `tenantResolver` | Extract `orgId` from JWT claims or subdomain, attach `req.orgId` |
| 7 | `rbac(roles[])` | Route-level role guard (`ORG_ADMIN`, `CO_ADMIN`, `EMPLOYEE`) |
| 8 | `validate(schema)` | Joi/Zod request body/query validation |

All DB queries automatically scoped by `req.orgId` — enforced by a Mongoose query middleware or a helper function wrapping all queries with `{ orgId }`.

#### 6. Scheduler Setup (Agenda.js)

Agenda.js backed by the same MongoDB (uses its own `agendaJobs` collection).

| Job Name | Schedule | Description |
|----------|----------|-------------|
| `run-daily-automations` | `0 0:30 * * *` (daily 00:30 UTC) | Scan employees for birthday/anniversary triggers, create perk assignments |
| `expire-perks` | `0 1:00 * * *` (daily 01:00 UTC) | Mark expired perks and assignments |
| `check-approval-sla` | `0 */1 * * *` (hourly) | Escalate overdue pending approvals |
| `reset-monthly-p2p-budgets` | `0 0:00 1 * *` (1st of month) | Reset/recalculate monthly P2P budget tracking if needed |

#### 7. Notification Service

Abstract `NotificationService` with pluggable channels:

| Channel | Implementation |
|---------|----------------|
| **Email** | Nodemailer + SMTP or SendGrid/SES |
| **In-App** | Write to a `notifications` collection, polled or pushed via SSE/WebSocket |
| **Slack** | Slack Web API (`chat.postMessage`) — gated by integrations settings |

Triggered by: perk assignment, automation execution, recognition sent/received, approval needed, approval status change, SLA escalation, budget threshold warnings.

#### 8. Docker Compose Deployment

```yaml
services:
  api:        # Express app (NODE_ENV=production)
  mongodb:    # MongoDB 7.x with replica set (needed for change streams / transactions)
  redis:      # Optional — for rate limiting store if needed
```

- `api` service runs both the Express HTTP server and Agenda.js scheduler in the same process (single-instance is fine for self-hosted MVP)
- MongoDB replica set enabled even for single node (required for transactions — useful for atomic perk assignment + budget deduction)
- Environment variables: `MONGO_URI`, `AUTH0_DOMAIN`, `AUTH0_AUDIENCE`, `SMTP_*`, `SLACK_WEBHOOK_URL`

#### 9. Key NPM Dependencies

| Package | Purpose |
|---------|---------|
| `express` | HTTP framework |
| `mongoose` | MongoDB ODM |
| `agenda` | Job scheduling |
| `jsonwebtoken` / `jwks-rsa` | Auth0 JWT verification |
| `joi` or `zod` | Request validation |
| `helmet` | Security headers |
| `cors` | CORS |
| `express-rate-limit` | Rate limiting |
| `nodemailer` | Email notifications |
| `morgan` / `pino` | Logging |
| `dotenv` | Env config |

---

### Verification

- **Unit tests**: Service-layer logic — eligibility rules, budget calculations, forecast computation, approval routing — using Jest + mongodb-memory-server
- **Integration tests**: Full API request → response flow with Supertest, seeded test org data
- **Scheduler tests**: Mock Agenda jobs, verify correct employees selected for birthday/anniversary triggers, no duplicate assignments
- **Manual QA**: Connect the existing perks.html prototype to the live API (swap `onclick` toasts → `fetch()` calls) — verify CRUD flows, tab data loads, approval queue updates

### Decisions

- **MongoDB over PostgreSQL**: Per user preference; document model suits the flexible `scopeFilter`, `tieredValues`, and config singletons well; eliminates migration tooling
- **Shared DB row-level tenancy**: `orgId` on every collection, enforced at middleware layer — simplest for MVP, still supports hundreds of tenants
- **Agenda.js over BullMQ**: No Redis dependency; automation jobs are low-frequency (daily/hourly), Agenda's MongoDB-backed queue is sufficient
- **Monolith over microservices**: All 7 modules in one Express process — simpler deployment and debugging for self-hosted Docker Compose; can extract later
- **Forecast as computation, not materialized**: No separate forecast collection — computed on-the-fly from employee data + active automations; cache in-memory or Redis if performance becomes an issue
- **P2P budget tracking via aggregation**: Monthly budget usage computed from `recognitions` aggregation pipeline (`{ status: { $in: ['APPROVED', 'AUTO_APPROVED'] }, createdAt: { $gte: monthStart } }`) rather than a mutable counter — avoids race conditions