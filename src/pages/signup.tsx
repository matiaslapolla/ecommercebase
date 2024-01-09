import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Props = {};

const Signup = (props: Props) => {
	const supabaseKeys = {
		apiUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
		clientId: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	};

	const supabaseClient = createClientComponentClient({
		supabaseUrl: supabaseKeys.apiUrl,
		supabaseKey: supabaseKeys.clientId,
	});

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (password !== verifyPassword) {
			alert("Passwords do not match");
			return;
		}

		supabaseClient.auth.signUp({ email, password });
	};

	return (
		<>
			<Header />
			<div className="min-h-max">
				<form onSubmit={handleSubmit}>
					<div className="flex justify-center items-center w-full mt-16 ">
						<div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
							<div className="relative p-4 bg-white rounded-lg dark:bg-gray-800 sm:p-5">
								<div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										Crea tu cuenta
									</h3>
								</div>
								<div className="grid gap-4 mb-4 sm:grid-cols-1">
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
											placeholder="Escribe email"
											required={true}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
											placeholder="Type your password"
											required={true}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<div>
										<label
											htmlFor="verifyPassword"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Verify Password
										</label>
										<input
											type="password"
											name="verifyPassword"
											id="verifyPassword"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
											placeholder="Retype your password"
											required={true}
											value={verifyPassword}
											onChange={(e) => setVerifyPassword(e.target.value)}
										/>
									</div>
									<button
										className="bg-primary-600 text-white rounded-lg px-4 py-2.5 font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
										type="submit"
									>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Signup;
