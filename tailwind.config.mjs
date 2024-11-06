/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function({ addUtilities }){
			const newUtilities = {
				".hid-scrollbar":{overflow:"hidden",}, // Web
				".hide-scrollbar::-webkit-scrollbar":{display:"none",}, // Safari y Chrome
				".hide-scrollbar":{"-ms-overflow":"none","scrollbar-width":"none"}, // Explorer, Edge, Firefox 
			};
			addUtilities(newUtilities)
		},
	],
};
