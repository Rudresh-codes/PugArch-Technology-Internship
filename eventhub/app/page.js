import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to EventHub</h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover, create, and manage local events like workshops, meetups, and small concerts.
      </p>
      <div className="mt-8">
        
        <Link href="/events">
          <button className="bg-blue-700 mx-2 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
            View Events
          </button>
        </Link>
        <Link href="/events/create">
          <button className="bg-green-700 mx-2 hover:bg-green-800 text-white font-bold py-2 px-6 rounded">
            Create Event
          </button>
        </Link>
      </div>
    </div>
  );
}
