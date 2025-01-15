import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    menu : true
}

export const menuSlice = createSlice ({
    name :"menuSlice",
    initialState,
    reducers:{
        updateMenuState : (state,) =>{
            const currState = state.menu;
            state.menu = !currState;
        }
    }
})


export const {updateMenuState} = menuSlice.actions;

export default menuSlice.reducer;