'use client';

import Link from 'next/link';

export default function Splash() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to English Practice AI</h1>
      <div className="mt-8">
        <Link href="/register">
          <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded">Get Started</button>
        </Link>
        <Link href="/login">
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded">Already have an account? Log in</button>
        </Link>
      </div>
    </div>
  );
}
