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
    <div className="flex flex-col items-center justify-between min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-3xl font-bold">Joel AI English Practice</h1>

        {/* Placeholder for Joel AI Mic/Interaction Area */}
        <div className="mt-8 flex flex-col items-center">
          <p className="text-lg mb-4">Tap the button to turn Joel AI on/off</p>
          <button
            className={`px-8 py-4 text-white text-xl rounded-full ${isJoelReady ? 'bg-green-500' : 'bg-red-500'}`}
            onClick={toggleJoelReady}
          >
            {isJoelReady ? 'Joel AI is ON' : 'Joel AI is OFF'}
          </button>
          {isJoelReady && isListening && (
            <p className="mt-4 text-blue-500">Joel AI is listening...</p>
          )}
        </div>

        {/* Conversation area - you can map conversation turns here */}
        <div className="mt-8 w-full max-w-md h-64 overflow-y-auto border rounded p-4">
          {/* Example conversation turn */}
          <div className="mb-4">
            <p className="font-bold">You:</p>
            <p>Hello Joel!</p>
          </div>
          <div className="mb-4 text-right">
            <p className="font-bold">Joel AI:</p>
            <p>Hello! How can I help you practice your English today?</p>
          </div>
        </div>

      </main>

      {/* Placeholder for Bottom Navigation */}
      <footer className="w-full">
        {/* <BottomNav /> */}
        <div className="h-16 bg-gray-200 flex justify-around items-center text-sm">
          <div className="flex flex-col items-center">
            <span>🏠</span>
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            <span>⭐️</span>
            <span>Subscriptions</span>
          </div>
          <div className="flex flex-col items-center">
            <span>👤</span>
            <span>Profile</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
