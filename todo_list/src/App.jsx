import { useState, useEffect } from 'react';
import { TodoProvider } from './context';
import { TodoForm, TodoItems } from './components';
import backgroundImage from './Assests/background_image.jpeg';

function App() {
  const [Todos, setTodo] = useState([]);
  const remainingCount = Todos.filter((todo) => todo && !todo.completed).length;

  const AddTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const UpdateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const DeleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const ToggleTodo = (id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("Todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodo(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);

  return (
    <TodoProvider value={{ Todos, AddTodo, UpdateTodo, DeleteTodo, ToggleTodo }}>
      <div 
        className="min-h-screen flex items-center justify-center p-6 font-sans antialiased bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 min-h-[550px]">
          
          <div className="md:col-span-5 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-300/40 bg-[#D5F3D8]">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-x-1.5 px-2.5 py-1 rounded-full bg-[#FFB7C5] text-rose-950 text-xs font-bold tracking-wider uppercase mb-3 border border-rose-300/30">
                  Control Center
                </div>
                <h1 className="text-3xl font-black tracking-tight text-emerald-950 flex items-center gap-2">
                  Add Task 
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB7C5] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB7C5]"></span>
                  </span>
                </h1>
                <p className="text-sm text-emerald-900/80 mt-2 font-medium">
                  {remainingCount === 0 
                    ? "🎉 All tasks done!" 
                    : `⏳ ${remainingCount} tasks left to do`}
                </p>
              </div>
              <TodoForm />
            </div>
            <div className="text-xs text-emerald-900/60 mt-12 hidden md:block tracking-wide font-medium border-t border-emerald-700/10 pt-4">
              ⚡ Press <kbd className="bg-white/80 text-slate-600 px-1 py-0.5 rounded border border-slate-300 shadow-sm">Enter</kbd> to save active edits.
            </div>
          </div>

          <div className="md:col-span-7 p-8 flex flex-col bg-[#F2C7C7]">
            <h2 className="text-sm font-semibold text-rose-950 uppercase tracking-widest mb-4">
              Pending Works To Do
            </h2>
            <div className="flex flex-col gap-y-3 flex-1 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
              {Todos.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-rose-900/60 py-12 border-2 border-dashed border-rose-300/60 rounded-2xl">
                  <p className="text-sm font-medium">Workspace Clear</p>
                  <p className="text-xs text-rose-900/50 mt-0.5">Initialize a new mission to begin.</p>
                </div>
              ) : (
                Todos.map((todo) => {
                  if (!todo) return null;
                  return (
                    <div key={todo.id} className="w-full transition-all duration-300">
                      <TodoItems todo={todo}/>
                    </div>
                  );
                })
              )}
            </div>
          </div>

        </div>
      </div>
    </TodoProvider>
  );
}

export default App;