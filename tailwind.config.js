module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            joe: ["Josefin Sans", "sans-serif"],
            pac: ["Pacifico", "cursive"],
            lato: ["Lato", "sans-serif"],
            src: ["Source Sans Pro", "sans-serif"],
            pop: ["Poppins", "sans-serif"],
        },
        extend: {
            spacing: {
                "7vh": "70vh",
                "8vh": "80vh",
                "9vh": "90vh",
                "9%": "90%",
                "8%": "80%",
                "6vh": "60vh",
                "5vh": "50vh",
                "4vh": "40vh",
                "4%": "40%",
            },
            colors: {
                pri: {
                    1: "#41a300",
                    2: "#41a30056",
                },
                sec: {
                    1: "#FF4100",
                    2: "",
                },
                txt: {
                    1: "#171717",
                    2: "#C4C4C4",
                    3: "#646464",
                    4: "#121212",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
