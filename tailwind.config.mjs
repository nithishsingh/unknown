import config from './src/config';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#F0F7FF',   // Lightest
					100: '#E0F0FF',  // Very Light
					200: '#C0E0FF',  // Light
					300: '#90C7FF',  // Medium Light
					400: '#60A5FF',  // Medium
					500: config.company.branding.colors.primary,  // Base
					600: '#2563EB',  // Medium Dark
					700: '#1D4ED8',  // Dark
					800: '#1E40AF',  // Very Dark
					900: '#1E3A8A',  // Darkest
				},
				accent: {
					orange: {
						500: '#FF795E',
						600: config.company.branding.colors.accent,
						700: '#E64A19',
					},
					steel: {
						500: '#A9A9A9',
						600: config.company.branding.colors.secondary,
						700: '#4F4F4F',
					}
				},
				dark: {
					bg: '#1D2A44',
					'bg-soft': '#243355',
					surface: '#2B3B63',
					'surface-soft': '#324775',
					'surface-lighter': '#3D5491',
					'surface-darker': '#182236',
					text: {
						primary: '#EAEAEA',
						secondary: '#B0B0B0',
						muted: '#8A8A8A'
					}
				}
			}
		}
	},
	plugins: []
}
