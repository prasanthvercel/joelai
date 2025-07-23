'use client';

import Link from 'next/link';

export default function Splash() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Welcome to English Practice AI
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Improve your English with AI-powered conversations and exercises.
        </p>
        <div className="w-full max-w-sm">
          <Link href="/register" className="block mb-4">
            <button className="w-full px-4 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600">
              Get Started
            </button>
          </Link>
          <Link href="/login" className="block">
            <button className="w-full px-4 py-3 text-lg font-semibold text-blue-500 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800">
              Already have an account? Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
