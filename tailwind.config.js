module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    darkMode: "class",
    theme: {
        screens: {
            'xs': '428px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
          },
        extend: {
            colors: {
                "deep-sky-blue": "#03A9F4",
                "fruit-salad": "#4CAF50",
                "orange-peel": "#FF9800",
                "link": "#3B4FE4",
                "heading": "#1A1A1A",
                "body": "#6E7180",
                "dark": "#202020",
                "gray-dark": "#2D2D2D"
            }
        },
        fontFamily: {
            "sans": ['"Myriad Pro"', "sans-serif"],
            "body": ['"Myriad Pro"']
        },
        fontSize: {
            "198px": ["198px"],
            "156px": ["156px"],
            "120px": ["120px"],
            "96px": ["96px"],
            "90px": ["90px"],
            "84px": ["84px"],
            "78px": ["78px"],
            "72px": ["72px"],
            "66px": ["66px"],
            "60px": ["60px"],
            "54px": ["54px"],
            "48px": ["48px"],
            "42px": ["42px"],
            "36px": ["36px"],
            "30px": ["30px"],
            "24px": ["24px"],
            "18px": ["18px"],
            "15px": ["15px"],
            "12px": ["12px"]
        },
        maxWidth: {
            "screen": "100%",
            "regular": "95%",
            "medium": "75%",
            "small": "50%"
        }
    },
    darkMode: 'class',
    plugins: [
        require("autoprefixer")
    ]
};
