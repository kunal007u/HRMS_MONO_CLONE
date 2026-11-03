import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAuthState } from "../state/app-state";

const initialState: IAuthState = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    role: "",
    token: "",
    profilePicture: "",
    // permissions: [],
    designation: "",
    reportingPerson: "",
    employee_code: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        adminLogin: (state, action: PayloadAction<IAuthState>) => {
            state.id = action.payload.id ?? '';
            state.name = action.payload.name ?? '';
            state.email = action.payload.email ?? '';
            state.phone = action.payload.phone ?? '';
            state.role = action.payload.role ?? '';
            state.token = action.payload.token ?? '';
            state.profilePicture = action.payload.profilePicture ?? '';
            state.designation = action.payload.designation ?? '';
            state.reportingPerson = action.payload.reportingPerson ?? '';
            state.employee_code = action.payload.employee_code ?? '';
        },

        adminLogout: () => initialState,


    }
});

export const { adminLogin, adminLogout } = authSlice.actions;
export default authSlice.reducer;