# 🛡️ Moderation Queue Interface

A responsive web interface that helps moderators review and manage reported posts quickly and efficiently — with batch actions, undo functionality, and simple design that keeps the focus on moderation.

---

## 📌 Features

- 🗂️ Post List View (title, author, report reason, timestamp)
- ✅ Approve / Reject per post (with disabled state)
- 🔍 Full content preview modal with next/prev nav
- 📦 Batch operations: Select All, Approve All, Reject All
- 🔁 Undo last action with toast
- 🧭 Status filter tabs (Pending, Approved, Rejected)
- 💻 Fully responsive (desktop and tablet)

---

## ⚙️ Tech Stack

- **React (Vite)** — Fast modern dev experience
- **Redux Toolkit** — State management
- **Simple CSS** — No frameworks, clean native styles
- **No backend required** — Uses mock data only

---

## 🧰 Prerequisites & Dependencies

Make sure you have:

- **Node.js** ≥ 18
- **npm** ≥ 9

### Main dependencies used:

- `react`, `react-dom`
- `@reduxjs/toolkit`, `react-redux`
- `vite`

---

## 📦 Installation Steps

```bash
# 1. Clone the repo
git clone https://github.com/rohitfromearth/moderation-ui.git
cd moderation-ui

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
