import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center max-w-screen-2xl mx-auto `}
		>
			{/* <NavBar /> */}
			<Header />
			<Hero />
			<CTASection />
			<Footer />
		</main>
	);
}
