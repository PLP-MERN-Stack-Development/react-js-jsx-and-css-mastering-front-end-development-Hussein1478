import React from 'react'

const Footer = () => (
  <footer className="bg-white dark:bg-gray-800 shadow mt-10">
    <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} PLP Task Manager | Built with React & Tailwind
    </div>
  </footer>
)

export default Footer
