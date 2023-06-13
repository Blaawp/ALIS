import LoginRegister from "./pages/login";
import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import Archives from "./pages/archives";
import Borrowing from "./pages/borrowing";
import DueDates from "./pages/duedates";
import Notification from "./pages/notification";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginRegister />
    },
    {
        path: "/archives",
        element: <Archives />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/borrowing",
        element: <Borrowing />
    },
    {
        path: "/duedates",
        element: <DueDates />
    },
    {
        path: "/inventory",
        element: <Inventory />
    },
    {
        path: "/notification",
        element: <Notification />
    }
]);
