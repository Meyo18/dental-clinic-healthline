---
name: git-commit-message
description: >
  Generate professional, senior-developer-quality Git commit messages from staged diffs.
  Use this skill whenever the user pastes a git diff, mentions staged files, asks for a commit message,
  says "commit karna hai", "diff dekho", "commit message likh do", or shares any code changes
  that need to be committed. Also triggers in Claude Code when reading git staged output.
  Works for both Claude.ai (paste diff) and Claude Code (auto read diff) workflows.
---

# Git Commit Message Skill

Generate senior-developer-quality commit messages from git diffs — following a hybrid of
Conventional Commits + expressive body explaining the _why_.

---

## Format Specification

### Two Modes

#### Mode 1: Simple Change (1-2 files, single concern)

```
<type>(<scope>): <short imperative summary>

<body — what changed and WHY, 2-4 lines prose>

<footer — breaking changes if any>
```

#### Mode 2: Complex Change (3+ files, multiple concerns) ← Big features mein ALWAYS yahi use karo

```
<type>(<scope>): <short imperative summary covering the whole change>

- **<File/Layer Name>**: <what changed and why in this file>
  - <specific method/function/field added or modified>
  - <another specific detail>
- **<File/Layer Name>**: <what changed and why>
  - <specific detail>

<footer — BREAKING CHANGE if any>
```

### Rules

- **Subject line**: max 72 chars, imperative mood ("add", not "added"), no period at end
- **Body mode**: 1-2 files → Mode 1 prose, 3+ files → Mode 2 file-by-file breakdown
- **Bold headers**: every file/layer gets `**Name**:` header — reader can scan instantly
- **Specific names**: mention actual method names, field names, API endpoints — never be vague
- **Why over What**: don't say "added X" — say "added X to enable Y / fix Z"
- **Breaking changes**: footer must start with `BREAKING CHANGE:` followed by description
- **Scope**: feature name for big features (`create-trip`), domain for small fixes (`driver`)

---

## Type Reference

| Type       | When to use                               |
| ---------- | ----------------------------------------- |
| `feat`     | New feature or capability                 |
| `fix`      | Bug fix                                   |
| `refactor` | Code restructure, no behavior change      |
| `perf`     | Performance improvement                   |
| `chore`    | Build, deps, config — no prod code change |
| `docs`     | Documentation only                        |
| `test`     | Adding/fixing tests                       |
| `style`    | Formatting, lint — no logic change        |
| `revert`   | Reverting a previous commit               |

---

## Step-by-Step Workflow

### Step 1 — Get the Diff

**Claude.ai**: User pastes the diff. If they haven't, ask:

> "Bhai `git diff --staged` ka output paste kar do"

**Claude Code**: Run automatically:

```bash
git diff --staged
```

If nothing staged, check:

```bash
git diff HEAD
```

### Step 2 — Analyze the Diff (file by file)

For **every changed file**, extract:

1. **File name + layer** — service, store, config, component, model?
2. **What specifically changed** — which methods added/modified, which fields, which logic blocks?
3. **Why** — infer intent (null check → crash fix, new endpoint → new feature, toggle → conditional UI)
4. **Scope** — feature name for big features (`create-trip`), domain for small fixes (`driver`)
5. **Breaking change?** — API contract, DB schema, or interface changed?

### Step 3 — Choose Mode and Draft

- 1-2 files → **Mode 1** (prose body)
- 3+ files OR multiple logical layers → **Mode 2** (file-by-file bold headers)
- Mode 2 mein group karo: API Service → Config/Form → Store/State → Component/UI
- Specific method/function names ALWAYS include karo — kabhi vague mat likho

### Step 4 — Output

Present the commit message in a **copy-friendly code block**.

Then 1-line rationale: _"Mode 2 use kiya kyunki 4 files touched hain..."_

Truly unrelated concerns hain toh flag karo:

> "⚠️ Yeh diff mein 2 alag concerns hain — ideally 2 commits: [X] aur [Y]"

---

## Examples

### Example 1 — Simple Fix (Mode 1)

```
fix(driver): prevent null crash when license expiry date is missing

Driver profile fetch was throwing NPE when license_expiry_date was null
in legacy records migrated from the old system. Added null guard in
DriverService.getProfile() with fallback to UNKNOWN status.
```

### Example 2 — Big Feature (Mode 2)

```
feat(create-trip): add sea transport support, route sequence auto-fill, and driver lookup

- **API Service**: Added new endpoints `getTripType`, `getVessel`, `getShipment`,
  `getSeal`, and `getContainerTrip` to support sea transport data fetching.
- **Form Config (config.ts)**: Restructured trip fields and added `vessel` selector
  for sea transport. Upgraded `routeSequence` to multi-select with dynamic mapping.
  Added regex validation for `driver1Mobile` input.
- **State Logic (store.ts)**: Implemented dynamic field visibility toggle for Sea vs
  Road transport based on `tripType` selection. Built automatic driver lookup on
  `driver1Mobile` change to auto-fill `driverName` or prompt manual entry.
  Added intelligent `routeSequence` auto-population from selected routes.
- **Component (create-trip.component.ts)**: Added sticky action footer with Cancel
  and Create Trip buttons. Bound `submitFullTrip()` to validate `tripDetailsFormComp`
  and assemble final payload via `createMasterTrip()` in store.
```

### Example 3 — Breaking Change (Mode 2)

```
refactor(api): normalize vehicle status enum values to uppercase

- **VehicleEntity**: Changed status field type from mixed-case string to
  uppercase enum (ACTIVE, IDLE, MAINTENANCE) to align with mobile contract.
- **VehicleService**: Updated all status comparison logic to use new enum values.
- **VehicleController**: Response serializer now outputs uppercase status strings.

BREAKING CHANGE: API consumers must update status comparisons to uppercase.
Mobile app v2.3+ required.
```

### Example 4 — Chore (Mode 1)

```
chore(deps): upgrade axios to 1.6.8 to patch CVE-2024-39338

Upstream SSRF vulnerability in axios <1.6.8 affecting server-side fetch calls.
No API changes — drop-in patch upgrade.
```

---

## Fleet Management Domain Glossary

Use these scope names consistently:

| Scope         | Covers                                 |
| ------------- | -------------------------------------- |
| `vehicle`     | Vehicle CRUD, status, assignments      |
| `driver`      | Driver profiles, licenses, assignments |
| `trip`        | Trip lifecycle, routes, logs           |
| `fuel`        | Fuel logs, consumption tracking        |
| `maintenance` | Service schedules, alerts              |
| `tracking`    | GPS, telemetry, real-time location     |
| `auth`        | Login, roles, permissions              |
| `api`         | REST/GraphQL contracts, versioning     |
| `db`          | Migrations, schema changes             |
| `ui`          | Frontend components, pages             |
| `config`      | Env, build, CI/CD                      |

---

## Component Registry

Yeh section define karta hai ki **konsi file/class kis domain se belong karti hai** aur uske andar **kya logic hota hai**. Diff mein file name dekh ke scope aur change context automatically samjho.

> **Instruction**: Jab diff mein koi file mile, pehle neeche Component Registry mein dhundho. Matching entry mile toh — scope wahan se lo, aur "Logic" column se samjho ki is file mein normally kya hota hai, taaki body zyada meaningful likh sako.

### Vehicle Module

| Component                        | File Pattern                                | Layer           | Logic                                                                                        |
| -------------------------------- | ------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------- |
| `VehicleController`              | `**/vehicle/*Controller*`                   | API Layer       | REST endpoints for vehicle CRUD, status update, assignment APIs                              |
| `VehicleService`                 | `**/vehicle/*Service*`                      | Business Logic  | Vehicle lifecycle rules, status transitions (ACTIVE→IDLE→MAINTENANCE), assignment validation |
| `VehicleRepository`              | `**/vehicle/*Repository*`                   | Data Layer      | DB queries for vehicle fetch, filter by status/type/location                                 |
| `VehicleModel` / `VehicleEntity` | `**/vehicle/*Model*`, `**/vehicle/*Entity*` | Domain Model    | Vehicle schema — fields: id, regNo, type, status, assignedDriverId, lastLocation             |
| `VehicleDTO`                     | `**/vehicle/*DTO*`                          | Transfer Object | Request/response shapes for vehicle APIs                                                     |
| `VehicleMapper`                  | `**/vehicle/*Mapper*`                       | Mapping         | Entity ↔ DTO conversion logic                                                                |

### Driver Module

| Component          | File Pattern             | Layer          | Logic                                                                    |
| ------------------ | ------------------------ | -------------- | ------------------------------------------------------------------------ |
| `DriverController` | `**/driver/*Controller*` | API Layer      | Driver onboarding, profile fetch, license status APIs                    |
| `DriverService`    | `**/driver/*Service*`    | Business Logic | License expiry checks, driver availability, assignment eligibility rules |
| `DriverRepository` | `**/driver/*Repository*` | Data Layer     | Driver queries — filter by availability, license status, location        |
| `DriverEntity`     | `**/driver/*Entity*`     | Domain Model   | Fields: id, name, licenseNo, licenseExpiry, status, currentVehicleId     |

### Trip Module

| Component           | File Pattern                            | Layer          | Logic                                                                                  |
| ------------------- | --------------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| `TripController`    | `**/trip/*Controller*`                  | API Layer      | Trip start/end/cancel APIs, trip history endpoints                                     |
| `TripService`       | `**/trip/*Service*`                     | Business Logic | Trip state machine (SCHEDULED→ONGOING→COMPLETED/CANCELLED), ETA calc, route validation |
| `TripRepository`    | `**/trip/*Repository*`                  | Data Layer     | Trip queries — by driver, vehicle, date range, status                                  |
| `TripEntity`        | `**/trip/*Entity*`                      | Domain Model   | Fields: id, vehicleId, driverId, startTime, endTime, route, status, distanceKm         |
| `TripEventListener` | `**/trip/*Listener*`, `**/trip/*Event*` | Event          | Handles trip lifecycle events — triggers fuel log, maintenance check on trip end       |

### Fuel Module

| Component        | File Pattern           | Layer          | Logic                                                                          |
| ---------------- | ---------------------- | -------------- | ------------------------------------------------------------------------------ |
| `FuelLogService` | `**/fuel/*Service*`    | Business Logic | Fuel consumption recording, efficiency calculation (km/L), anomaly detection   |
| `FuelRepository` | `**/fuel/*Repository*` | Data Layer     | Fuel log queries by vehicle, date, trip                                        |
| `FuelEntity`     | `**/fuel/*Entity*`     | Domain Model   | Fields: id, vehicleId, tripId, litresFilled, costPerLitre, odometer, timestamp |

### Maintenance Module

| Component               | File Pattern                  | Layer          | Logic                                                                 |
| ----------------------- | ----------------------------- | -------------- | --------------------------------------------------------------------- |
| `MaintenanceService`    | `**/maintenance/*Service*`    | Business Logic | Schedule generation, due-date alerts, vehicle lock during maintenance |
| `MaintenanceRepository` | `**/maintenance/*Repository*` | Data Layer     | Fetch overdue schedules, upcoming services                            |
| `MaintenanceEntity`     | `**/maintenance/*Entity*`     | Domain Model   | Fields: id, vehicleId, type, scheduledDate, completedDate, status     |

### Tracking Module

| Component               | File Pattern                                      | Layer          | Logic                                                                |
| ----------------------- | ------------------------------------------------- | -------------- | -------------------------------------------------------------------- |
| `TrackingService`       | `**/tracking/*Service*`                           | Business Logic | Real-time GPS ingestion, geofence checks, idle detection             |
| `LocationUpdateHandler` | `**/tracking/*Handler*`, `**/tracking/*Consumer*` | Event/Stream   | Processes incoming GPS events from vehicle devices (WebSocket/Kafka) |
| `TrackingRepository`    | `**/tracking/*Repository*`                        | Data Layer     | Location history queries, last-known-position fetch                  |

### Auth Module

| Component                     | File Pattern                                  | Layer          | Logic                                                  |
| ----------------------------- | --------------------------------------------- | -------------- | ------------------------------------------------------ |
| `AuthController`              | `**/auth/*Controller*`                        | API Layer      | Login, logout, token refresh endpoints                 |
| `JwtService` / `TokenService` | `**/auth/*JWT*`, `**/auth/*Token*`            | Security       | JWT generation, validation, expiry handling            |
| `SecurityConfig`              | `**/config/*Security*`, `**/*SecurityConfig*` | Config         | Spring Security / auth filter chain configuration      |
| `RoleService`                 | `**/auth/*Role*`                              | Business Logic | Role-based access rules — ADMIN, MANAGER, DRIVER roles |

### Shared / Cross-cutting

| Component                | File Pattern                                     | Layer          | Logic                                                                          |
| ------------------------ | ------------------------------------------------ | -------------- | ------------------------------------------------------------------------------ |
| `GlobalExceptionHandler` | `**/*ExceptionHandler*`, `**/*ControllerAdvice*` | Error Handling | Centralized API error responses                                                |
| `BaseEntity`             | `**/*BaseEntity*`                                | Domain         | Common fields — createdAt, updatedAt, createdBy                                |
| `ApiResponse`            | `**/*ApiResponse*`, `**/*ResponseWrapper*`       | Util           | Standard response envelope for all APIs                                        |
| `*Config`                | `**/config/**`                                   | Config         | App configuration beans                                                        |
| DB Migration             | `**/db/migration/**`, `**/*.sql`, `**/V*__*.sql` | DB             | Flyway/Liquibase schema changes — ALWAYS mention table/column affected in body |

---

## Logic Analysis Guide

Jab diff mein specific code patterns dikhen, inhe identify karo aur commit body mein reflect karo:

| Pattern in Diff               | What it means               | Body mein mention karo                                                       |
| ----------------------------- | --------------------------- | ---------------------------------------------------------------------------- |
| `if (x == null)` added        | Null safety fix             | "Added null guard for `x` to prevent NPE when..."                            |
| `try-catch` added/modified    | Error handling change       | "Wrapped X in try-catch to handle Y gracefully"                              |
| New `@Scheduled` / cron       | Background job added        | "Introduced scheduled job to run X every Y"                                  |
| `@Transactional` added        | Transaction boundary change | "Wrapped operation in transaction to ensure atomicity"                       |
| New DB column in migration    | Schema change               | "Added column `col_name` to `table_name` for storing X"                      |
| `Optional<>` introduced       | Null safety refactor        | "Replaced nullable return with Optional to force null handling at call site" |
| Pagination added (`Pageable`) | Performance / scalability   | "Added pagination to prevent large result sets from X endpoint"              |
| New Kafka/event publish       | Async decoupling            | "Decoupled X from Y by publishing Z event instead of direct call"            |
| Index added in migration      | Query performance           | "Added index on `col` in `table` to speed up Y query"                        |
| `@Cacheable` added            | Caching introduced          | "Cached X response to reduce DB load for frequently accessed Y"              |

---

## Edge Cases

- **Huge diff (100+ lines)**: Summarize the dominant change; don't try to cover everything in subject
- **WIP / debug code accidentally staged**: Warn the user — "⚠️ Yahan ek `console.log` staged hai, intentional hai?"
- **Only whitespace/formatting changes**: Use `style` type, keep body minimal
- **Merge conflict resolution**: Use `fix: resolve merge conflict in <file>` — no body needed
