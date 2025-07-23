'use client';

import { useState } from 'react';
// import BottomNav from '../components/BottomNav'; // We will create this component later

export default function Home() {
  // State for the AI assistant's ready status or mic status
  const [isJoelReady, setIsJoelReady] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Function to toggle Joel AI's ready status and potentially start listening
  const toggleJoelReady = () => {
    setIsJoelReady(!isJoelReady);
    // Add logic here to initialize the voice assistant when it becomes ready
    if (!isJoelReady) {
      console.log('Joel AI is now ready.');
      // You would typically initialize your speech recognition/synthesis here
    } else {
      console.log('Joel AI is now off.');
      // Add logic here to stop speech recognition/synthesis
    }
  };

  // Function to handle user speaking (this will be triggered by the speech recognition API)
  const handleUserSpeak = (text: string) => {
    console.log('User spoke:', text);
    // Add logic here to process user input and generate Joel AI's response
  };

  // Function to make Joel AI speak (this will be called after processing user input)
  const joelSpeak = (text: string) => {
    console.log('Joel AI speaks:', text);
    // Add logic here to use a text-to-speech API to make Joel AI speak
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header/Top Bar */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-sm px-4 py-3 flex justify-between items-center">
        <button className="text-gray-600 dark:text-gray-300">{/* Left Icon */}&lt;</button>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Current Progress</h1>
        <button className="text-gray-600 dark:text-gray-300">{/* Right Icon */}☰</button>
      </div>

      <main className="flex flex-col items-center justify-start flex-grow px-4 py-6 w-full max-w-md">

        {/* Placeholder for Progress Circle */}
        <div className="mt-4 flex flex-col items-center">
           {/* This is a placeholder for a progress circle component */}
          <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-xl font-bold">75%</div>
           <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Complete</p>
        </div>

        {/* Placeholder for Joel AI Mic/Interaction Area */}
        {/* Re-purposing this section to fit the mockup's content blocks */}
        <div className="mt-8 w-full rounded-lg shadow-md p-4 bg-white dark:bg-gray-700">
           <h2 className="text-md font-semibold text-gray-900 dark:text-white mb-2">AI Practice Session</h2>
           <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Tap the button to start or stop practicing with Joel AI.</p>
           <div className="flex justify-center">
            <button
              className={`px-6 py-3 text-white text-lg rounded-full shadow-lg transition-colors duration-200 ease-in-out ${isJoelReady ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
              onClick={toggleJoelReady}
            >
              {isJoelReady ? 'Joel AI is ON' : 'Joel AI is OFF'}
            </button>
           </div>
            {isJoelReady && isListening && (
              <p className="mt-4 text-blue-600 dark:text-blue-400 text-center text-sm">Joel AI is listening...</p>
            )}
        </div>

        {/* Conversation area - you can map conversation turns here */}
        {/* Re-purposing this section to fit the mockup's content blocks */}
         <div className="mt-4 w-full rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 flex-grow overflow-y-auto">
           <h2 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Conversation</h2>
            {/* Example conversation turn (User) */}
            <div className="mb-3 flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-3 max-w-[80%] text-sm">
                <p>Hello Joel!</p>
              </div>
            </div>
            {/* Example conversation turn (Joel AI) */}
            <div className="mb-3 flex justify-start">
              <div className="bg-gray-200 text-gray-800 rounded-lg py-2 px-3 max-w-[80%] text-sm dark:bg-gray-600 dark:text-gray-200">
                <p>Hello! How can I help you practice your English today?</p>
              </div>
            </div>
         </div>

      </main>

      {/* Bottom Navigation */}
      <footer className="w-full">
        {/* <BottomNav /> */}
        <div className="h-16 bg-white dark:bg-gray-800 shadow-lg mt-4 flex justify-around items-center text-xs text-gray-700 dark:text-gray-300">
          <div className="flex flex-col items-center">
            {/* Replace with appropriate icons later */}
            <span>🏠</span>
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Replace with appropriate icons later */}
            <span>⭐️</span>
            <span>Subscriptions</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Replace with appropriate icons later */}
            <span>👤</span>
            <span>Profile</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
