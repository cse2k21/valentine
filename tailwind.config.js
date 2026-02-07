/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'love-red': '#ff4d6d',
                'soft-pink': '#ffe5ec',
                'deep-red': '#c9184a',
            },
            fontFamily: {
                dancing: [
                    '"Playwrite Cuba Guides"',
                    '"Playwrite CU"',
                    'cursive',
                ],
                quintessential: ['Quintessential', 'cursive'],
                playfair: ['"Playfair Display"', 'serif'],
                inter: ['"Inter"', 'sans-serif'],
                playwrite: [
                    '"Playwrite Cuba Guides"',
                    '"Playwrite CU"',
                    'cursive',
                ],
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
};
