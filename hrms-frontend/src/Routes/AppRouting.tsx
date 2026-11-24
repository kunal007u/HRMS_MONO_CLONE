import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PublicLayout from '../Layout/PublicLayout/PublicLayout';
import { Routing } from './routing';
import MainLayout from '../Layout/MainLayout/MainLayout';
import ProtectedRoute from './ProtectedRoute';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={Routing.Login} replace />,
    },
    {
        element: <PublicLayout />,
        children: [
            {
                path: Routing.Login,
                lazy: () =>
                    import("../pages/Accounts/Login").then((module) => ({
                        Component: module.default,
                    })),
            },
          
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: Routing.AdminDashboard,
                        lazy: () =>
                            import("../pages/Admin_Dashbord/Admin_Dashbord").then((module) => ({
                                Component: module.default,
                            })),
                    },
                ],
            }
        ]
    }
])
export default function AppRouting() {
    return <RouterProvider router={router} />;
}