import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk("getItems", async () => {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        return response.json()
    } catch (error) {
        return error
    }
})

const homeReducer = createSlice({
    name : "home",
    initialState : {
        isLoading : true,
        data: [],
        isError : false
    },
    extraReducers: (builder) => {
        builder.addCase(getItems.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getItems.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true
        })
    }
})

export const getAllItems = (state) => state.home.data
export const getLoadingState = (state) => state.home.isLoading
export const getErrorState = (state) => state.home.isError

export default homeReducer.reducer
