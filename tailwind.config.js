import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./.flowbite-react/class-list.json",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact, require("flowbite/plugin")],
};
