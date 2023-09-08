import "./globals.css";
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Google Chrome",
	description: "Google Chrome Clone",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
			<main>{children}</main>
			<Footer/>
			</body>
		</html>
	);
}
