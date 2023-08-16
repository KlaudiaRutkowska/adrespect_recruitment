/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '960px',
            // => @media (min-width: 960px) { ... }

            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        container: {
            center: true,
        },
        fontFamily: {
            'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
            'inter': ['Inter', 'sans-serif'],
            'montserrat': ['Montserrat', 'sans-serif'],
        },

        extend: {
            colors: {
                'bright': '#F5F0EC',
                'beige': '#DCC1AB',
                'green': '#1B5B31',
            },
            spacing: {  
                '0.3': '5px',
                '1.4': '22px',
                '4.5': '72px',
                '5.5': '89px'
            },
            borderRadius: {
                button: '200px'
            },
        }

    },
    plugins: [],
}

