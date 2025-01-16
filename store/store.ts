import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";

// Import your reducers
import taskReducer from "./taskSlice";
import editReducer from "./editSlice";
import viewReducer from './viewSlice';
import menuReducer from './menuSlice';
import userReducer from "./userSlice";

// Configure persist
const persistConfig = {
  key: 'root',
  storage,
  // Whitelist specific reducers you want to persist
  whitelist: ['tasks', 'userState'], // Only tasks and user data will be persisted
  // Alternative: blacklist specific reducers you don't want to persist
  // blacklist: ['editState', 'viewState', 'menuState'], 
};

// Combine all reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  editState: editReducer,
  viewState: viewReducer,
  menuState: menuReducer,
  userState: userReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;