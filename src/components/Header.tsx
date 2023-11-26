import Image from "next/image";
import logo from "@/assets/textlogo.png";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="w-full">
			<nav className="bg-primary-400 px-4 py-4 flex justify-between items-center ">
				<Image
					className="hover:scale-110 hover:rotate-3 transition-all "
					src={logo}
					height={40}
					alt="logo"
				/>
				<ul className="flex gap-8 items-center font-medium">
					<li>
						<Link
							href="/"
							className="text-gray-700 rounded "
							aria-current="page"
						>
							Inicio
						</Link>
					</li>
					<li>
						<Link href="/" className="text-gray-700 no-underline ">
							Cómo funciona?
						</Link>
					</li>
					<li>
						<Link href="/" className="text-gray-700 no-underline ">
							Precios
						</Link>
					</li>
					<li>
						<Link href="/" className="text-gray-700 no-underline ">
							Caracteristicas
						</Link>
					</li>
					<li>
						<Link href="/" className="text-gray-700 no-underline ">
							Contacto
						</Link>
					</li>
				</ul>
				<div className="flex items-center gap-4">
					<Link
						href="/"
						className="text-gray-800 bg-primary-300 hover:text-white hover:scale-110 transition-all hover:bg-primary-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 py-2"
					>
						Crea tu usuario
					</Link>
					<Link
						href="/"
						className="text-white hover:scale-110 hover:text-white transition-all bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-4 py-2 "
					>
						Iniciar sesion
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
