import React, { useState } from 'react';

const demoPosts = [
  {
    id: 1,
    title: "How to Stay Productive While Working from Home",
    body: "Discover strategies to maintain focus, avoid distractions, and create a healthy remote work routine.",
  },
  {
    id: 2,
    title: "10 Tips for Learning React Quickly",
    body: "Whether you're new or switching from another framework, these tips will boost your learning journey.",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    body: "A beginner-friendly explanation of closures with practical examples to solidify your understanding.",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use What",
    body: "Learn the differences between Grid and Flexbox and when to use each layout system effectively.",
  },
  {
    id: 5,
    title: "How Dark Mode Can Improve UX",
    body: "Dark mode isn’t just trendy — it can also enhance readability and reduce eye strain.",
  },
  {
    id: 6,
    title: "What is Tailwind CSS and Why Use It?",
    body: "Explore the benefits of utility-first CSS and how Tailwind makes styling faster and more consistent.",
  },
];

const APIFetcher = () => {
  const [search, setSearch] = useState('');

  const filteredPosts = demoPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Public API Data (Demo Posts)</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {post.body}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default APIFetcher;
