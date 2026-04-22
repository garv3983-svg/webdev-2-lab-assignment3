# 🎓 Student Scoreboard — React + Vite

A React application for managing and displaying student scores, built for Web Dev II (Unit 3).

## ✨ Features
- View all students ranked by score
- Update scores dynamically with live score bars
- Add new students via form with validation
- Pass/Fail status (≥ 40 = Pass, < 40 = Fail)
- Live stats: total, pass count, fail count, average
- Delete students

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## 🗂 Project Structure

```
student-scoreboard/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── StudentTable.jsx
    │   ├── StudentRow.jsx
    │   └── AddStudentForm.jsx
    └── styles/
        ├── index.css
        ├── Header.css
        ├── StudentTable.css
        ├── StudentRow.css
        └── AddStudentForm.css
```

## 🛠 Tech Stack
- React 18 + Vite
- Pure CSS (no Tailwind)
- Google Fonts: Syne + JetBrains Mono
