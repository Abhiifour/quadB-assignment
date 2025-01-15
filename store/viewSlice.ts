import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    view : true
}

export const viewSlice = createSlice ({
    name :"viewState",
    initialState,
    reducers:{
        updateViewState : (state) =>{
            const currState = state.view;
            state.view = !currState;
        }
    }
})


export const {updateViewState} = viewSlice.actions;

export default viewSlice.reducer;