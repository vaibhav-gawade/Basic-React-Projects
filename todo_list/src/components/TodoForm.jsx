import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { AddTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    AddTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex w-full shadow-sm rounded-xl overflow-hidden border border-slate-200/60 bg-white">
      <input
        type="text"
        placeholder="Enter your mission..."
        className="w-full border-none px-4 py-3 outline-none text-slate-800 placeholder-slate-400 text-sm font-medium bg-transparent"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button 
        type="submit"
        className="bg-[#FFB7C5] hover:bg-[#ffa3b4] active:bg-[#f096a7] text-rose-950 font-bold px-6 text-xs uppercase tracking-widest transition-all duration-150 active:scale-[0.98] shrink-0 border-l border-slate-200"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;