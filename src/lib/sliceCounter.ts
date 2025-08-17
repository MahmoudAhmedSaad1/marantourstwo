import { createSlice } from "@reduxjs/toolkit";
let initialState = {counter : "Redux"}
let counterSlice = createSlice({
    name:"counterSlice",
    initialState,
    reducers:{
            increase:()=>{
                console.log("increaseee");
                
            },
             decrease:()=>{
                console.log("decreaseeeeeeeee");
                
            },
    }

})

export let counterReducer = counterSlice.reducer;
export let {increase,decrease} = counterSlice.actions