## Trvello – Phase 1 MVP Context Document

1. Overview

Trvello is a multi-tenant B2B travel benefits platform designed for corporate organizations and their employees.

The platform enables:
	•	Companies to onboard and manage travel-related perks
	•	Employees to plan trips using structured preferences
	•	Platform administrators to manage tenants and maintain system integrity

This document explains the system behavior and user journeys from different roles in the ecosystem.

⸻

2. Platform Structure

Trvello operates as a multi-tenant system:
	•	Each company has its own subdomain:
companyname.trvello.com
	•	Data is strictly isolated per organization
	•	Roles and permissions are enforced server-side

There are three primary layers of users:
	1.	Employees (End Users)
	2.	Organization-Level Users (Admins & Co-Admins)
	3.	Platform-Level Administrators

⸻

3. Employee / End User Perspective

Employees are users who belong to a registered organization.

They access Trvello via their company subdomain.

3.1 How Employees Join

Employees can be added in two ways:
	•	Bulk import via CSV by organization admin
	•	SSO provisioning (if configured)

After being added:
	•	They receive a welcome email
	•	They log in through their organization subdomain
	•	If first-time login → onboarding flow starts

⸻

3.2 Employee Onboarding Flow

When logging in for the first time:
	1.	Welcome screen
	2.	Complete profile (name, optional photo, optional phone)
	3.	Set password (if not using SSO)
	4.	Accept:
	•	Terms of Service
	•	Privacy Policy
	•	Organization policies
	5.	Access dashboard

Returning users skip onboarding.

⸻

3.3 Employee Dashboard

Employees can:
	•	View assigned perks
	•	View personal activity
	•	Access travel planning
	•	Edit profile information

They cannot:
	•	Manage other employees
	•	View organization-level data
	•	Access audit logs

⸻

3.4 Travel Planning Experience

Employees can plan a trip through a structured flow.

Step 1 – Preference Setup

Employees define travel preferences including:
	•	Destination types (beach, mountains, city, etc.)
	•	Travel style (luxury, budget, etc.)
	•	Climate preference
	•	Activity interests
	•	Preferred duration

Preferences are stored and editable.

⸻

Step 2 – Destination Explorer

The system displays:
	•	Available destinations (seeded data)
	•	Match percentage based on preferences
	•	Filtering and search options

Employees can:
	•	View destination details
	•	Add destination to plan

⸻

Step 3 – Date Selection

Employees choose:
	•	Start and end dates
	•	Optional flexibility window

The system calculates duration.

⸻

Step 4 – Plan Summary

The summary includes:
	•	Destination
	•	Duration
	•	Estimated cost
	•	Payment structure options (display only)

Plans can be saved.

⸻

3.5 Payment (MVP Scope)

Payment functionality in Phase 1 is display only.

Employees can view:
	•	Total estimated cost
	•	EMI breakdown
	•	Perks balance impact (if applicable)

No real transaction occurs in Phase 1.

⸻

4. Organization (Corporate) Perspective

Organizations interact with Trvello through a structured onboarding and management process.

⸻

4.1 Corporate Onboarding Flow

Step 1 – Lead Capture

The company submits:
	•	Organization name
	•	Contact email
	•	Number of employees
	•	Use case
	•	Referral source

A lead record is created with expiry.

Verification email is sent.

⸻

Step 2 – Account Completion

After verification:

The company provides:
	•	Subdomain selection
	•	Corporate documents
	•	Address details
	•	Admin password

The organization is created in a pending approval state.

⸻

Step 3 – Platform Approval

Platform admin reviews:
	•	Submitted documents
	•	Organization details

Outcome:
	•	Approved → Organization activated
	•	Rejected → Reason communicated

Once approved:
	•	Admin can log in via subdomain

⸻

4.2 Organization Roles

There are two organization-level roles:

Organization Admin

Full access within their tenant.

Can:
	•	Manage employees
	•	Import employees via CSV
	•	Assign co-admins
	•	Configure branding
	•	Configure sign-in methods
	•	View audit logs
	•	Manage perks

Cannot:
	•	Access other tenants

⸻

Co-Admin

Limited administrative privileges.

Can:
	•	View dashboard
	•	Manage employees (limited)
	•	View audit logs

Cannot:
	•	Assign other admins
	•	Modify core organization settings
	•	Access financial summary

⸻

4.3 Employee Management

Organization admin can:
	•	View employee list
	•	Search/filter employees
	•	Activate/deactivate employees
	•	Promote to co-admin
	•	View employee activity

Bulk import is supported via CSV.

CSV flow includes:
	•	Upload
	•	Validation
	•	Preview
	•	Import
	•	Result summary

Welcome emails are sent automatically.

⸻

4.4 Organization Settings

Admins can configure:
	•	General organization details
	•	Branding (logo, colors)
	•	Sign-in methods (SSO setup)
	•	Integrations (framework only in MVP)
	•	Perks management
	•	Financial summary (display level)

⸻

4.5 Audit Trail

Organizations can view:
	•	Employee changes
	•	Role changes
	•	Settings updates
	•	Logins
	•	Perk assignments

Logs are:
	•	Immutable
	•	Tenant-scoped
	•	Filterable by date and event type

⸻

5. Platform Admin Perspective

Platform administrators operate at a global level.

They do not belong to any tenant.

⸻

5.1 Platform Admin Capabilities

Platform admin can:
	•	View and manage leads
	•	View all tenants
	•	Approve or reject organizations
	•	View tenant details
	•	View system health
	•	Manage platform-level settings
	•	View all users
	•	Monitor system metrics

They cannot:
	•	Modify tenant data arbitrarily outside defined flows

⸻

5.2 Approval Workflow

Platform admin reviews:
	•	Corporate documents
	•	Organization metadata

Decision:
	•	Approve → Activate org + send welcome email
	•	Reject → Send rejection email with reason

All actions are logged.

⸻

5.3 System Health & Monitoring

Platform admin can see:
	•	API health status
	•	Database health
	•	Cache status
	•	Recent platform activity

This is for operational awareness.

⸻

6. Multi-Tenant & Security Model

The system enforces:
	•	Subdomain-based tenant isolation
	•	Role-based access control (RBAC)
	•	Server-side permission enforcement
	•	No cross-tenant data access
	•	Audit logging for sensitive actions

Authentication is handled through:
	•	Email/password
	•	OAuth
	•	SSO (per organization)

Authorization is enforced by backend role checks.

⸻

7. Data Model Overview (High-Level)

Core collections/entities:
	•	Leads
	•	Organizations
	•	Users
	•	Memberships
	•	Preferences
	•	Destinations
	•	Plans
	•	Perks
	•	Audit Logs
	•	Settings

All tenant-specific entities include tenant reference.

⸻

8. Phase 1 Scope Summary

Phase 1 delivers:
	•	Full corporate onboarding flow
	•	Employee management
	•	Role-based access
	•	Basic travel planning
	•	Payment structure display
	•	Platform admin operations

Phase 1 does not include:
	•	Real payment processing
	•	Visa workflows
	•	Advanced AI recommendations
	•	Mobile apps
	•	Multi-region deployment
	•	External voucher fulfillment

⸻

9. Core Objective of MVP

The MVP must:
	•	Demonstrate a complete, stable flow
	•	Support onboarding → employee planning → summary
	•	Be demo-ready
	•	Be operationally manageable
	•	Enforce security and tenant isolation

It is not intended to be feature-complete or production-scale optimized in Phase 1.




### Minimum Compliance Required for MVP (Non-Negotiable)

Even before payments, you are collecting:
	•	Corporate legal documents
	•	Employee personal data
	•	Email addresses
	•	Travel preferences
	•	Login credentials

That makes you a data processor + controller.

⸻

✅ A. Privacy & Data Protection Compliance

GDPR (If you may serve EU users)

Even if you are India-based, if:
	•	A European company signs up
	•	An employee is in EU

You must comply with GDPR basics.

You must implement:
	•	Clear Privacy Policy
	•	Clear Terms of Service
	•	Explicit consent during signup/onboarding
	•	Ability to delete user data (right to erasure)
	•	Data export capability (basic level is fine for MVP)
	•	Secure storage of PII

👉 Even if you don’t target EU now, build this structure correctly.

⸻

✅ B. Data Security Best Practices (Mandatory)

You are storing:
	•	Corporate documents
	•	Employee PII
	•	Login credentials

You must ensure:
	•	HTTPS everywhere
	•	Password hashing (never store plaintext)
	•	Role-based access control (server-side)
	•	Tenant isolation (no cross-org leakage)
	•	File storage secured (no public document URLs)
	•	Logging of sensitive actions

If there is a data breach and you have none of this — it’s serious legal exposure.

⸻

✅ C. Corporate Document Handling

You are collecting:
	•	Registration certificates
	•	Tax IDs
	•	Legal documents

You must:
	•	Store securely (private bucket)
	•	Limit access (platform admin only)
	•	Log document access events
	•	Define document retention policy

⸻

✅ D. Basic Data Retention Policy

You should define:
	•	How long inactive leads are stored
	•	What happens when a company deletes account
	•	What happens when employee leaves company

Even a simple statement is enough for MVP, but it must exist.

⸻

2️⃣ Strongly Recommended (Early-Stage Startup Safe Zone)

These are not mandatory immediately but highly advisable.

⸻

🔐 A. SOC 2 Readiness (Not Certification Yet)

You don’t need certification now.

But you should:
	•	Follow access control discipline
	•	Maintain audit logs
	•	Restrict production DB access
	•	Use least privilege principle

If you want enterprise clients later, SOC2 will come.

Build foundations now.

⸻

📄 B. DPA (Data Processing Agreement)

If you serve companies:
They may ask:

Are you a data processor? Where is data stored?

You should prepare:
	•	Simple DPA template
	•	Data storage location declaration

⸻

🔍 C. Vendor Compliance

You are using:
	•	Firebase
	•	MongoDB
	•	Hosting provider
	•	Email service

You must:
	•	Ensure they are GDPR compliant
	•	Review their data policies
	•	Mention them in privacy policy

⸻

3️⃣ When You Enable Payments (Future Phase)

Once real payment starts, compliance level increases significantly.

⸻

💳 PCI-DSS (Payment Card Compliance)

If you:
	•	Collect card numbers directly → You need PCI compliance
	•	Use Stripe/Razorpay hosted checkout → Compliance burden is lower

Best practice:
👉 Never store card data yourself.

Use hosted checkout.

⸻

🏦 EMI / Lending Compliance

If EMI is shown:
	•	Must clarify it’s provided by a licensed NBFC/bank
	•	Include disclaimers
	•	No misleading interest display

If you later partner with banks → additional compliance required.

⸻

4️⃣ Enterprise-Level Compliance (Future)

When targeting larger enterprises:

⸻

🛡 SOC 2 Type I / II

Covers:
	•	Security
	•	Availability
	•	Processing integrity
	•	Confidentiality

Large companies will demand this.

⸻

🌍 Data Residency & Localization

If:
	•	You serve EU → GDPR
	•	You serve India enterprises → DPDP Act (India Data Protection Act)
	•	You serve US enterprises → CCPA awareness

⸻

5️⃣ India-Specific (Since You Are India-Based)

🇮🇳 Digital Personal Data Protection Act (DPDP)

You must:
	•	Collect data with purpose limitation
	•	Not use data beyond declared purpose
	•	Allow user to request deletion
	•	Maintain reasonable security safeguards

This applies even if users are Indian.

⸻

6️⃣ Compliance Checklist for Your MVP

Here is a practical implementation checklist:

Legal
	•	Terms of Service drafted
	•	Privacy Policy drafted
	•	Cookie disclosure (if applicable)
	•	DPA draft prepared

Security
	•	HTTPS everywhere
	•	Password hashing
	•	Tenant isolation enforced
	•	RBAC server-side
	•	Secure file storage
	•	Audit logging enabled

Data Handling
	•	Data retention policy defined
	•	Employee deletion flow defined
	•	Organization deletion flow defined

Documentation
	•	List of sub-processors documented
	•	Data flow documented
	•	Access control policy defined

⸻

7️⃣ What You DO NOT Need Right Now

For MVP:

❌ Full SOC2 certification
❌ ISO 27001
❌ PCI certification (if no real payments)
❌ HIPAA
❌ Complex data residency

⸻

8️⃣ Biggest Risk Areas for You

Based on your architecture:
	1.	Tenant data leakage
	2.	Publicly accessible document URLs
	3.	Co-admin permission escalation
	4.	Hardcoded admin bypass
	5.	Improper deletion handling
	6.	Logging sensitive tokens

If you control these, you are safe for MVP stage.

⸻

9️⃣ Realistic Recommendation for You

Right now, focus on:
	1.	Privacy Policy + Terms
	2.	Secure document storage
	3.	Tenant isolation
	4.	Proper RBAC
	5.	Data deletion capability

Do NOT try to over-engineer compliance at MVP stage.
