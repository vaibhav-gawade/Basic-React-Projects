import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [
        {
            id : "1",                       // as nano id return the string
            text : "Finish React Project",
            completed : false,
            createdAt : "2026-10-03",
            dueDate : "2026-10-10"
        }
    ]
}

export const todoSlice = createSlice({      //   export to the same file below
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const newTodo = {
                id : nanoid(),
                text : action.payload.text,
                completed : false,
                createdAt : action.payload.createdAt,
                dueDate : action.payload.dueDate
            }
            state.todos.push(newTodo);
        },

        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        
        // keep the action.payload and not action.payload.id as we aspect the id as the string and not as the object so it is the correct the down what is wrote do not make the payload.id
        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo) => (
                todo.id == action.payload ? {...todo,text : action.payload.text,dueDate : action.payload.dueDate} : todo
            ));
        },

        toggleTodo : (state,action) => {
            state.todos = state.todos.map((todo) => (
                todo.id == action.payload ? {...todo,completed : !todo.completed} : todo
            ));
        }

        // id is especting the string and not the object so do not make action.payload.id as it is the object and action.payload is the string
    }
});

export const {addTodo,removeTodo,updateTodo,toggleTodo} = todoSlice.actions;    // we export this to the function which called like to the ui buttons

export default todoSlice.reducer;       // we export only one reducer at a time to the store


/*
    Note that payload only contains what we sent to it by the useSelector
    for what we have done like state.todos.map and created the array but we can directly find like :

    cosnt todo = state.todos.find((todo) => todo.id = action.payload.id) 

    if(todo) {
        todo.id = action.payload.id;
    }
    
    new redux toolkit have the library called the immer

    immer helps to mutate the todo or the property and safely in background handles immutably so doing like
    filter and creating the new array would be more overhead and garbage collection here direct mutation takes place and we can do the work optimally
*/