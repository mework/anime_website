import { Link } from "@tanstack/react-router";

import UserMenu from "./user-menu";

const NAV_LINKS = [
	{ href: "/", label: "首页" },
	{ href: "/#top-ranking", label: "热门" },
	{ href: "/#categories", label: "分类" },
	{ href: "/#schedule-slot", label: "放送表" },
] as const;

export default function Header() {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 bg-[#060e20]/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
			<div className="flex h-20 items-center justify-between px-6 md:px-8">
				<div className="flex items-center gap-8 xl:gap-12">
					<Link
						to="/"
						className="font-bold font-login-headline text-2xl text-transparent tracking-tight transition-opacity hover:opacity-90"
					>
						<span className="bg-gradient-to-r from-[#85adff] to-[#3b82f6] bg-clip-text">
							CMAnime
						</span>
					</Link>

					<div className="hidden items-center gap-8 md:flex">
						{NAV_LINKS.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="font-login-headline text-[#a3aac4] transition-colors hover:text-[#85adff]"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				<div className="flex items-center gap-2 sm:gap-4">
					<button
						type="button"
						aria-label="搜索"
						className="rounded-lg p-2 text-[#a3aac4] transition-all duration-300 hover:bg-white/5 active:scale-90"
					>
						<span className="material-symbols-outlined">search</span>
					</button>
					<button
						type="button"
						aria-label="通知"
						className="rounded-lg p-2 text-[#a3aac4] transition-all duration-300 hover:bg-white/5 active:scale-90"
					>
						<span className="material-symbols-outlined">notifications</span>
					</button>
					<UserMenu />
				</div>
			</div>
		</nav>
	);
}
