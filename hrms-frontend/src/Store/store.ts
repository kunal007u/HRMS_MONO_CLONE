import { loadStorage, saveStorage } from "../Utils/localStorage";
import type { IApplicationState } from "./state/app-state";
import { createStateSyncMiddleware } from 'redux-state-sync';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./Slice/authSlice";

const persistentState: IApplicationState | undefined = loadStorage();

const store = configureStore({
    reducer: {
        UserData: authReducer as any
        // employeeDetails: employeeDetailsReducer 
    },
    preloadedState: persistentState, // Load the persisted state from localStorage
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(createStateSyncMiddleware({
        broadcastChannelOption: { type: 'localstorage' },
    })), // 
    devTools: true,
});

store.subscribe(() => {
    return saveStorage(store.getState() as IApplicationState);
});

export default store;