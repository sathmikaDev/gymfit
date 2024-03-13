/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "body-medium": ["ClashGrotesk-Medium"],
        "body-light": ["ClashGrotesk-Light"],
        "body-regular": ["ClashGrotesk-Regular"],
        primary: ["Inter"],
      },
    },
  },
  plugins: [],
};
