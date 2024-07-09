import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todosSlice.js";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});