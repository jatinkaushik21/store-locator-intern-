/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/maincomp.jsx'
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'custom-blue': '#ab47bc',
        'custom-green': '#f9a8d4',
      }),
    },
  },
  plugins: [],
}

