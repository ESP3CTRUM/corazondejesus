/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
extend: {
colors: {
base: '#FBF3E7',
surface: '#F3E6D2',
dark: '#241A14',
ink: {
DEFAULT: '#2B211C',
secondary: '#6B5A4C',
},
accent: {
DEFAULT: '#E22628',
hover: '#B71E20',
},
wood: '#7A4B32',
sage: '#5F7052',
gold: '#C68A3E',
},
fontFamily: {
heading: ['Fraunces', 'Georgia', 'serif'],
body: ['Work Sans', 'system-ui', 'sans-serif'],
},
borderRadius: {
'sm': '10px',
'md': '12px',
'lg': '14px',
},
boxShadow: {
'warm': '0 4px 12px rgba(43, 33, 28, 0.12)',
'warm-lg': '0 8px 24px rgba(43, 33, 28, 0.15)',
},
},
},
plugins: [],
}
