import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
 initialState: [],

    reducers: {
         
        add(state, action) {
            var data=1;
           state.map((a)=>{
            if(a.id===action.payload.id){
                data=2;
            }})
            if(data==1){
                state.push(action.payload);
            }
           
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;