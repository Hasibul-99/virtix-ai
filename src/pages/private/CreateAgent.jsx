
import { useState } from 'react';

export default function CreateAgent() {
  const [showWelcome, setShowWelcome] = useState(true);

  const agents = [
    {
      id: 1,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    },
    {
      id: 2,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    },
    {
      id: 3,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    },
    {
      id: 4,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Welcome Banner */}
      {showWelcome && (
        <div className="relative bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-2xl p-6 mb-8 shadow-sm">
          <button
            onClick={() => setShowWelcome(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Welcome to VIRTIX AI!
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Your AI agent journey starts here — create, train, and launch
              intelligent agents for your website in minutes.
            </p>
          </div>
        </div>
      )}

      {/* All Agents Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">All Agents</h2>
          <div className="flex items-center gap-2">
            {/* List View Button */}
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            {/* Grid View Button */}
            <button className="p-2 text-gray-700 bg-gray-100 rounded transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Agent Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Agent Info */}
              <div className="text-center mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {agent.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Try Now
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
