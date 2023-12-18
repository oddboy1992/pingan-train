// tailwind.config.js
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	media: false,
	theme: {
		extend: {
			colors: {
				'jd-red': '#e1251b',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
