/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                green: '#A4FFAF',
                red: '#F64A4A',
                orange: '#FB7C58',
                yellow: '#F8CD65',
                black: '#24232C',
                gray: '#817D92',
                white: '#E6E5EA',
                dark: '#18171F'
            },
            fontFamily: {
                jetbrain: ['JetBrains Mono', 'monospace']
            }
        }
    },
    plugins: []
};
