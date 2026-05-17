'use client';

import { useState, useEffect } from 'react';

interface Confession {
  id: number;
  text: string;
  timestamp: string;
}

export default function Confessions() {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [newConfession, setNewConfession] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchConfessions();
  }, []);

  const fetchConfessions = async () => {
    const res = await fetch('/api/confessions');
    if (res.ok) {
      const data = await res.json();
      setConfessions(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/confessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newConfession }),
    });
    if (res.ok) {
      setMessage('Confession posted anonymously!');
      setNewConfession('');
      fetchConfessions();
    } else {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Confession Wall</h1>
        <p className="text-center text-gray-600 mb-8">
          Share your real estate confessions anonymously. Let's break the silence together.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Post a Confession</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={newConfession}
              onChange={(e) => setNewConfession(e.target.value)}
              placeholder="Share your confession..."
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200"
            >
              Post Anonymously
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Recent Confessions</h2>
          {confessions.length === 0 ? (
            <p className="text-gray-500">No confessions yet. Be the first to share!</p>
          ) : (
            confessions.map((confession) => (
              <div key={confession.id} className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-800">{confession.text}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Posted on {new Date(confession.timestamp).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-purple-600 hover:underline">
            Back to Waitlist
          </a>
        </div>
      </div>
    </div>
  );
}