import React from 'react';

export default function Card() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white p-4 transition-colors duration-300 dark:bg-slate-800 dark:border-slate-700">
      
      {/* 1. Project/Product Image */}
      <div className="w-full h-48 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-700">
        <img 
          src="/src/assests/cardimage.png" 
          alt="Software Development Project" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. Content Section */}
      <div className="pt-4 pb-2">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Software Development Hub
        </h2>
        
        {/* Quote / Learning Status */}
        <p className="text-sm italic text-gray-600 mt-1 dark:text-slate-400">
          "Currently mastering React ecosystem & UI Engineering..."
        </p>

        {/* Dynamic Badges / Info */}
        <div className="flex items-center mt-3 space-x-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            @vaibhav gawade
          </span>
          <span className="text-sm text-gray-500 dark:text-slate-400">
            Active Learner
          </span>
        </div>
      </div>

      {/* 3. Action Links & GitHub/LeetCode Buttons */}
      <div className="pt-2 pb-2 space-y-2">
        {/* GitHub & LeetCode External Links */}
        <div className="flex space-x-2">
          <a 
            href="https://github.com/vaibhav-gawade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
          >
            GitHub Profile
          </a>
          <a 
            href="https://leetcode.com/u/vaibhav-gawade/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
          >
            LeetCode Profile
          </a>
        </div>

        {/* Primary Action Button (Like the "Add to cart" look) */}
        <button className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600">
          View Project Details
        </button>
      </div>

    </div>
  );
}