"use client";
import React, { useState } from "react";

const categories = [
  "Technical",
  "Cultural",
  "Sports",
  "Workshop",
  "Seminar",
  "Webinar",
  "Competition",
  "Other"
];

export default function CreateEventPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    bannerImage: "",
    organizingCommittee: {
      name: "",
      contact: "",
      website: ""
    }
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("organizingCommittee.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        organizingCommittee: {
          ...prev.organizingCommittee,
          [key]: value
        }
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setSuccess(true);
      setForm({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "",
        bannerImage: "",
        organizingCommittee: {
          name: "",
          contact: "",
          website: ""
        }
      });
    }
  };

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center">Create Event</h1>
      {success && (
        <div className="mb-4 text-green-400 text-center">Event created successfully!</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
          title="Select the event date"
        />
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          step="60"
          min="00:00"
          max="23:59"
          title="Enter time in 24-hour format (HH:MM)"
        />
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <select
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="text"
          name="bannerImage"
          placeholder="Banner Image URL"
          value={form.bannerImage}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="text"
          name="organizingCommittee.name"
          placeholder="Organizing Committee Name"
          value={form.organizingCommittee.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="text"
          name="organizingCommittee.contact"
          placeholder="Committee Contact email"
          value={form.organizingCommittee.contact}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 rounded bg-gray-900 text-gray-200"
          type="text"
          name="organizingCommittee.website"
          placeholder="Committee Website"
          value={form.organizingCommittee.website}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Create Event
        </button>
      </form>
    </main>
  );
}