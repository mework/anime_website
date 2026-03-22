import { Link } from "@tanstack/react-router";

export default function Logo() {
	return (
		<Link
			to="/"
			className="inline-flex items-center justify-center text-center font-bold font-login-headline text-3xl text-transparent tracking-tighter transition-opacity hover:opacity-90"
		>
			<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
				CMAnime
			</span>
		</Link>
	);
}
