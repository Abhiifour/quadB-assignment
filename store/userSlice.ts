import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : {
        name:"",
        email:"",
        password:""
    }
}

export const userSlice = createSlice ({
    name :"userState",
    initialState,
    reducers:{
        updateUserState : (state,actions) =>{
           state.user.name = actions.payload.name,
           state.user.email = actions.payload.email,
           state.user.password = actions.payload.password
        },
        logoutUser:(state) =>{
           state.user.email = "",
           state.user.password = ""
        },
        loginUser:(state,action) =>{
            state.user.email = action.payload.email,
            state.user.password = action.payload.password
        }

    }
})


export const {updateUserState,loginUser,logoutUser} = userSlice.actions;

export default userSlice.reducer;