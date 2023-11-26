import Link from "next/link";

type Props = {};

export default function NavBar({}: Props) {
	const routesList = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "My Products",
			path: "/about",
		},
		{
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			name: "My account",
			path: "/account",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	];

	return (
		<nav className="bg-white border border-red-500 max-w-4xl">
			<div className="flex gap-4 border flex-wrap items-center justify-between w-full p-4">
				<Link href="/" className="border text-2xl font-bold leading-relaxed">
					Ecommerce!
				</Link>

				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto "
					id="navbar-cta"
				>
					<ul className="flex gap-2 ">
						{routesList.map((route) => {
							return (
								<li key={route.name}>
									<Link
										href={route.path}
										className="	text-gray-700 transition duration-200 rounded-md hover:bg-gray-200 px-4 py-2"
									>
										{route.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
					<button
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
					>
						Get started
					</button>
				</div>
			</div>
		</nav>
	);
}
