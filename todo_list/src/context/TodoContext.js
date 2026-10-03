import { createContext,useContext } from "react";

export const TodoContext = createContext({      // give this export to the todoProvider to provide the context
    Todos : [
        {
            id : 1,
            todo : "Enter work to do",
            completed : false
        },
    ],
    AddTodo : (todo) => {},
    UpdateTodo : (id,todo) => {},
    DeleteTodo : (id) => {},
    ToggleTodo : (id) => {}
})

export const useTodo = () => {              // hook for the sending of the current data above in the tree so they can use it
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;       // export to the palce who has its need