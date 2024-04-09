import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService.js";

const userExists = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const initialState = {
    isLoading: false,
    user: userExists,
    isError : false,
    message : ""
}

export const registerUser = createAsyncThunk("register", async(user, thunkAPI) => {
    try {
        const res = await authService.register(user)
        return res.data
    } catch (error) {
        return error.message
    }
})

const authReducer = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        setError : (state, action) => {
            state.isError = true;
            const {message } = action.payload
            state.message = message

            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false,
            state.user = action.payload;
            state.isError = false
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {setError} = authReducer.actions 

export default authReducer.reducer