import { createSlice } from "@reduxjs/toolkit";


const dataslice=createSlice({

    name: "data",

 initialState: ("pritam"),


reducers:{
    changedata(state,action){
        return state="akash";
    },
    changedatasec(state,action){
        return state="poonam";
    },
},

})
export const { changedata,changedatasec } = dataslice.actions;
export default dataslice.reducer;