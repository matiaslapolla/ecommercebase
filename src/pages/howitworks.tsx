import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowImage from "@/assets/how-image.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HowItWorks = (props: Props) => {
	return (
		<>
			<Header />
			<div className="bg-white dark:bg-gray-100 w-full">
				<div className="flex gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl ">
					<div className="flex gap-8 items-center">
						<Image
							src={HowImage}
							className="flex-1"
							alt="dashboard image"
							width={600}
							height={600}
						/>
						<div className="flex-1 flex flex-col gap-4">
							<h2 className=" text-4xl tracking-tight font-extrabold text-gray-900">
								¿Cómo funciona{" "}
								<p className="text-primary-400 inline-block hover:-rotate-3 transition-all">
									MaximaTienda
								</p>
								?
							</h2>
							<p className=" font-medium text-gray-600">
								¿Quieres crear tu propia tienda online pero no sabes cómo
								empezar? Con MaximaTienda es muy sencillo. En solo unos pasos,
								podrás tener tu tienda online en funcionamiento y empezar a
								vender tus productos o servicios.{" "}
							</p>
							<p className=" font-medium text-gray-600">
								<span className="font-bold text-gray-900 inline-block">
									Paso 1: Crea tu cuenta
								</span>{" "}
								El primer paso es crear tu cuenta en MaximaTienda. Es un proceso
								sencillo y rápido que solo te llevará unos minutos.
							</p>{" "}
							<p className=" font-medium text-gray-600">
								<span className="font-bold text-gray-900 inline-block">
									Paso 2: Elige un plan
								</span>{" "}
								Una vez creada tu cuenta, tendrás que elegir un plan de
								suscripción. MaximaTienda ofrece diferentes planes para
								adaptarse a las necesidades de cualquier negocio.
							</p>
							<p className=" font-medium text-gray-600">
								<span className="font-bold text-gray-900 inline-block">
									Paso 3: Añade tus productos o servicios
								</span>{" "}
								El siguiente paso es añadir tus productos o servicios a tu
								tienda online. Es muy sencillo, solo tienes que seguir las
								instrucciones que te proporciona MaximaTienda y en unos minutos
								tendrás todos tus productos o servicios disponibles para tus
								clientes.
							</p>
							<Link
								href="/"
								className="inline-flex transition-all text-black hover:text-white justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg bg-primary-400 hover:bg-primary-700 focus:ring-4"
							>
								¡Quiero!
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HowItWorks;
