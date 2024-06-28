// tailwind.config.js
module.exports = {
    purge: [
        // Add this to config
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#FF6363",
                secondary: {
                    100: "#E2E2D5",
                    200: "#888883",
                },
            },
            fontFamily: {
                body: ["Nunito"],
            },
            rounded: {
                xl: "1.5rem",
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            backgroundColor: ["responsive", "hover", "focus", "active"],
        },
    },
    plugins: [],
};
