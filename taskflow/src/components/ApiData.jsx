import React, { useState, useEffect } from 'react'


const ApiData = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then((res) => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch data')
        setLoading(false)
      })
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p>Loading data...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">API Data</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
      />

      <ul className="space-y-2">
        {filteredPosts.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-2">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApiData
