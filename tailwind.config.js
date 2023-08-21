import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1440px',
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
                '17': '68px',
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
                slideup: 'slideup 150ms ease-in-out forwards',
                slidedown: 'slidedown 150ms ease-in-out forwards',
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
                slidedown : {
                    '0%': { 'max-height': 0, 'padding-top': 0, 'padding-bottom': 0 },
                    '50%': { 'max-height': '75px', 'padding-top': '.75rem', 'padding-bottom': '.75rem' },
                    '100%': { 'max-height': '200px', 'padding-top': '.75rem', 'padding-bottom': '.75rem' },
                },
                slideup: {
                    '0%': { 'max-height': '200px', 'padding-top': '.75rem', 'padding-bottom': '.75rem' },
                    '50%': { 'max-height': '75px', 'padding-top': '.75rem', 'padding-bottom': '.75rem' },
                    '100%': { 'max-height': 0, 'padding-top': 0, 'padding-bottom': 0 },
                }
            }
        }
    },
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('opened', '&.opened')
            addVariant('closed', '&:not(.opened)')
        })
    ],
}