# Palmer Property Maintenance Operations PWA v8.0

This release is a **single-file, offline-first property-maintenance operations application**. It is designed for a trusted local operator who needs field-ready work orders, property/asset intelligence, financial control, a complete local audit history, and encrypted backup/export.

## Included upgrade features

| Area | Delivered capability |
|---|---|
| Work orders | Property, unit/area, reporter, safety controls, access notes, priority, due date, appointment window, next owner, workflow status, full history, explicit **Edit** / **Delete** controls, a dedicated **Mark Job Completed** form, and a separate completed-job register. |
| Quotes and approvals | Structured multiple quotations, VAT, scope, exclusions, warranty, selected quote, decision attribution, approver, note, and timestamp. |
| Evidence and close-out | Local photo/document attachments, invoice number, actual cost, warranty date, verified completion note, verifier, and return-visit state. |
| Properties and assets | Expanded property profiles, access/emergency controls, asset register, service intervals, warranty dates, and asset-generated work orders. |
| Planned maintenance | Configurable PPM templates, due-service queue, and a scan that generates work orders for due assets without silently changing existing work. |
| Management visibility | Dashboard action queue, overdue/urgent/approval alerts, finance register, budget variance, contractor register, CSV exports, a branded owner pack, job cards, and a **Save as PDF** control for every main section. |
| Continuity and governance | Local audit ledger, automatic previous-save snapshot, encrypted AES-GCM/PBKDF2 backup export, restore/merge preview, and PWA cache versioning. |

## Installation and hosting

The application files are deliberately simple:

```text
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
apple-touch-icon.png
favicon-32.png
```

Deploy all files together at the root of an **HTTPS** website or local trusted web server. Do not run production operations by double-clicking `index.html` from a file share. HTTPS is required for reliable service-worker/PWA behaviour, and browser storage semantics are not dependable for direct `file://` launches.

After publishing an updated release, change the `CACHE_NAME` in `sw.js` and the `APP_VERSION` in `index.html`. Open the new site once while online, then refresh to activate the latest cache.

## First-use procedure

1. Open **Data & Settings** and set the operator name, owner/approver, and monthly budget.
2. Add each property, including access arrangements and emergency isolation/hazard information.
3. Register key assets such as geysers, gate motors, pumps, fire equipment, and air conditioners.
4. Add contractors with correct service categories and contact details.
5. Create a protected backup immediately, store its passphrase separately, and test a restore in a clean browser profile.
6. Create a work order and verify the workflow through quotation, approval, evidence, actual cost, and close-out.

## Saving documents as PDF

Every main view has a visible **Save … as PDF** action and the top bar provides **Save current view as PDF** from any section. Each action opens a branded print preview carrying the Palmer logo. In the browser print window, select **Save to PDF** (or **Microsoft Print to PDF** on Windows), choose the destination, then save. The job detail also provides **Save Job Card as PDF** and the Reports view provides **Save Owner Pack as PDF**.

Use the Work Orders register’s **Edit** and **Delete** buttons to manage a specific job directly. Delete requests require a confirmation. The job detail retains the same actions so you can edit or delete while reviewing the full job record.

## Completing a job and filing the receipt

Open the job and select **Mark Job Completed** from the Overview panel, or select **Verify and close job** in the Evidence & Close-out tab. Record the work-start date, completion date, contractor, total job cost, verified-by name, work carried out, and completion note. Saving this form marks the job **Completed**, removes it from the default **Open jobs only** register, and retains it under **Completed jobs**.

Open a completed job and select **Completion Receipt PDF**. The branded receipt follows the supplied filing example: it includes the Palmer logo, job order number, property and occupant details, reported issue, work carried out, total job cost, certification statement, and contractor/verification signature lines. In the print dialog choose **Save to PDF** to store it for filing.

## Backup discipline

Use **Create encrypted backup** at least after material operational changes and before publishing any new application release. The backup passphrase cannot be recovered by the application. Keep the encrypted JSON backup outside the same browser/device, such as in an approved encrypted drive or protected cloud folder.

The local **previous snapshot** is a convenience recovery feature, not a substitute for an external backup. It contains only the immediately preceding saved local record set.

## Operating limitation and expansion path

This is a **local, single-operator PWA**. It intentionally does not expose a network API or provide user authentication. It is suitable where one trusted operator updates the register from one browser profile or device.

If Whiskey 1, contractors, administrators, or multiple devices require concurrent live access, do **not** circulate backup files as a substitute for collaboration. The correct next step is a separate shared-service build with authenticated accounts, roles, a central database, object storage for evidence, server-side audit records, conflict resolution, secure notifications, and managed backups.

## Acceptance checks

Before using the release operationally, confirm that you can create a property, create a work order, add a quote, record an approval, add a small evidence attachment, enter actual cost, close the job, export a CSV, create an encrypted backup, and restore that backup into a clean browser profile.
