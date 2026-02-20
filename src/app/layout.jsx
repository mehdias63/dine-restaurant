import './globals.css'

export const metadata = {
	title: 'Dine Restaurant',
	description: 'A Frontend Mentor challenge',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	)
}
