import Provider from '@/redux/provider';
import type { Metadata } from "next";
import "./globals.css";
import NavBar from '@/components/navigation-bar/NavBar';
import Footer from '@/components/footer/Footer';
import { Setup } from '@/components/utils';

export const metadata: Metadata = {
	title: "Projeto Diagnóstico",
	description: "Projeto Diagnóstico para avaliação empresarial",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<Provider>
				<body className="bg-dark-navy-blue text-bleached-silk font-sans text-sm sm:text-lg md:text-lg">
					<Setup />
					<NavBar />
					<main>
						{children}
					</main>
					<Footer />
				</body>
			</Provider>
		</html >
	);
}
