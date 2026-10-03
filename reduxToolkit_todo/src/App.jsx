import React from 'react';
import { TodoForm } from './components/todoForm';
import { TodoItems } from './components/todoItems';

export default function App() {
  return (
    // Core Lavender Canvas background with ambient lighting layout properties
    <div className="h-screen w-full bg-[#F4F0FA] relative overflow-hidden flex justify-center items-start p-12 px-6">
      
      {/* Decorative Pastel Ambient Blur Spots (Replicating the cloud/3D object feel from the background image) */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] height-[350px] rounded-full bg-[#8A61D2]/5 filter blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[400px] height-[400px] rounded-full bg-[#C27054]/5 filter blur-[80px] pointer-events-none" />

      {/* Main Container Core */}
      <div className="w-full max-w-[480px] h-full max-h-[800px] flex flex-col overflow-hidden z-10">
        <header className="mb-6 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[#4A3962] mb-0.5">Focus Room</h1>
            <p className="text-[#8A79A5] text-sm font-semibold tracking-wide">Welcome Back, Plan Your Day</p>
          </div>
          {/* Reference-matched status indicator token */}
          <div className="w-11 h-11 bg-[#FAF8FC] border border-[#F1EBF7] rounded-2xl flex items-center justify-center shadow-[4px_4px_8px_rgba(138,97,210,0.05)]">
            <span className="text-xl">✨</span>
          </div>
        </header>

         <div className="shrink-0">
            <TodoForm />
         </div>

         <div className="flex-1 min-h-0 pb-4 overflow-hidden">
            <TodoItems />
         </div>
      </div>
    </div>
  );
}