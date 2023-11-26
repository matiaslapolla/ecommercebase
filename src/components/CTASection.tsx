import Image from "next/image";
import Link from "next/link";
import CtaImage from "@/assets/cta-image.png";

type Props = {};

const CTASection = (props: Props) => {
	return (
		<div className="bg-white dark:bg-gray-100 w-full">
			<div className="flex gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl ">
				<div className="flex gap-8 items-center">
					<Image
						src={CtaImage}
						className="flex-1"
						alt="dashboard image"
						width={600}
						height={600}
					/>
					<div className="flex-1 flex flex-col gap-4">
						<h2 className=" text-4xl tracking-tight font-extrabold text-gray-900">
							Los beneficios de crear tu tienda online con{" "}
							<p className="text-primary-400 inline-block hover:rotate-3 transition-all">
								MaximaTienda
							</p>
						</h2>
						<p className=" font-medium text-gray-600">
							<span className="font-bold text-gray-900 inline-block">
								Fácil de usar:
							</span>{" "}
							La plataforma es muy intuitiva y fácil de aprender a usar
						</p>
						<p className=" font-medium text-gray-600">
							<span className="font-bold text-gray-900 inline-block">
								Rentable:
							</span>{" "}
							La plataforma te ayuda a ahorrar tiempo y dinero en la gestión de
							tu tienda online
						</p>{" "}
						<p className=" font-medium text-gray-600">
							<span className="font-bold text-gray-900 inline-block">
								Segura:
							</span>{" "}
							La plataforma cuenta con las medidas de seguridad más avanzadas
							para proteger tus datos y los de tus clientes.
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
	);
};

export default CTASection;
