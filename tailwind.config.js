/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
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
            padding: '89px'
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
                'black': '#111111'
            },
            spacing: {  
                '0.3': '5px',
                '1.4': '22px',
                '4.5': '72px',
                '5.5': '89px',
                '15': '60px',
                '27': '110px',
                '30': '120px'
            },
            borderRadius: {
                'border-container': '28px',
                button: '200px'
            },
            fontSize: {
                '1.75': '28px',
                '2.5': '40px'
            },
            animation: {
                marquee: 'marquee 45s linear infinite',
                'marquee-md': 'marquee-md 45s linear infinite',
                'marquee-lg': 'marquee-lg 45s linear infinite',
            },
            keyframes: {
                marquee: {
                    'from': { transform: 'translateY(0)' },
                    'to': { transform: 'translateY(calc(-100% - 0.75rem))' }
                },
                'marquee-md': {
                    'from': { transform: 'translateY(0)' },
                    'to': { transform: 'translateY(calc(-100% - 1.5rem))' }
                },
                'marquee-lg': {
                    'from': { transform: 'translateY(0)' },
                    'to': { transform: 'translateY(calc(-100% - 43px))' }
                },
            }
        }

    },
    plugins: [],
}