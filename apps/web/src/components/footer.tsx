import { Link } from "@tanstack/react-router";

export default function Footer() {
	return (
		<footer className="bg-slate-950">
			<div className="w-full bg-gradient-to-b from-transparent to-slate-900 px-6 py-12">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
					<div className="font-bold text-lg text-slate-300">CMAnime</div>
					<div className="flex flex-wrap justify-center gap-6">
						<Link
							to="/"
							className="font-login-body text-slate-500 text-xs opacity-80 transition-colors hover:text-blue-400 hover:opacity-100"
						>
							服务条款
						</Link>
						<Link
							to="/"
							className="font-login-body text-slate-500 text-xs opacity-80 transition-colors hover:text-blue-400 hover:opacity-100"
						>
							隐私政策
						</Link>
						<Link
							to="/"
							className="font-login-body text-slate-500 text-xs opacity-80 transition-colors hover:text-blue-400 hover:opacity-100"
						>
							帮助中心
						</Link>
						<Link
							to="/"
							className="font-login-body text-slate-500 text-xs opacity-80 transition-colors hover:text-blue-400 hover:opacity-100"
						>
							联系我们
						</Link>
					</div>
					<div className="font-login-body text-slate-500 text-xs opacity-80">
						© 2024 MidnightAnime. 保留所有权利。
					</div>
				</div>
			</div>
		</footer>
	);
}
