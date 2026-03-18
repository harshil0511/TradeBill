# TradeBill — Maize Brokerage Billing System
**claude.md · v2.1 (updated)**

---

## Project Overview

A single-page Maize Brokerage Bill generator for Indian commodity brokers.
Biller fills in party details fresh every time → adds brokerage entries dynamically →
exports to **Excel (.xlsx)**.
Built in one HTML file. No login, no database, no backend.

---

## Tech Stack

- **Single HTML file** (HTML + CSS + JS — all in one file)
- **SheetJS (xlsx.js)** (CDN: https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js)
- No PDF export.
- Deploy: Vercel / any static host

---

## Data Rules — What is Pre-filled vs What is Blank

### PRE-FILLED (Broker / Seller — fixed, same every bill)
These are the broker's own details. Always pre-filled, always editable.

| Field    | Pre-filled Value                  |
|----------|-----------------------------------|
| Name     | MAHESHBHAI BHIKHABHAI CHAUDHARI   |
| Address  | RAJPUR(VAD), TA-VADNAGAR          |
| District | DIS-MAHESANA, GUJARAT             |
| PIN      | 384355                            |
| Phone 1  | 9429319065                        |
| Phone 2  | 9714319065                        |
| Email    | maheshrajpur@gmail.com            |
| PAN      | ATUPC2709D                        |
| A/C No.  | 221710310000016                   |
| IFSC     | BKID0002217                       |
| Branch   | VADNAGAR                          |

### BLANK (Bill-To / Party — changes every bill, biller types fresh)

| Field         | Default  | Note                              |
|---------------|----------|-----------------------------------|
| Bill No.      | BLANK    | Biller types manually each time   |
| Party Name    | BLANK    | Biller types / selects each time  |
| Party Address | BLANK    | Optional                          |
| From Date     | BLANK    | Biller selects start date         |
| To Date       | today    | Auto-filled with today's date     |

> IMPORTANT: Do NOT pre-fill Bill No. or Party Name with any sample value.
> Every bill is for a different party. Biller enters these fresh each time.

---

## Features to Build

### 1. Broker Details Section (always pre-filled, always editable)
- Broker Name, Address, District/State, PIN
- Phone 1, Phone 2, Email, PAN
- Bank: A/C Number, IFSC, Branch

### 2. Bill-To Section (BLANK — biller fills every time)
- Bill Number — empty input, biller types
- Party / Buyer Name — empty input, biller types (no default)
- Party Address — optional empty input
- Statement Period: From Date (blank) → To Date (auto today)

### 3. Brokerage Entries Table (Dynamic rows)
Each row has these columns exactly:

| Column     | Type                | Notes                                                         |
|------------|---------------------|---------------------------------------------------------------|
| SL No.     | auto                | 1,2,3... auto-numbered, renumbers on delete                   |
| Date       | date picker         | Default: today's date                                         |
| Party Name | text + autocomplete | Suggest from known buyers datalist                            |
| Rate       | number              | Maize rate per quintal (e.g. 2425)                            |
| Bill No.   | text                | Party bill / lorry receipt number                             |
| Weight     | number (kg)         | Gross weight in kilograms                                     |
| Dalali     | number (Rs)         | Auto-calculated = round(weight / 20), user can override       |
| Truck No.  | text + autocomplete | Suggest from known trucks datalist                            |
| Agency     | dropdown            | M/S SHAH AGENCY / SHREE AGENCY / SURAJMAL KARANMAL / S.S AGENCY |
| Actions    | buttons             | Duplicate row, Delete row                                     |

### 4. Auto Calculations (live, instant)
- Dalali formula: dalali = Math.round(weight / 20)
  (Rs 50 per quintal = weight divided by 20)
  Auto-fills when weight is typed; user can manually override after
- Live summary bar always visible:
  - Total Entries (row count)
  - Total Weight in kg (sum of all weight fields)
  - Total Dalali / Brokerage in Rs (sum of all dalali fields)

### 5. Export: Excel Download
Generates .xlsx file with two sheets:

Sheet 1 — Summary:
- Broker header (name, address, phone, PAN, email)
- Bill-To info (party name, bill no.)
- Summary table: Date | Type | Invoice# | Description | Amount | Balance
- Bank details at bottom
- Reminder + Terms text

Sheet 2 — Brokerage Detail:
- Full entries table: SL | DATE | NAME | RATE | BILL NO. | WEIGHT | DALALI | TRUCK NO. | AGENCY
- Total row at bottom (weight total + dalali total)
- Period note: DATE-[FROM] TO DATE-[TO] MAIZE BROKERAGE

---

## Autocomplete Data

### Known Buyers (datalist)
- SHREE LAXMI AGRO
- VINAYAK CORPORATION
- VIKASH TRADERS
- DHANLAXMI ENTERPRIES
- GANESH TREDING
- PRINCE ENTERPRIES
- AADESH TREDING

### Known Truck Numbers (datalist)
- RJ09GC9346
- RJ12GA2985
- GJ09AU6834
- RJ35GA1444
- RJ35GA9450
- RJ27GA9968
- GJ08Z4168
- RJ27GB1035
- GJ09Z4168
- GJ09Z8870
- RJ12GB0188
- RJ27GC1552
- RJ12GB0288
- RJ35GA0741
- RJ14GH2397
- RJ35GA2346
- RJ27GC5554
- RJ12GA9621
- RJ12GA1433
- RJ27GB5680
- RJ09GE1836
- RJ35GA8886

---

## Indian Context

- Currency always Rs / Rs symbol — never $ or USD
- Number format: Rs 1,00,000 using toLocaleString('en-IN')
- Date format: DD-MM-YYYY in all output (PDF, Excel)
- Input fields use native type="date" (browser YYYY-MM-DD internally)
- Dalali = brokerage commission in Rs

---

## UI / Design Rules

- Theme: Blue and white — clean professional look
- Font: Playfair Display (headings) + DM Sans (body) via Google Fonts CDN
- Color palette:
  - Dark Blue: #1e3a8a
  - Primary Blue: #1a56db
  - Blue Light bg: #dbeafe
  - Blue Pale row: #eff6ff
  - Green (dalali): #059669
  - Text: #0f172a
  - Muted label: #64748b
  - Border: #e2e8f0
- Header bar: Full-width dark to blue gradient, logo corn emoji + "TradeBill"
- Cards: White, border-radius 12px, soft blue shadow, 1px blue border
- Table header row: Dark blue gradient, white text
- Table rows: Alternate white / pale-blue
- Table footer: Dark blue, white bold totals
- Summary strip: Dark blue gradient bar, gold highlight for total Rs amount
- Desktop only — no mobile responsive needed

---

## Code Rules

- Everything in ONE HTML file — no separate .css or .js files
- No TypeScript, no React, no Vue — plain HTML + CSS + vanilla JS only
- Comments in English throughout code
- Add Row button always visible below table
- Duplicate + Delete button on every row
- "New Bill" button clears all entries with confirm dialog
- Toast notification on: Excel download, clear all
- No locked / read-only fields — everything editable

---

## Buttons Layout

Header top right:
- New Bill button
- Download Excel button

Below entries table:
- Add Row (left side)
- Download Excel (right side)

---

## File Naming

- Excel: TradeBill_[PartyName]_[FromDate]_[ToDate].xlsx
- If party name is blank: TradeBill_[FromDate]_[ToDate].xlsx

---

*End of TradeBill claude.md v2.1*
