import { ISidebarData } from "../../Layout/Sidebar/sidebar-data";
import type { IPermissionRoute } from "../../Model/permission/permissionM";

export interface IApplicationState {
    UserData?: IAuthState;
}

export interface IAuthState {
    id?: string | number
    email?: string
    name?: string
    phone?: string
    role?: string
    token?: string
    profilePicture?: string
    // permissions?: ISidebarData[];
    designation?: string;
    reportingPerson?: string;
    employee_code?: string;
    permissions?: IPermissionRoute[];
}
