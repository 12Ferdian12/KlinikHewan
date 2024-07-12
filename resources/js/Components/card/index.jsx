import React from "react";

import cx from "@/helper/cx";

const Card = ({ children, className }) => {
    return (
        <div
            className={cx(
                "relative bg-white bg-opacity-25 backdrop-blur rounded-lg shadow-white p-6 border-white",
                className ?? ""
            )}
        >
            {children}
        </div>
    );
};

export default Card;
