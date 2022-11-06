/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}"],
  safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"],
  /*
    classes that will not be purged from the tailwind css file even if they don't appear in the app
    here we do this so that dynamically set classes will not be removed when they are not initially being used.
  */
  theme: {
    extend: {},
  },
  plugins: [],
};
