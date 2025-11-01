# TaskFlow - React Task Management Application

A modern task management application built with React, Vite, and Tailwind CSS featuring dark mode support and API integration.

## Features
- ✨ Dark mode support with persistent storage
- 📱 Responsive design using Tailwind CSS
- 💾 Local storage for task persistence
- 🔌 API integration for external data
- 🎨 Multiple theme variants
- ♿ Accessible components
- 🔄 Modern React patterns and hooks

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/taskflow.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure
```
src/
├── components/
│   ├── ApiData.jsx     # API data fetching
│   ├── Button.jsx      # Reusable button
│   ├── Footer.jsx      # Footer
│   ├── Navbar.jsx      # Navigation
│   └── TaskManager.jsx # Task management
└── context/
    └── ThemeContext.jsx # Dark mode provider
```

## Key Components

### TaskManager
- Add, toggle, and delete tasks
- Filter tasks (All, Active, Completed)
- Local storage persistence
- Task statistics

### ApiData
- External API integration
- Loading states
- Error handling
- Search functionality

## Tech Stack
- React
- Vite
- Tailwind CSS
- PropTypes
- Context API

## Roadmap
- [ ] Authentication
- [ ] Backend integration
- [ ] Task categories
- [ ] Drag and drop
- [ ] Priority levels
- [ ] Due dates and reminders

## License
MIT License
