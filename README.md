
# Minimalist Seasonal To-Do List 🌿

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, distraction-free productivity web application that prioritizes mental clarity through minimalist design and "Seasonal Moments"—subtle, keyword-triggered visual themes that bring a touch of life to your daily planning.

---

## 📸 Visual Preview

<p align="center">
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDgwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGOEY5RkIiLz4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KICAgIDwhLS0gSGVhZGVyIC0tPgogICAgPHRleHQgZmlsbD0iIzBGMTcyNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iMzAwIiBsZXR0ZXItc3BhY2luZz0iLTAuMDFlbSIgeD0iODAiIHk9IjgwIj5Uby1EbyBMaXN0PC90ZXh0PgogICAgPHRleHQgZmlsbD0iIzk0QTNDQiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iMzAwIiB4PSI4MCIgeT0iMTA1Ij5BIHNpbXBsZSBzcGFjZSBmb3IgeW91ciB0YXNrcy4uLjwvdGV4dD4KICAgIAogICAgPCEtLSBJbnB1dCBBcmVhIC0tPgogICAgPHJlY3QgeD0iODAiIHk9IjE2MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxIiBmaWxsPSIjRTJFOEYwIi8+CiAgICA8dGV4dCBmaWxsPSIjOTRBM0NCIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iOSIgZm9udC13ZWlnaHQ9IjYwMCIgbGV0dGVyLXNwYWNpbmc9IjAuMWVtIiB4PSI4MCIgeT0iMTUwIj5UQVNLPC90ZXh0PgogICAgPHRleHQgZmlsbD0iIzY0NzQ4QiIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE0IiB4PSI4MCIgeT0iMTg1Ij5XaGF0IG5lZWRzIHRvIGJlIGRvbmU/PC90ZXh0PgogICAgCiAgICA8IS0tIFRhc2sgSXRlbXMgLS0+CiAgICA8IS0tIERhdGUgRGl2aWRlciAtLT4KICAgIDx0ZXh0IGZpbGw9IiNDREU0RUYiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBsZXR0ZXItc3BhY2luZz0iMC4yZW0iIHg9IjgwIiB5PSIyNTAiPk1PTkRBWSwgTUFSAzExPC90ZXh0PgogICAgPHJlY3QgeD0iMjAwIiB5PSIyNDciIHdpZHRoPSI1MjAiIGhlaWdodD0iMSIgZmlsbD0iI0YxRjVGO some actual text for visual preview in SVG -->
    <rect x="80" y="270" width="640" height="70" rx="12" fill="white" stroke="#F1F5F9" stroke-width="1"/>
    <rect x="95" y="295" width="20" height="20" rx="6" stroke="#E2E8F0" stroke-width="2"/>
    <text fill="#1E293B" font-family="Inter" font-size="16" font-weight="300" x="130" y="310">Morning run at the park</text>
    
    <!-- Themed Task (Fitness) -->
    <rect x="80" y="350" width="640" height="70" rx="12" fill="#ECFEFF" fill-opacity="0.5" stroke="white" stroke-width="1"/>
    <rect x="95" y="375" width="20" height="20" rx="6" fill="#06B6D4" stroke="#06B6D4" stroke-width="2"/>
    <path d="M100 385L104 389L110 381" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text fill="#06B6D4" font-family="Inter" font-size="14" x="130" y="390">💪</text>
    <text fill="#64748B" font-family="Inter" font-size="16" font-weight="300" x="155" y="390" text-decoration="line-through">Evening gym session</text>
    <text fill="#94A3CB" font-family="Inter" font-size="9" font-weight="700" x="130" y="410">MAR 11 • 18:30</text>
  </g>
</svg>" alt="Minimalist To-Do List Preview" width="100%">
</p>

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
