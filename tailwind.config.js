const colors = require("tailwindcss/colors");
module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			red: colors.red,
			green: colors.emerald,
			yellow: colors.amber,
			blue: colors.blue,
		},
		backgroundColor: (theme) => ({
			...theme("colors"),
			primary: "#1D1D1D",
			secondary: "#ffed4a",
			danger: "#e3342f",
		}),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
