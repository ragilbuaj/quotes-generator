/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Merriweather: ["Merriweather", "Helvetica", "system-ui"],
			},
			colors: {
				"background-colors": "#F2F5FE",
				"background-card": "#101439",
			},
		},
	},
	plugins: [],
};
