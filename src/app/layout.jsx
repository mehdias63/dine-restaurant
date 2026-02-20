import './globals.css'

export const metadata = {
	title: 'Dine Restaurant',
	description: 'A Frontend Mentor challenge',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${league.className} antialiased`}>
				{children}
			</body>
		</html>
	)
}
