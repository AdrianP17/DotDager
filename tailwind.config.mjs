/** @type {import('tailwindcss').Config} */
import { animate } from 'motion'
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// you can either spread `colors` to apply all the colors
			white: '#fff',
			gray: '#B2B1B2',
			bg: '#1A151E',
			primary: '#9D75EB',
			'primary-light': '#F3EEFC',
			'primary-light-200': '#D6C5F7',
			'primary-dark': '#814DE5',
		},
		extend: {
			fontFamily: {
				sans: ['GeneralSans', 'sans-serif'],
				mono: ['Nippo-Medium', 'monospace'],
			},
			animation: {
				'up-down': 'updown 2s ease-in-out infinite',
			},	
			boxShadow: {
				'inner-lg': 'inset 0 4px 100px rgba(0, 0, 0, 0.6)', // Personalizado
			  },
		},
	},
	plugins: [],
}
