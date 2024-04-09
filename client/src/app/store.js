import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from "../features/Cart/cartReducer";
import homeReducer from "../features/Home/homeReducer";
import authReducer from "../features/Authentication/authReducer";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        home : homeReducer,
        auth : authReducer
    }
})

export default store