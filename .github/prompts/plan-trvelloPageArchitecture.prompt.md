# Trvello B2B Travel Portal — Page Architecture & Design Guide

**Scope:** Employee Portal + Corporate Admin Portal | **Branding:** Trvello | **Fidelity:** Full production-like mockups | **Stack:** HTML + Tailwind CDN + shadcn design tokens + Lucide Icons

---

## Folder Structure

```
tb-ux/
├── index.html                          → Trvello login page (subdomain-aware)
├── css/
│   └── shadcn-tokens.css              → Updated design tokens (Trvello palette)
├── js/
│   └── main.js                        → Updated interactions
├── docs/
│   ├── project-context.md
│   └── corporate-admin-page.md
│
├── employee/                           → EMPLOYEE PORTAL
│   ├── onboarding/
│   │   ├── welcome.html
│   │   ├── complete-profile.html
│   │   ├── set-password.html
│   │   └── accept-terms.html
│   ├── dashboard.html
│   ├── preferences.html
│   ├── destinations.html
│   ├── destination-detail.html
│   ├── plan-dates.html
│   ├── plan-summary.html
│   ├── my-plans.html
│   ├── my-perks.html
│   └── profile.html
│
└── admin/                              → CORPORATE ADMIN PORTAL
    ├── dashboard.html
    ├── employees.html
    ├── employee-detail.html
    ├── employee-import.html
    ├── perks.html
    ├── financial-summary.html
    ├── audit-logs.html
    └── settings/
        ├── general.html
        ├── branding.html
        ├── sign-in.html
        └── integrations.html
```

---

## Design Guidelines

**Brand:**
- Name: **Trvello**
- Primary color: Updated to a warm professional blue-purple (keeping shadcn structure)
- Logo icon: `globe` or `plane` from Lucide
- Typography: Inter (already in place)
- Tone: Professional, trustworthy, clean

**Layout Patterns:**
- **Login/Onboarding:** Centered card layout, split-screen (illustration left, form right)
- **Employee Portal:** Top navbar + content area (no sidebar, consumer-friendly feel)
- **Corporate Admin Portal:** Persistent left sidebar + top header bar (standard admin pattern)

**Shared Components (from css/shadcn-tokens.css):**
- `.btn-*`, `.input`, `.select`, `.card`, `.badge`, `.table`, `.tabs-list`, `.dialog`, `.separator`, `.avatar`
- New additions needed: `.sidebar`, `.stat-card`, `.stepper`, `.progress-bar`, `.empty-state`, `.file-upload`

---

## Portal 1: Employee Portal — 13 Pages

**Navigation (Top Navbar):**

| Item | Icon | Route |
|------|------|-------|
| Dashboard | `layout-dashboard` | `/employee/dashboard.html` |
| Plan a Trip | `compass` | `/employee/preferences.html` |
| My Plans | `folder` | `/employee/my-plans.html` |
| My Perks | `gift` | `/employee/my-perks.html` |
| Profile (avatar dropdown) | `user` | `/employee/profile.html` |

---

### 1. Login Page — `index.html`

**Replace existing homepage with subdomain-aware login.**

Sections:
- Split layout: left = brand illustration + tagline, right = login form
- Company logo area (dynamic per subdomain, placeholder for now)
- Email + password inputs
- "Sign in with SSO" button (conditional)
- "Forgot password?" link
- Footer: Terms of Service | Privacy Policy | Powered by Trvello

---

### 2. Onboarding: Welcome — `employee/onboarding/welcome.html`

**First-time login screen.**

Sections:
- Full-screen centered card
- Trvello + company logo
- Welcome headline: "Welcome to [Company]'s Travel Benefits"
- Brief value proposition (3 bullet points with icons)
- "Get Started" CTA button
- Step indicator: Step 1 of 4

---

### 3. Onboarding: Complete Profile — `employee/onboarding/complete-profile.html`

Sections:
- Stepper header (step 2 of 4 active)
- Avatar upload area (optional)
- Form: First name, Last name, Phone (optional), Department (dropdown)
- "Continue" + "Skip for now" buttons

---

### 4. Onboarding: Set Password — `employee/onboarding/set-password.html`

Sections:
- Stepper header (step 3 of 4)
- New password input with strength indicator
- Confirm password input
- Password requirements checklist (8+ chars, uppercase, number, special)
- "Continue" button
- Note: "Skip if using SSO" (conditional display)

---

### 5. Onboarding: Accept Terms — `employee/onboarding/accept-terms.html`

Sections:
- Stepper header (step 4 of 4)
- Scrollable Terms of Service panel
- Scrollable Privacy Policy panel
- Organization-specific policies (if any)
- Three checkboxes (each required):
  - "I accept the Terms of Service"
  - "I accept the Privacy Policy"
  - "I accept [Company] travel benefit policies"
- "Complete Setup" button

---

### 6. Employee Dashboard — `employee/dashboard.html`

Sections:
- **Welcome banner** — "Welcome back, [Name]" + next trip countdown
- **Quick Stats row** (4 stat cards):
  - Active Plans | Perks Balance | Trips Completed | Savings
- **Active Plan card** — current/upcoming plan summary with status badge
- **Assigned Perks** — 2-3 perk cards (name, value, expiry)
- **Recent Activity feed** — last 5 actions (plan created, perk assigned, etc.)
- **Quick Actions** — "Plan a Trip" CTA, "View Perks" CTA

---

### 7. Travel Preferences — `employee/preferences.html`

Sections:
- Page header: "Set Your Travel Preferences"
- Info banner: "Help us find destinations that match your style"
- **Destination Types** — multi-select chips: Beach, Mountains, City, Countryside, Desert, Island, Historical
- **Travel Style** — single-select cards: Budget, Mid-Range, Luxury, Adventure
- **Climate Preference** — single-select: Tropical, Temperate, Cold, Any
- **Activity Interests** — multi-select chips: Sightseeing, Water Sports, Hiking, Food & Culture, Nightlife, Wellness/Spa, Wildlife
- **Preferred Duration** — radio buttons: 3-5 days, 1 week, 2 weeks, Flexible
- "Save Preferences" + "Explore Destinations" buttons

---

### 8. Destination Explorer — `employee/destinations.html`

Sections:
- **Search bar** with location input
- **Filter row**: Duration, Budget range, Travel style, Climate
- **Sort dropdown**: Best Match, Price Low-High, Price High-Low, Rating
- **Results count**: "24 destinations match your preferences"
- **Destination cards grid** (3 columns on desktop):
  - Image, destination name, country
  - **Match percentage badge** (e.g., "92% Match") — key differentiator from B2C
  - Short description, price range, star rating
  - "View Details" + "Add to Plan" buttons
- Pagination

---

### 9. Destination Detail — `employee/destination-detail.html`

Sections:
- **Breadcrumb**: Destinations > [Country] > [Destination]
- **Photo gallery** (grid layout, 5 images)
- **Title + meta**: Name, country, match %, rating
- **Description** (2-3 paragraphs)
- **Highlights** grid (icons + labels): Climate, Best Season, Language, Currency, Time Zone
- **Activities available** — tag list
- **Accommodation options** — 2-3 tiered cards with price/night
- **Sidebar (sticky)**:
  - Estimated cost breakdown (from perk context)
  - Perk applicability indicator
  - "Start Planning" CTA → goes to date selection

---

### 10. Trip Planner: Date Selection — `employee/plan-dates.html`

Sections:
- **Stepper**: Select Dates (active) → Review → Save
- **Selected destination card** (compact summary)
- **Date picker area**:
  - Start date input
  - End date input
  - Auto-calculated duration display
- **Flexibility toggle**: "My dates are flexible (±3 days)"
- **Duration summary** — "7 nights / 8 days"
- "Review Plan" CTA

---

### 11. Plan Summary — `employee/plan-summary.html`

Sections:
- **Plan header** with status badge (Draft / Saved)
- **Destination summary card** — image, name, dates, duration
- **Cost Breakdown** table:
  - Accommodation
  - Estimated flights
  - Activities
  - Taxes & fees
  - **Total estimated cost**
- **Payment Structure Display** (MVP — display only):
  - Full payment amount
  - EMI breakdown (3/6/12 months)
  - Perks balance deduction (if applicable)
  - Disclaimer: "Payment options shown for illustration. Actual payment will be enabled in a future release."
- **Perks Impact** — shows how perks balance would change
- "Save Plan" + "Edit Plan" + "Print Summary" buttons
- Back to dashboard link

---

### 12. My Plans — `employee/my-plans.html`

Sections:
- Page header: "My Travel Plans"
- **Filter tabs**: All | Draft | Saved | Completed
- **Plan cards list** (each showing):
  - Destination image thumbnail
  - Destination name + country
  - Dates + duration
  - Status badge (Draft / Saved / Completed)
  - Estimated cost
  - "View" + "Edit" + "Delete" actions
- **Empty state**: illustration + "No plans yet. Start exploring destinations!"

---

### 13. My Perks — `employee/my-perks.html`

Sections:
- Page header: "My Perks & Benefits"
- **Perks balance card** — total available balance, used, remaining (progress bar)
- **Active perks list** (card per perk):
  - Perk name, description
  - Value, validity dates
  - Status badge (Active / Expired / Used)
  - Usage history (collapsible)
- **Perk history table** — date, perk, action, amount

---

### 14. Profile & Settings — `employee/profile.html`

Sections:
- **Profile header** — avatar, name, email, department, member since
- **Tabs**: Personal Info | Security | Preferences | Data & Privacy
- **Personal Info tab** — edit form (name, phone, department, avatar)
- **Security tab** — change password form, active sessions list
- **Preferences tab** — link to travel preferences (quick summary shown)
- **Data & Privacy tab** — download my data button, delete account request, consent management

---

## Portal 2: Corporate Admin Portal — 11 Pages

**Navigation (Left Sidebar):**

| Section | Item | Icon | Route |
|---------|------|------|-------|
| Main | Dashboard | `layout-dashboard` | `/admin/dashboard.html` |
| People | Employees | `users` | `/admin/employees.html` |
| People | Import Employees | `upload` | `/admin/employee-import.html` |
| Benefits | Perks | `gift` | `/admin/perks.html` |
| Benefits | Financial Summary | `bar-chart-3` | `/admin/financial-summary.html` |
| System | Audit Logs | `scroll-text` | `/admin/audit-logs.html` |
| Settings | General | `settings` | `/admin/settings/general.html` |
| Settings | Branding | `palette` | `/admin/settings/branding.html` |
| Settings | Sign-in Methods | `key-round` | `/admin/settings/sign-in.html` |
| Settings | Integrations | `puzzle` | `/admin/settings/integrations.html` |

**Sidebar footer**: Org name + admin avatar + "Switch to Employee View" link

**Top header bar**: Page title + breadcrumbs left, notifications bell + admin avatar dropdown right

**Co-Admin visibility**: Co-admins see a reduced sidebar (no Settings section except General, no Financial Summary, no "Assign Admin" actions in employee views)

---

### 15. Admin Dashboard — `admin/dashboard.html`

Sections:
- **Org header** — Company name, subdomain, plan tier badge
- **Stat cards row** (5 cards):
  - Total Employees | Active | Inactive | Co-Admins | Total Perks Issued
- **Employee growth chart** (placeholder area for chart)
- **Recent Activity feed** — last 10 org-level events (employee added, perk assigned, settings changed)
- **Quick Actions**: "Add Employee" | "Import CSV" | "Manage Perks"
- **Perks Usage Summary** — donut chart placeholder (used vs remaining budget)

---

### 16. Employee List — `admin/employees.html`

Sections:
- Page header: "Employee Management" + "Add Employee" button + "Import CSV" button
- **Search bar** + **Filter row**: Status (Active/Inactive/All), Role (Employee/Co-Admin), Department
- **Employee table** columns:
  - Avatar + Name
  - Email
  - Department
  - Role (badge: Employee / Co-Admin)
  - Status (badge: Active / Inactive / Pending)
  - Joined date
  - Actions dropdown (View, Edit, Deactivate, Promote to Co-Admin)
- **Bulk actions bar** (when rows selected): Activate, Deactivate, Export
- **Pagination** with rows-per-page selector
- **Empty state**: "No employees yet. Import via CSV to get started."

---

### 17. Employee Detail — `admin/employee-detail.html`

Sections:
- **Back link** to employee list
- **Profile header** — avatar, name, email, role badge, status badge, joined date
- **Action buttons**: Edit, Deactivate, Promote/Demote, Reset Password
- **Tabs**: Overview | Activity | Plans | Perks
- **Overview tab**:
  - Personal info card (name, email, phone, department)
  - Login info (last login, login method, sessions)
- **Activity tab**:
  - Timeline of employee actions (login, preference update, plan created, etc.)
- **Plans tab**:
  - Table of employee's travel plans (destination, dates, status, cost)
- **Perks tab**:
  - Assigned perks list with values and status

---

### 18. CSV Import Flow — `admin/employee-import.html`

Sections:
- **Stepper**: Upload (active) → Validate → Preview → Import → Results
- **Step 1: Upload**
  - Drag-and-drop file area + browse button
  - "Download CSV Template" link
  - Supported format note: ".csv, max 5000 rows"
- **Step 2: Validate**
  - Processing animation
  - Validation results: X valid, Y errors, Z warnings
  - Error table (row number, field, error)
- **Step 3: Preview**
  - Table preview of first 10 rows
  - Total count confirmation
  - Column mapping display
- **Step 4: Import**
  - Progress bar animation
  - "Importing X of Y employees..."
- **Step 5: Results**
  - Success count, failure count, skipped count
  - Download error report link
  - "Welcome emails sent to X employees"
  - "Go to Employee List" CTA

---

### 19. Perks Management — `admin/perks.html`

Sections:
- Page header: "Perks Management" + "Create Perk" button
- **Perks summary cards**: Total Budget | Allocated | Remaining | Active Perks Count
- **Perks table** columns:
  - Perk name
  - Type (Travel Credit / Discount / Experience)
  - Value
  - Assigned to (count)
  - Valid from – to
  - Status (Active / Expired / Draft)
  - Actions (Edit, Assign, Deactivate)
- **Create/Edit Perk dialog** (modal):
  - Perk name, description, type dropdown
  - Value input
  - Validity date range
  - Assign to: All Employees / Select Employees / Department
- **Empty state**: "No perks created yet."

---

### 20. Financial Summary — `admin/financial-summary.html`

**(Admin-only, hidden from Co-Admin)**

Sections:
- **Summary cards**: Total Perks Budget | Allocated | Utilized | Remaining
- **Monthly breakdown table**: columns for Month, Perks Issued, Perks Used, Balance
- **Per-department breakdown table**
- Disclaimer banner: "Financial data is for display purposes only. Actual transactions will be enabled in a future phase."

---

### 21. Audit Logs — `admin/audit-logs.html`

Sections:
- Page header: "Audit Trail"
- **Filter bar**: Date range picker, Event type dropdown (All, Employee Changes, Role Changes, Settings, Logins, Perks), Actor (all users dropdown)
- **Log table** columns:
  - Timestamp
  - Actor (name + role badge)
  - Event type (badge)
  - Description
  - IP Address
  - Details expand (accordion row)
- **Export button**: "Export to CSV"
- **Pagination**

---

### 22. Settings: General — `admin/settings/general.html`

Sections:
- Page header: "Organization Settings"
- **Settings sidebar/tabs**: General (active) | Branding | Sign-in | Integrations
- **Organization details form**:
  - Organization name
  - Subdomain (read-only display)
  - Contact email
  - Phone
  - Address (street, city, state, country, zip)
  - Industry
  - Number of employees (display)
- **Documents section**:
  - Uploaded corporate documents (view-only list)
  - Upload new document button
- "Save Changes" button

---

### 23. Settings: Branding — `admin/settings/branding.html`

Sections:
- **Logo upload** — current logo preview + upload area
- **Brand colors**:
  - Primary color picker/input
  - Secondary color picker/input
- **Live preview panel** — shows how employee portal will look with selected branding
- "Save" + "Reset to Default" buttons

---

### 24. Settings: Sign-in Methods — `admin/settings/sign-in.html`

Sections:
- **Email/Password** — toggle (always on by default)
- **OAuth providers** — Google (toggle + client ID input), Microsoft (toggle + config)
- **SSO/SAML** — toggle + configuration form:
  - Identity Provider URL
  - Certificate upload
  - Entity ID
  - Attribute mapping
- **Status badges** per method (Active / Inactive / Configured)
- "Save Configuration" button
- Note: "Changes affect how your employees sign in"

---

### 25. Settings: Integrations — `admin/settings/integrations.html`

Sections:
- **Info banner**: "Integrations are coming soon. Below is a preview of planned integrations."
- **Integration cards** (disabled state):
  - HRMS Integration (Workday, BambooHR)
  - Slack Notifications
  - Calendar Sync (Google Calendar, Outlook)
  - Expense Management (SAP Concur)
- Each card: icon, name, description, "Coming Soon" badge, disabled toggle
- **Webhook configuration** (MVP framework):
  - Webhook URL input
  - Events to send (checkboxes)
  - "Test Webhook" button (disabled)

---

## Key Design Decisions

1. **Replace B2C pages** — existing TravelBuddy files will be removed, replaced with Trvello B2B structure
2. **Employee portal uses top navbar** — consumer-friendly feel for employees
3. **Admin portal uses left sidebar** — standard admin pattern, appropriate for data-heavy management
4. **Co-Admin restrictions** noted on relevant pages (Financial Summary hidden, settings limited)
5. **Payment is display-only** — clear disclaimer on plan summary per MVP scope
6. **Compliance built-in** — accept-terms onboarding step, data privacy in profile, audit logs in admin

---

## Verification Checklist

After implementation, verify:
- [ ] Each HTML file renders without errors in browser
- [ ] Navigation links between employee pages work
- [ ] Admin sidebar navigation works across all admin pages
- [ ] Responsive: resize to mobile/tablet — all layouts adapt
- [ ] Stepper interactions work on onboarding and CSV import flows
- [ ] Tab switching works on employee detail and settings pages
- [ ] All Lucide icons render correctly
- [ ] Trvello branding applied consistently (no TravelBuddy remnants)
