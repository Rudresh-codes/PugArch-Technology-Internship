"use client";
import { useState, useEffect } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/dummy.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event? (Surely i will use aunthentication for this in my next version)")) return;
    const res = await fetch("/api/events", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setEvents((prev) => prev.filter((event) => event.id !== id));
    } else {
      alert("Failed to delete event.");
    }
  };

  if (loading) return <div className="text-center text-blue-400">Loading...</div>;

  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">All Events</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-black rounded-lg shadow-lg overflow-hidden border border-gray-800">
            <img
              src={event.bannerImage || "/placeholder.png"}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-300 mb-2">{event.title}</h2>
              <p className="text-gray-400 mb-2">{event.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>
              <div className="text-gray-400 mb-2">{event.location}</div>
              {event.organizingCommittee && (
                <div className="mb-2 text-xs text-gray-400">
                  <span className="font-semibold text-blue-300">Organizing Committee:</span>{" "}
                  {event.organizingCommittee.name}
                  {event.organizingCommittee.contact && (
                    <>
                      {" | "}
                      <span>Contact: {event.organizingCommittee.contact}</span>
                    </>
                  )}
                  {event.organizingCommittee.website && (
                    <>
                      {" | "}
                      <a
                        href={event.organizingCommittee.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                      >
                        Website
                      </a>
                    </>
                  )}
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs">{event.category}</span>
                <span className="text-xs text-gray-500">Seats Available</span>
              </div>
              <button
                onClick={() => handleDelete(event.id)}
                className="mt-4 w-full curser-pointer bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-2 rounded text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}