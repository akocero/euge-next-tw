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
			yellow: colors.amber,
			blue: colors.blue,
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
