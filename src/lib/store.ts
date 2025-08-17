import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./sliceCounter";

export let store = configureStore({
    reducer:{
counter:counterReducer
    }
})