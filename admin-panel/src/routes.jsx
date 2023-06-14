import LoginRegister from "./pages/login";
import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import Archives from "./pages/archives";
import Borrowing from "./pages/borrowing";
import DueDates from "./pages/duedates";
import Notification from "./pages/notification";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginRegister />
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        )
    },
    {
        path: "/inventory",
        element: (
            <ProtectedRoute>
                <Inventory />
            </ProtectedRoute>
        )
    },
    {
        path: "/archives",
        element: (
            <ProtectedRoute>
                <Archives />
            </ProtectedRoute>
        )
    },
    {
        path: "/transactions",
        element: (
            <ProtectedRoute>
                <Inventory />
            </ProtectedRoute>
        )
    },
    {
        path: "/addAccount",
        element: (
            <ProtectedRoute>
                <Inventory />
            </ProtectedRoute>
        )
    },
    {
        path: "/reports",
        element: (
            <ProtectedRoute>
                <Inventory />
            </ProtectedRoute>
        )
    },

    {
        path: "/borrowing",
        element: (
            <ProtectedRoute>
                <Borrowing />
            </ProtectedRoute>
        )
    }
    // {
    //     path: "/duedates",
    //     element: <DueDates />
    // },

    // {
    //     path: "/notification",
    //     element: <Notification />
    // }
]);
