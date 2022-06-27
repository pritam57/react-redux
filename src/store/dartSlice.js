import { createSlice } from "@reduxjs/toolkit";


const dartSlice = createSlice({
    name: 'dart',
 initialState :(0),
    reducers: {
        addd(state, action){
           return state=state+1;
        },
        minus(state, action){
            return state=state-1;
         },
    },
});

export const { addd, minus } = dartSlice.actions;
export default dartSlice.reducer;