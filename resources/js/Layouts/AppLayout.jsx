import React from "react";

const AppLayout = ({ children }) => {
    return (
        <div>
            <header>My App</header>
            <main>{children}</main>
        </div>
    );
};

export default AppLayout;
