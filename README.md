# Minimalist Seasonal To-Do List 🌿

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, distraction-free productivity web application that prioritizes mental clarity through minimalist design and "Seasonal Moments"—subtle, keyword-triggered and date-triggered visual themes that bring a touch of life to your daily planning.

---

## 📸 Visual Preview

<p align="center">
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNGOEY5RkIiLz4KICA8dGV4dCBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDIiIGZvbnQtd2VpZ2h0PSI1MDAiIHg9IjgwIiB5PSIxMDAiPlRvLURvIExpc3Q8L3RleHQ+CiAgPHRleHQgZmlsbD0iIzk0QTNCOCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiB4PSI4MCIgeT0iMTMwIj5BIHNpbXBsZSBzcGFjZSBmb3IgeW91ciB0YXNrcyB0aGF0IGNlbGVicmF0ZXMgdGhlIGxpdHRsZSBzZWFzb25hbCBtb21lbnRzLjwvdGV4dD4KICAKICA8dGV4dCBmaWxsPSIjOTRBM0I4IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSI3MDAiIHg9IjgwIiB5PSIxOTAiPlRBU0s8L3RleHQ+CiAgPHRleHQgZmlsbD0iI0NCRDVFMSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiB4PSI4MCIgeT0iMjMwIj5XaGF0IG5lZWRzIHRvIGJlIGRvbmU/PC90ZXh0PgogIDxsaW5lIHgxPSI4MCIgeTE9IjI0NSIgeDI9IjcyMCIgeTI9IjI0NSIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAKICA8dGV4dCBmaWxsPSIjOTRBM0I4IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSI3MDAiIHg9IjgwIiB5PSIyOTAiPkRBVEU8L3RleHQ+CiAgPHJlY3QgeD0iODAiIHk9IjMxNSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIgc3Ryb2tlPSIjOTRBM0I4IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IGZpbGw9IiMzNzQxNTEiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgeD0iMTA1IiB5PSIzMzAiPkZlYiA2LCAyMDI2PC90ZXh0PgogIDxsaW5lIHgxPSI4MCIgeTE9IjM0NSIgeDI9IjM5MCIgeTI9IjM0NSIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAKICA8dGV4dCBmaWxsPSIjOTRBM0I4IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSI3MDAiIHg9IjQyMCIgeT0iMjkwIj5USU1FPC90ZXh0PgogIDxjaXJjbGUgY3g9IjQyOCIgY3k9IjMyMyIgcj0iOCIgc3Ryb2tlPSIjOTRBM0I4IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IGZpbGw9IiMzNzQxNTEiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgeD0iNDQ1IiB5PSIzMzAiPjIxOjI0PC90ZXh0PgogIDxsaW5lIHgxPSI0MjAiIHkxPSIzNDUiIHgyPSI3MjAiIHkyPSIzNDUiIHN0cm9rZT0iI0UyRThGMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgCiAgPHJlY3QgeD0iODAiIHk9IjM4MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI1MCIgcng9IjgiIGZpbGw9IiMwRjE3MkEiLz4KICA8dGV4dCBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iODAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MDAiIHk9IjQxMCI+QUREIFRBU0s8L3RleHQ+CiAgCiAgPHRleHQgZmlsbD0iI0NCRRDVFMSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXN0eWxlPSJpdGFsaWMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQwMCIgeT0iNTIwIj5Zb3VyIGxpc3QgaXMgZW1wdHkuPC90ZXh0Pgo8L3N2Zz4=" alt="Minimalist To-Do List Preview" width="100%">
</p>

---

## ✨ Project Overview

In an era of notification-heavy productivity tools, this application takes a "passive" approach. It features zero popups, zero reminders, and zero sound alerts. Instead, it offers a single scrolling canvas where tasks live, expire, and persist quietly.

### Core Philosophy
- **Whitespace as a Feature**: Massive margins and high-contrast typography to reduce cognitive load.
- **Passive Persistence**: Overdue tasks aren't deleted; they fade into the background, providing a honest history of your schedule.
- **Delightful Discovery**: Subtle animations and emojis appear only when specific contexts (like holidays or fitness) are detected in your writing or selected dates.

## 🚀 Key Features

### 📅 Smart Organization
- **Automatic Grouping**: Tasks are automatically sorted and visually separated by their due date.
- **Intuitive UI Pickers**: Custom-built minimalist calendar and time-column pickers designed to match the app's aesthetic.
- **Drag-and-Drop**: Fluid reordering of tasks within the list using a dedicated grip handle.

### 🎭 Seasonal Moments (Themes)
The app listens for keywords in your task descriptions AND specific calendar dates to apply unique visual styles:
- **Date Triggers**: Significant dates like Feb 14 (Valentine's), Oct 31 (Halloween), and Dec 25 (Christmas) automatically theme tasks.
- **Keyword Triggers**: (Gym, workout, exercise) triggers a cyan theme with a 💪 icon.
- **Nature**: (Summer, Autumn) adjust the background and iconography to match the season.

### ⚡ Live Reactivity
- **Automatic Cross-out**: The app checks every second against the system clock. Once a task's due time passes, it instantly strikes through and reduces opacity without any user interaction.
- **Real-time Persistence**: All data is saved to `localStorage`, ensuring your list survives browser refreshes and crashes.

## 🛠️ Tech Stack

- **Frontend**: React 19 (Functional Components & Hooks)
- **Styling**: Tailwind CSS (JIT compiler for optimized builds)
- **Icons**: Lucide React (Clean, thin-stroke vector icons)
- **Date Logic**: `date-fns` (Precision date/time manipulation)
- **Utilities**: `clsx` & `tailwind-merge` (Dynamic class handling)

## 📖 Seasonal Keyword & Date Guide

Want to see the themes in action? Try adding these keywords or setting tasks on these dates:

| Theme | Keywords | Date Trigger | Emoji |
| :--- | :--- | :--- | :--- |
| **Valentine** | `valentine` | Feb 14 | 💖 |
| **Halloween**| `halloween`, `spooky` | Oct 31 | 👻 |
| **Christmas**| `christmas`, `holiday` | Dec 24/25 | 🎁 |
| **Ramadan** | `ramadan`, `ramadhan` | - | 🌙 |
| **Easter** | `easter` | - | 🐰 |
| **Summer** | `summer`, `beach` | Jun 21 | ☀️ |
| **Autumn** | - | Sep 22 | 🍂 |
| **Fitness** | `gym`, `workout`, `lift`| - | 💪 |

## 📦 Getting Started

### Prerequisites
- A modern browser (Chrome, Safari, Edge, Firefox).

### Installation
1. Clone the repository.
2. Run `npm install`.
3. Open `index.html` or run `npm run dev`.

## 🤝 Contributing

Contributions are welcome! Whether it's adding new seasonal themes or refining the minimalist CSS, please feel free to fork and PR.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Stop checking out my bottom.*