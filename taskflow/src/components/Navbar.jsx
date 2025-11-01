import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          PLP Task Manager
        </h1>
        <button
          onClick={toggleTheme}
          className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
