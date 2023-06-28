import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./authOperation";

const INITIAL_STATE = {
    user: { name: null, email: null },
    token: null,
    isLogin: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder
            // REGISTER  
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
            })
        
            // LOGIN
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
            })
        
            // LogOut
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLogin = false;
            })
        
            // RefreshUser
         
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLogin = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
 

    
            
    }
})

export const authReducer = authSlice.reducer;



