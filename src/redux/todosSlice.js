import { createSlice } from "@reduxjs/toolkit";

let genId = 0;

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        changeTask: (state, action) => {
            const task = state.find(((task) => task.id === action.payload))
            task.state = !task.state;
        },
        addTask: (state, action) => {
            const newTask = {
                id: genId++,
                task: action.payload,
                state: false,
            };
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            console.log(state.length)
            state.splice(action.payload, 1);
            console.log(state.length)
        }
    },
});

export const {changeTask, addTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;