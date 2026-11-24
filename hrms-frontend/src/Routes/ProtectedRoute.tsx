import { Navigate, Outlet } from "react-router";
import { Routing } from "./routing";
import { useSelector } from "react-redux";
import type { IApplicationState } from "../Store/state/app-state";


const ProtectedRoute = () => {
    const token = useSelector(
        (state: IApplicationState) => state.UserData?.token
    );

    if (!token) {
        return <Navigate to={Routing.Login} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
