import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo,updateTodo,toggleTodo } from '../features/todoSlice';

export function TodoItems() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editTodoId,setEditTodoId] = useState(null);
    const [editText,setEditText] = useState('');

    const handleSaveClick = (id) => {
        if(!editText.trim()) return;

        dispatch(updateTodo({id,text:editText}));
        setEditTodoId(null);
    }

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex justify-between items-center px-1 mb-1">
        <h2 className="text-lg font-bold text-[#4A3962] tracking-tight">Active Timeline</h2>
        <span className="bg-[#E9E1F3] text-[#8A61D2] font-bold text-xs px-2.5 py-1 rounded-full">{todos.length} Tasks Remaining</span>
      </div>

      {/* SCROLLABLE CONTAINER ZONE - Keeps dashboard dimensions strictly stable */}
        <div className="flex flex-col gap-4 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#8A61D2]/20 scrollbar-track-transparent">
            {/* handle the dynamic items by mapping */}
            {todos.map((todo) => (
                <div 
                key={todo.id}
                className={`flex items-center justify-between p-4 px-5 bg-[#FAF8FC] rounded-2xl border border-[#F1EBF7] shadow-[6px_6px_12px_rgba(138,97,210,0.03),-6px_-6px_12px_#FFFFFF] hover:shadow-[8px_8px_16px_rgba(138,97,210,0.05)] transition-all duration-200 ${
                    todo.completed ? 'opacity-70' : 'opacity-100'
                }`}
                >
                <div className="flex items-start gap-4 flex-1">
                    <label className="relative flex items-center cursor-pointer w-5 h-5 mt-1">
                    <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                        className="peer opacity-0 absolute w-full h-full z-10 cursor-pointer" 
                    />
                    {/* Reference-accurate soft-pill checkbox ring */}
                    <span className="w-5 h-5 border-2 border-[#8A61D2]/40 rounded-md inline-block relative transition-all duration-200 peer-checked:bg-[#8A61D2] peer-checked:border-[#8A61D2] after:content-[''] after:absolute after:left-[5px] after:top-[1px] after:w-[5px] after:h-[9px] after:border-solid after:border-white after:border-width-[0_2px_2px_0] after:rotate-45 after:hidden peer-checked:after:block"></span>
                    </label>
                    
                    <div className="flex flex-col gap-1.5 flex-1">
                    {editTodoId === todo.id ? (
                        <input
                            type = "text"
                            value = {editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full bg-[#F4F0FA] border border-[#8A61D2] outline-none px-3 py-1 rounded-xl text-base text-[#4A3962] font-semibold shadow-[inset_1px_1px_3px_rgba(138,97,210,0.1)]"
                            autoFocus
                        />
                    ) : (
                    <span className={`text-[1.02rem] font-semibold leading-tight transition-all duration-200 ${
                        todo.completed 
                        ? 'text-[#8A79A5]/60 line-through' 
                        : 'text-[#4A3962]'
                    }`}>
                        {todo.text}
                    </span>
                    )}
                    
                    {/* Date Metadata Badges - Swaps the due date block to a clean "DONE" badge when completed */}
                    <div className="flex gap-2 text-[11px] font-bold tracking-wider">
                        <span className="text-[#8A79A5] bg-[#F4F0FA] px-2 py-0.5 rounded-md">
                        START: {todo.createdAt}
                        </span>
                        
                        {todo.completed ? (
                        <span className="text-[#8A79A5] bg-[#F4F0FA] px-2 py-0.5 rounded-md opacity-60">
                            DONE
                        </span>
                        ) : (
                        <span className="text-[#C27054] bg-[#C27054]/5 px-2 py-0.5 rounded-md">
                            DUE: {todo.dueDate}
                        </span>
                        )}
                    </div>
                    </div>
                </div>
                
                {/* Action Row - Clean layout conditional check for the Edit button */}
                <div className="flex gap-1 ml-4">
                    {!todo.completed && (
                        editTodoId === todo.id ? (
                            <button
                             onClick={() => handleSaveClick(todo.id)}
                             className="text-emerald-600 text-xs font-bold px-2.5 py-1.5 rounded-xl hover:bg-emerald-50 transition-colors duration-200 cursor-pointer">
                                Save
                            </button>
                        ) : (
                    <button 
                        onClick={() => {
                            setEditText(todo.text)
                            setEditTodoId(todo.id)
                        }}
                        className="text-[#8A61D2] text-xs font-bold px-2.5 py-1.5 rounded-xl hover:bg-[#8A61D2]/10 transition-colors duration-200 cursor-pointer"
                    >
                        Edit
                    </button>
                        )
                    )}

                    <button 
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-[#8A79A5] text-xs font-bold px-2.5 py-1.5 rounded-xl hover:text-[#C27054] hover:bg-[#C27054]/10 transition-colors duration-200 cursor-pointer"
                    >
                    Delete
                    </button>
                </div>
                </div>
            ))}

            {/* Safeguard interface state indicator if user wipes their list clean */}
            {todos.length === 0 && (
                 <div className="text-center py-10 bg-[#FAF8FC]/50 rounded-2xl border border-dashed border-[#E9E1F3] p-6">
                    <span className="text-2xl block mb-2">🌸</span>
                    <p className="text-sm font-semibold text-[#8A79A5]">Your timeline is clear. Enjoy your peaceful space.</p>
                </div>
            )}
            </div>

    </div>
  );
}