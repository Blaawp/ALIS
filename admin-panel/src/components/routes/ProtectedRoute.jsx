import { useAtomValue } from "jotai";
import React from "react";
import { sessionAtom } from "../../Store";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const session = useAtomValue(sessionAtom);

    if (session === null) {
        return <Navigate to="/" />;
    }

    return children;
}
