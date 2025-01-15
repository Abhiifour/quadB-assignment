import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import editReducer from "./editSlice";
import viewReducer from './viewSlice'
import menuReducer from './menuSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    editState: editReducer,
    viewState:viewReducer,
    menuState:menuReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;