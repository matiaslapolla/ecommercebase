import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
	const supabaseKeys = {
		apiUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
		clientId: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	};

	const supabaseClient = createClientComponentClient({
		supabaseUrl: supabaseKeys.apiUrl,
		supabaseKey: supabaseKeys.clientId,
	});

	return (
		<Auth
			supabaseClient={supabaseClient}
			view="magic_link"
			appearance={{ theme: ThemeSupa }}
			theme="dark"
			showLinks={false}
			providers={[]}
			redirectTo="http://localhost:3000/auth/callback"
		/>
	);
}
