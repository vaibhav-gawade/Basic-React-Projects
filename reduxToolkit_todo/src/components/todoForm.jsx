import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todoSlice';

export function TodoForm() {
    
    const todayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2,'0');
        const day = String(today.getDate()).padStart(2,'0');

        return `${year}-${month}-${day}`;
    }

    const [input,setInput] = useState('');
    const [dueDate,setDueDate] = useState('');
    const [startDate,setStartDate] = useState(todayDate);
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(!input.trim()) return;

        const tasks = {
            text : input,
            createdAt : startDate,
            dueDate : dueDate || 'No due date'
        }

        dispatch(addTodo(tasks));
        setInput('');
        setDueDate('');
    }

  return (
    // Form Container mimics the chunky, rounded 3D cards from your reference image
    <form 
      onSubmit={addTodoHandler} 
      className="bg-[#FAF8FC] p-6 rounded-[28px] shadow-[10px_10px_20px_rgba(138,97,210,0.06),-10px,-10px_20px_#FFFFFF] border border-[#F1EBF7] flex flex-col gap-4 w-full mb-8"
    >
      <h2 className="text-lg font-bold text-[#4A3962] tracking-tight px-1">Create New Task</h2>
      
      <div className="flex flex-col gap-3">
        {/* Main Task Input */}
        <input
          type="text"
          placeholder="What requires your focus next?"
          aria-label="New todo text"
          className="w-full bg-[#F4F0FA] border border-[#E9E1F3] outline-none px-5 py-3.5 rounded-2xl text-base text-[#4A3962] placeholder-[#8A79A5]/60 focus:border-[#8A61D2] shadow-[inset_3px_3px_6px_rgba(138,97,210,0.05),inset_-3px_-3px_6px_#FFFFFF] transition-all duration-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Date / Due Date Inline Fields */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#8A79A5] px-1">START DATE</label>
            <input 
              type="date" 
              className="w-full bg-[#F4F0FA] border border-[#E9E1F3] outline-none p-3 rounded-xl text-sm text-[#4A3962] shadow-[inset_2px_2px_4px_rgba(138,97,210,0.04)]"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#8A79A5] px-1">DUE DATE</label>
            <input 
              type="date" 
              className="w-full bg-[#F4F0FA] border border-[#E9E1F3] outline-none p-3 rounded-xl text-sm text-[#4A3962] shadow-[inset_2px_2px_4px_rgba(138,97,210,0.04)]"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* "Popped Up" Interactive Accent Button */}
      <button
        type="submit"
        className="w-full mt-2 bg-[#8A61D2] text-white py-3.5 font-bold rounded-2xl text-base tracking-wide transition-all duration-150 ease-out shadow-[0_6px_12px_rgba(138,97,210,0.25),4px_4px_10px_rgba(138,97,210,0.15)] hover:bg-[#794BC4] hover:translate-y-[-2px] hover:shadow-[0_8px_16px_rgba(138,97,210,0.3)] active:translate-y-[1px] active:shadow-[0_2px_4px_rgba(138,97,210,0.2)] cursor-pointer text-center"
      >
        Add to Timeline
      </button>
    </form>
  );
}