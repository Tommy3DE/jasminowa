/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'building' : 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Frynekpierwotny.pl%2Foferty%2Fdomwise%2Fjaspisowa-apartamenty-rzeszow-12318%2F&psig=AOvVaw1uoKzkh3TMOfL_UOPU-spa&ust=1682079198577000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCy1Lq3uP4CFQAAAAAdAAAAABAf")'
      }
    },
  },
  plugins: [],
}
