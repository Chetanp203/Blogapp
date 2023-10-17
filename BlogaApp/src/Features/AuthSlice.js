import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn:false,
    user:null
}

export const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true,
            state.user=action.payload.user
        },
        logout:(state)=>{
            state.isLoggedIn=false,
            state.user=null
        }
    }
})

export const {login,logout}=AuthSlice.actions

export default AuthSlice.reducer