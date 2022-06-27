import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import dartReducer from './dartSlice';
import dataReducer from './dataslice';
//import productReducer from './productSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        dart: dartReducer,
       data: dataReducer,
     //   product: productReducer,
    },
});

export default store;