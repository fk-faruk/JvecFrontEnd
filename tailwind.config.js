import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
}