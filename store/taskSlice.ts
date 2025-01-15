import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


interface task {
        title: string,
        description : string
        due: Date,
        steps: string[],
        completed: false,
        repeat: false,  
        important:false,
        category : string
        priority : string
        id : string
}

const initialState = {
    tasks : [{
        title: "This is a dummy task",
        description : "Dummy data",
        due: new Date().toISOString(),
        steps: [] as string[],
        completed: false,
        repeat: false,  
        important:false,
        category:"nill",
        priority:"Low",
        id : "1"
    }]
}

export const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers: {
        addTask : (state,action) =>{
            const task = {
                title: action.payload.title,
                description : action.payload.description,
                due:  action.payload.due,
                repeat:false,
                steps:[],
                completed: false,
                category: action.payload.category,
                important:false,
                priority:"Low",
                id: nanoid(4)
            }
            state.tasks.push(task)
        },
        removeTask : (state,action) => {
             state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
        },
        editTask : (state,action : any) =>{
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
  
            if (index !== -1) {
                
                state.tasks[index] = {
                ...state.tasks[index],
                title: action.payload.title,
                description: action.payload.description,
                due: action.payload.due,
                repeat:action.payload.repeat,
                priority:action.payload.priority
                };
                state.tasks[index].steps.push(action.payload.steps)
            }
        },

        
        toggleCompleted : (state,action) =>{
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
  
            if (index !== -1) {
                
                state.tasks[index] = {
                ...state.tasks[index],
                completed: !state.tasks[index].completed,
                };
            }
        },

        toggleImportant: (state,action) =>{
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
  
            if (index !== -1) {
                
                state.tasks[index] = {
                ...state.tasks[index],
                important: !state.tasks[index].important,
               
                };
            }
        },
        togglePriority : (state,action) =>{
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
  
            if (index !== -1) {
                
                state.tasks[index] = {
                ...state.tasks[index],
                priority: action.payload.priority,
               
                };
            }
        },
        editDescription : (state,action) =>{
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
  
            if (index !== -1) {
                
                state.tasks[index] = {
                ...state.tasks[index],
                description: action.payload.note,
               
                };
            }
        },

       
    }
})

export const {addTask,removeTask,editTask,toggleCompleted,toggleImportant,togglePriority,editDescription} = taskSlice.actions;

export default taskSlice.reducer;