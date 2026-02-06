
# Minimalist Seasonal To-Do List 🌿

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, distraction-free productivity web application that prioritizes mental clarity through minimalist design and "Seasonal Moments"—subtle, keyword-triggered visual themes that bring a touch of life to your daily planning.

---

## ✨ Project Overview

In an era of notification-heavy productivity tools, this application takes a "passive" approach. It features zero popups, zero reminders, and zero sound alerts. Instead, it offers a single scrolling canvas where tasks live, expire, and persist quietly.

### Core Philosophy
- **Whitespace as a Feature**: Massive margins and high-contrast typography to reduce cognitive load.
- **Passive Persistence**: Overdue tasks aren't deleted; they fade into the background, providing a honest history of your schedule.
- **Delightful Discovery**: Subtle animations and emojis appear only when specific contexts (like holidays or fitness) are detected in your writing.

## 🚀 Key Features

### 📅 Smart Organization
- **Automatic Grouping**: Tasks are automatically sorted and visually separated by their due date.
- **Intuitive UI Pickers**: Custom-built minimalist calendar and time-column pickers designed to match the app's aesthetic.
- **Drag-and-Drop**: Fluid reordering of tasks within the list using a dedicated grip handle.

### 🎭 Seasonal Moments (Themes)
The app listens for keywords in your task descriptions to apply unique visual styles:
- **Fitness**: (Gym, workout, exercise) triggers a cyan theme with a 💪 icon.
- **Holidays**: (Christmas, Halloween, Ramadan, Valentine) trigger specialized color palettes and animated emojis.
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

## 📖 Seasonal Keyword Guide

Want to see the themes in action? Try adding these keywords to your tasks:

| Theme | Keywords | Emoji |
| :--- | :--- | :--- |
| **Valentine** | `valentine` | 💖 |
| **Ramadan** | `ramadan`, `ramadhan` | 🌙 |
| **Easter** | `easter` | 🐰 |
| **Carnival** | `carnival`, `brazil` | ✨ |
| **Halloween**| `halloween`, `spooky` | 👻 |
| **Christmas**| `christmas`, `holiday` | 🎁 |
| **Summer** | `summer`, `beach` | ☀️ |
| **Fitness** | `gym`, `workout`, `lift`| 💪 |

## 📦 Getting Started

### Prerequisites
- A modern browser (Chrome, Safari, Edge, Firefox).
- The project is configured to run via ESM modules directly in the browser or via standard React build tools.

### Installation
1. Clone the repository.
2. Run `npm install` to gather dependencies (if using a local build environment).
3. Open `index.html` or run `npm run dev`.

## 🤝 Contributing

Contributions are welcome! Whether it's adding new seasonal themes or refining the minimalist CSS, please feel free to:
1. Fork the project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Stop checking out my bottom.*
