import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Top Left - Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-200"
      >
        ← Back to Home
      </Link>

      {/* Card Content */}
      <div className="max-w-lg w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center shadow-xl space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Get Started
          </h1>
          <p className="mt-2 text-gray-400 text-sm">
            Welcome to DevSpace. Start exploring and building your first React application.
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 text-left">
          <h2 className="text-lg font-semibold text-white">Start Learning</h2>
          <p className="mt-1 text-xs text-gray-400 leading-relaxed">
            Learn how components, routing, layouts, and navigation work together in a React application.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-500/25"
        >
          Start Exploring
        </Link>
      </div>
    </main>
  );
}