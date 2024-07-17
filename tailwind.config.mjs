// SPDX-FileCopyrightText: 2024 The Simplified Coding Team <main@simplifiedcoding.org>
//
// SPDX-License-Identifier: CC0-1.0

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"sc-purple": "#442C80",
				"sc-purple-light": "#737fD5",
				"sc-background": "#4B2265",
				"sc-roadmap": "#A46AC9",
				"sc-navbar": "#2B3035",
				"sc-card-bg-light": "#434549",
				"sc-card-header": "#252A2E", 
				"sc-card-bg": "#212529",
				"sc-white": "#AEB5BD",
				"navbar-text": "#faebd7",
				"navbar-icons": "#f0ffff",
				"light-orange": "#f9b86a",
				"light-yellow": "#f9d56a",
				"lessons_title": "#252a2e",
				"lessons_desc": "#212529",
				"lessons_text": "#adb5bd",
				"button": "#0d6efd",
				"button_hover": "#0b5ed7",
				"timeline-content": "#663399",
				"timeline-content-future": "#8157ab",
				"timeline-dots": "#4f2886",
				"timeline-dots-border": "#4378c8",
			},
			maxHeight: {
				'timeline-height': '47rem',
			  },
			  maxWidth: {
				'timeline-width': '87rem',
			  },
			width: {
				'500px': '500px',
				'540px': '540px',
				'410px': '410px',
				'60%': '60%',
				},
			height: {
				'v-rule': '390rem',
			},
			margin: {
				'920px': '-720px',
			},
			borderWidth: {
				'v-rule': '0.5rem',
			},
			spacing: {
				'328px': '328px',
				'17px': '17px',
				'50%': '50%',
				'90px': '90px',
				'100px': '100px',
				'41.15%': '41.15%',
			},
		},
	},
	plugins: [],
}
