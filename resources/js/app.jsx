import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import withAuth from "./withAuth";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        const PageComponent = pages[`./Pages/${name}.jsx`];
        return PageComponent;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
