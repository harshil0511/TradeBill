# 🌽 TradeBill — Maize Brokerage Billing System

TradeBill is a high-performance, professional web-based billing solution tailored for **Maize (Corn) Brokerage** in the Indian commodity market. Designed for speed and reliability, it streamlines the creation of brokerage statements and provides seamless Excel reporting.

---

## ✨ Key Features

- **🚀 Instant Auto-Calculations**: Automatic "Dalali" (brokerage) calculation based on weight (Standard Rs 50/quintal formula).
- **📊 Professional Excel Export**: Generate detailed, multi-sheet `.xlsx` workbooks with custom summaries and itemized logs using `ExcelJS`.
- **🧠 Intelligent Autocomplete**: Built-in memory for Party Names and Truck Numbers to minimize repetitive typing.
- **💾 Auto-Save Drafts**: Persistent local storage ensures your work is never lost, even if you close the browser.
- **💎 Premium Design**: A modern, responsive interface featuring elegant typography (`Playfair Display` & `DM Sans`) and cinematic gradients.
- **⚡ No-Backend Architecture**: Runs entirely in the browser. No databases, no logins—just pure performance.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3.
- **Typography**: Google Fonts (DM Sans, Playfair Display).
- **Libraries**: [ExcelJS](https://github.com/exceljs/exceljs) for robust Excel generation.
- **Deployment**: Optimized for static hosting (Vercel/GitHub Pages).

---

## 📖 How to Use

1. **Broker Details**: Fill in your business information (Name, PAN, Bank details). These are saved automatically.
2. **Bill-To Info**: Enter the party's name and the statement duration.
3. **Entries**: Add brokerage rows. The "Dalali" will auto-calculate as you type the weight.
4. **Drafts**: Click **Save Draft** to keep your progress. Access previous drafts via the **Drafts** panel.
5. **Export**: Hit **Download Excel** to get your professional statement ready for sharing.

---

## 🏗️ Development & Design Principles

- **Speed First**: Minimalist architectural footprint for lightning-fast loads.
- **Indian Context**: Native support for Indian numbering systems (Lac/Cr) and currency (`Rs`).
- **Data Privacy**: All data stays on your machine. We never see your bills.

---

*Made for modern commodity trading.*
