import React from "react";

const AppLayout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default AppLayout;
