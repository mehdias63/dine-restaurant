import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				beaver: '#9e7f66',
				mirage: '#17192b',
				'cod-gray': '#111111',
				'ebony-clay': '#242b37',
				'shuttle-gray': '#5c6779',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontSize: {
				'heading-xl': [
					'80px',
					{
						lineHeight: '80px',
						fontWeight: '300',
						letterSpacing: '-0.0625rem',
					},
				],
				'heading-l': [
					'48px',
					{
						lineHeight: '48px',
						fontWeight: '700',
						letterSpacing: '-0.03125rem',
					},
				],
				'heading-m': [
					'36px',
					{
						lineHeight: '40px',
						fontWeight: '700',
						letterSpacing: '-0.01563rem',
					},
				],
				'heading-s': [
					'17px',
					{
						lineHeight: '28px',
						fontWeight: '600',
						letterSpacing: '0.15625rem',
					},
				],
				'body-m': [
					'20px',
					{
						lineHeight: '30px',
						fontWeight: '700',
						letterSpacing: '-0.01563rem',
					},
				],
				'body-s': [
					'16px',
					{
						lineHeight: '26px',
						fontWeight: '400',
					},
				],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
