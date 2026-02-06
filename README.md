# Minimalist Seasonal To-Do List 🌿

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, distraction-free productivity web application that prioritizes mental clarity through minimalist design and "Seasonal Moments"—subtle, keyword-triggered and date-triggered visual themes that bring a touch of life to your daily planning.

---

## 📸 Visual Preview

<p align="center">
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDgwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGOEY5RkIiLz4KICA8dGV4dCBmaWxsPSIjMEYxNzJBIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZvbnQtd2VpZ2h0PSIzMDAiIHg9IjgwIiB5PSI4MCI+VG8tRG8gTGlzdDwvdGV4dD4KICA8dGV4dCBmaWxsPSIjOTRBM0I4IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSIzMDAiIHg9IjgwIiB5PSIxMTAiPkEgc2ltcGxlIHNwYWNlIGZvciB5b3VyIHRhc2tzLjwvdGV4dD4KICAKICA8IS0tIElucHV0IHNlY3Rpb24gLS0+CiAgPHJlY3QgeD0iODAiIHk9IjE2MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxIiBmaWxsPSIjRTJFOEYwIi8+CiAgPHRleHQgZmlsbD0iIzk0QTNCOCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNjAwIiB4PSI4MCIgeT0iMTUwIj5UQVNLPC90ZXh0PgogIDx0ZXh0IGZpbGw9IiM2NDc0OEIiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgeD0iODAiIHk9IjE5MCI+TW9ybmluZyBjb2ZmZWUgd2l0aCB0ZWFtPC90ZXh0PgogIAogIDwhLS0gRGF0ZSBEaXZpZGVyIC0tPgogIDx0ZXh0IGZpbGw9IiNDQkQ1RTEiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjcwMCIgeD0iODAiIHk9IjI2MCI+RlJJREFZLCBGRUIgMTQ8L3RleHQ+CiAgPHJlY3QgeD0iMjAwIiB5PSIyNTciIHdpZHRoPSI1MjAiIGhlaWdodD0iMSIgZmlsbD0iI0YxRjVGOV9fIi8+CiAgCiAgPCEtLSBWYWxlbnRpbmUgVGFzayAtLT4KICA8cmVjdCB4PSI4MCIgeT0iMjgwIiB3aWR0aD0iNjQwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiNGRkYxRjIiIGZpbGwtb3BhY2l0eT0iMC41IiBzdHJva2U9IiNGRkU0RTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjEwMCIgeT0iMzEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSI2IiBmaWxsPSIjRkI3MTg1IiBzdHJva2U9IiNGQjcxODUiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxwYXRoIGQ9Ik0xMDYgMzIwTDEwOSAzMjNMMTE0IDMxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8dGV4dCBmaWxsPSIjRkI3MTg1IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIHg9IjEzNSIgeT0iMzI1Ij7wn5KWIFZhbGVudGluZSBEaW5uZXI8L3RleHQ+CiAgPHRleHQgZmlsbD0iIzk0QTNCOCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iNzAwIiB4PSIxMzUiIHk9IjM0NSI+RkVCLDE0IOKCoreDE5OjMwPC90ZXh0PgogIAogIDwhLS0gT3ZlcmR1ZSBUYXNrIC0tPgogIDxyZWN0IHg9IjgwIiB5PSIzODAiIHdpZHRoPSI2NDAiIGhlaWdodD0iODAiIHJ4PSIxMiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0YxRjVGOSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiLz4KICA8cmVjdCB4PSIxMDAiIHk9IjQxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iNiIgZmlsbD0iI0YxRjVGOSIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8dGV4dCBmaWxsPSIjNjQ3NDhCIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIHg9IjEzNSIgeT0iNDI1IiB0ZXh0LWRlY29yYXRpb249ImxpbmUtdGhyb3VnaCI+QnV5IGNob2NvbGF0ZXM8L3RleHQ+CiAgPHRleHQgZmlsbD0iIzk0QTNCOCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iNzAwIiB4PSIxMzUiIHk9IjQ0NSI+RkVCLDEzIOKCoreDEwOjAwPC90ZXh0Pgo8L3N2Zz4=" alt="Minimalist To-Do List Preview" width="100%">
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