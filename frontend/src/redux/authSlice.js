import { loginUser,registerUser } from "../services/api";
import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';

export const userLogin =createAsyncThunk('auth/login',async (userData)=>{
    return await loginUser(userData);
});
export const userRegister = createAsyncThunk('auth/register',async (userData)=>{
    return await registerUser(userData);
});

const authSlice =createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:null,
        error:null},
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(userLogin.fulfilled,(state,action)=>{
                state.user=action.payload;
            })
            .addCase(userRegister.fulfilled,(state,action)=>{
                state.user=action.payload;
            });
            },
        }); 
        export default authSlice.reducer;