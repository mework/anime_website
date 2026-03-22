import { buttonVariants } from "@anime_website/ui/components/button";
import { Input } from "@anime_website/ui/components/input";
import { Skeleton } from "@anime_website/ui/components/skeleton";
import { cn } from "@anime_website/ui/lib/utils";
import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
	{ href: "#hero", label: "首页", active: true },
	{ href: "#top-ranking", label: "热门", active: false },
	{ href: "#categories", label: "分类", active: false },
	{ href: "#schedule-slot", label: "放送表", active: false },
] as const;

interface HomeHeaderProps {
	isPending: boolean;
	session: {
		user: {
			name?: string | null;
			email?: string | null;
		};
	} | null;
}

export default function HomeHeader({ session, isPending }: HomeHeaderProps) {
	const userName = session?.user.name || session?.user.email || "我的账号";
	const userInitial = userName.slice(0, 1).toUpperCase();

	return (
		<nav className="fixed inset-x-0 top-0 z-50 bg-[#060e20]/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
			<div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-8">
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
								className={cn(
									"font-login-body text-base tracking-tight transition-colors",
									link.active
										? "border-[#85adff] border-b-2 pb-1 font-semibold text-[#85adff]"
										: "text-[#a3aac4] hover:text-[#85adff]",
								)}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				<div className="flex items-center gap-4 md:gap-6">
					<div className="hidden items-center gap-3 rounded-xl bg-[#141f38] px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-[#85adff]/40 lg:flex">
						<span className="material-symbols-outlined text-[#a3aac4] text-sm">
							search
						</span>
						<Input
							type="search"
							placeholder="搜索动漫..."
							aria-label="搜索动漫"
							className="!bg-transparent h-auto w-48 border-none p-0 text-[#dee5ff] text-sm placeholder:text-[#a3aac4] focus-visible:ring-0"
						/>
					</div>

					{isPending ? (
						<div className="flex items-center gap-3">
							<Skeleton className="h-10 w-16 rounded-lg bg-[#141f38]" />
							<Skeleton className="h-10 w-24 rounded-xl bg-[#141f38]" />
						</div>
					) : session ? (
						<div className="flex items-center gap-3">
							<Link
								to="/dashboard"
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"rounded-lg px-5 py-2 font-medium text-[#a3aac4] hover:bg-white/5 hover:text-white",
								)}
							>
								控制台
							</Link>
							<Link
								to="/dashboard"
								className="flex items-center gap-3 rounded-xl bg-[#141f38] px-4 py-2 text-[#dee5ff] transition-colors hover:bg-[#192540]"
							>
								<span className="flex size-8 items-center justify-center rounded-full bg-[#85adff] font-bold text-[#002150] text-sm">
									{userInitial}
								</span>
								<span className="hidden max-w-28 truncate font-login-body font-medium text-sm sm:block">
									{userName}
								</span>
							</Link>
						</div>
					) : (
						<div className="flex items-center gap-3">
							<Link
								to="/login"
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"rounded-lg px-5 py-2 font-medium text-[#a3aac4] hover:bg-white/5 hover:text-white",
								)}
							>
								登录
							</Link>
							<Link
								to="/register"
								className={cn(
									buttonVariants(),
									"rounded-xl bg-gradient-to-r from-[#85adff] to-[#6e9fff] px-6 py-2 font-bold text-[#002c66] shadow-lg",
								)}
							>
								立即注册
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
