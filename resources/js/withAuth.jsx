import React from "react";
import { Inertia } from "@inertiajs/inertia";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const token = localStorage.getItem("token");

        if (!token) {
            Inertia.visit("/login");
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
