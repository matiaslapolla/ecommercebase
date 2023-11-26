type Props = {};

const Hero = (props: Props) => {
	return (
		<section className="bg-gray-100 w-full">
			<div className="py-8 mt-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
					Crea tu tienda online con{" "}
					<p className=" inline-block text-primary-400 hover:scale-110 hover:translate-x-4 hover:-rotate-2 transition-all">
						MaximaTienda!
					</p>
				</h1>
				<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
					La plataforma de ecommerce más fácil y rápida de usar. Crea tu tienda
					online en minutos y empieza a vender por internet.
				</p>
				<div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<a
						href="#"
						className="hover:scale-110 inline-flex transition-all text-black hover:text-white justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg bg-primary-400 hover:bg-primary-700 focus:ring-4 "
					>
						¡Empezar ahora!
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
