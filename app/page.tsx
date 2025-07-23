'use client';

import Link from 'next/link';

export default function Splash() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white">
      <div className="flex flex-col items-center justify-center h-full text-center">
        {/* Replace with your app's logo/icon */}
        <div className="mb-6 text-6xl">🔥</div> 
        <h1 className="text-4xl font-bold mb-2">
          English Practice AI
        </h1>
        <p className="text-lg mb-8">
          Improve your English with AI-powered conversations and exercises.
        </p>
        <div className="w-full max-w-sm">
          <Link href="/register" className="block mb-4">
            <button className="w-full px-4 py-3 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Sign Up
            </button>
          </Link>
          <Link href="/login" className="block">
            <button className="w-full px-4 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Login
            </button>
          </Link>
           <Link href="#" className="block mt-4 text-sm text-white text-opacity-80 hover:text-white">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
