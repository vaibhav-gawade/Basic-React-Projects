import React, { useState, useRef, useEffect } from 'react'; 
import { useTodo } from '../context';

function TodoItems({ todo }) {
  const [isTodoEditable, setisTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { UpdateTodo, DeleteTodo, ToggleTodo } = useTodo();
  const inputRef = useRef(null);

  const editTodo = () => {
    UpdateTodo(todo.id, { ...todo, todo: todoMsg });
    setisTodoEditable(false);
  };

  const ToggleCompleted = () => {
    ToggleTodo(todo.id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      editTodo();
    }
  };

  useEffect(() => {
    if (isTodoEditable && inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [isTodoEditable]);

  return (
    <div
      className={`flex items-center border rounded-xl p-3 gap-x-3 shadow-sm transition-all duration-300 text-slate-800 ${
        todo.completed 
          ? "bg-white/40 border-slate-300/40 opacity-60 line-through text-slate-500" 
          : "bg-white border-white shadow-sm"
      }`}
    >
      <input
        type="checkbox"
        className="w-5 h-5 rounded-full border-slate-400 text-rose-600 focus:ring-rose-500/20 cursor-pointer accent-rose-500 transition-all"
        checked={todo.completed}
        onChange={ToggleCompleted}
      />

      <input
        ref={inputRef}
        type="text"
        className={`outline-none w-full bg-transparent text-sm font-semibold transition-all text-slate-800 ${
          isTodoEditable 
            ? "border-b border-slate-400 pb-0.5 text-slate-900" 
            : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        onKeyDown={handleKeyDown}
        readOnly={!isTodoEditable}
      />
      
      <div className="flex items-center gap-x-1.5 shrink-0">
        <button
          className={`flex h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider items-center justify-center border transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${
            isTodoEditable
              ? "bg-amber-400 hover:bg-amber-500 text-slate-900 border-amber-500"
              : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
          }`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setisTodoEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "Save" : "Edit"}
        </button>

        <button
          className="flex h-8 px-2.5 rounded-lg text-xs font-bold items-center justify-center bg-slate-50 hover:bg-rose-500 text-rose-700 hover:text-white border border-slate-200 hover:border-rose-600 transition-all duration-200"
          onClick={() => DeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItems;