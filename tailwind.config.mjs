/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f9ff',
					200: '#bae6fd',
					600: '#0284c7',
					700: '#0369a1',
				}
			}
		},
	},
	plugins: [],
}
