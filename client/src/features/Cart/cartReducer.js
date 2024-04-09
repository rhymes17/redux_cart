import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const cartReducer = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addItemsToCart : (state, action) => {
            const {id} = action.payload;
            const existingItemIndex = state.findIndex((pro) => pro.id === id)

            if(existingItemIndex !== -1){
                state[existingItemIndex].quantity += 1;
            }else{
                state.push({...action.payload, quantity: 1})
            }

            localStorage.setItem("cart", JSON.stringify(state))
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload
            
            const existingItemIndex = state.findIndex((pro) => pro.id == id);

            if(existingItemIndex !== -1){
                state = state.filter((pro) => pro.id != id);
                localStorage.setItem("cart", JSON.stringify(state))
                return state;   
            }
        },
        increaseItemCount : (state, action) => {
            const id = action.payload

            const existingItemIndex = state.findIndex((pro) => pro.id === id)

            if(existingItemIndex !== -1){
                state[existingItemIndex].quantity += 1
            }
        },
        decreaseItemCount : (state, action) => {
            const id = action.payload

            const existingItemIndex = state.findIndex((pro) => pro.id === id)

            if(existingItemIndex !== -1){
                if(state[existingItemIndex].quantity === 1){
                    state = state.filter((pro) => pro.id !== id)
                    localStorage.setItem("cart", JSON.stringify(state))
                    return state
                }else{
                    state[existingItemIndex].quantity -= 1
                    localStorage.setItem("cart", JSON.stringify(state))
                }
            }
        }
    } 
})

export const getAllCartItems = (state) => state.cart

export const { addItemsToCart, removeItemFromCart, increaseItemCount, decreaseItemCount } = cartReducer.actions

export default cartReducer.reducer