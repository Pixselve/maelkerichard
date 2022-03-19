let plugin = require('tailwindcss/plugin')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', '/*.js'],

	theme: {
		extend: {
			colors: {
				primary: "#2563EB"
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography')
	]
};

module.exports = config;
