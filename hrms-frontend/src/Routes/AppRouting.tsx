import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PublicLayout from '../Layout/PublicLayout/PublicLayout';
import { Routing } from './routing';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={Routing.Login} replace />,
    },
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/login",
                lazy: () =>
                    import("../pages/Accounts/Login").then((module) => ({
                        Component: module.default,
                    })),
            },
            // {
            //     path: "/forgot-password",
            //     lazy: () => import("../pages/auth/forgot-password.route"),
            // },
        ],
    },
])
export default function AppRouting() {
    return <RouterProvider router={router} />;
}