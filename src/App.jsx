import { useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import TaskManager from './TaskManager';
import APIFetcher from './APIFetcher';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Counter Demo (Optional) */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Counter Example</h2>
          <div className="flex items-center gap-4 justify-center">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              +
            </button>
          </div>
        </section>

        {/* Task Manager */}
        <section className="mb-8">
          <TaskManager />
        </section>

        {/* API Data */}
        <section>
          <APIFetcher />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
