import LoginRegister from "./pages/login";
import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import Archives from "./pages/archives";
import Borrowing from "./pages/borrowing";
import AddBook from "./pages/addBook";
import AddAccount from "./pages/addAccount";
import Accounts from "./pages/accounts";
import Home from "./pages/home";
import Transactions from "./pages/transactions";
import Reports from "./pages/reports";
import UserInfo from "./pages/userInfo";
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
                <Transactions />
            </ProtectedRoute>
        )
    },
    {
        path: "/addAccount",
        element: (
            <ProtectedRoute>
                <AddAccount />
            </ProtectedRoute>
        )
    },
    {
        path: "/reports",
        element: (
            <ProtectedRoute>
                <Reports />
            </ProtectedRoute>
        )
    },

    {
        path: "/borrowing",
        element: (
            <ProtectedRoute
                to="/dashboard"
                cannotAccess={({ session }) =>
                    !session || session.user.role !== 1
                }
            >
                <Borrowing />
            </ProtectedRoute>
        )
    },

    {
        path: "/addBook",
        element: (
            <ProtectedRoute
                to="/dashboard"
                cannotAccess={({ session }) =>
                    !session || session.user.role !== 1
                }
            >
                <AddBook />
            </ProtectedRoute>
        )
    },

    {
        path: "/accounts",
        element: (
            <ProtectedRoute>
                <Accounts />
            </ProtectedRoute>
        )
    },

    {
        path: "/userInfo",
        element: (
            <ProtectedRoute>
                <UserInfo />
            </ProtectedRoute>
        )
    },


    {
        path: "/home",
        element: (
            <Home />
        )
    },

]);
