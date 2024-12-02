import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { League_Spartan } from 'next/font/google'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Dine Restaurant',
	description: 'A Frontend Mentor challenge',
}
const league = League_Spartan({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${league.className} antialiased`}>
				{children}
			</body>
		</html>
	)
}
