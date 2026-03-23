import { Button } from "@anime_website/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@anime_website/ui/components/dropdown-menu";
import { Skeleton } from "@anime_website/ui/components/skeleton";
import { Link, useNavigate } from "@tanstack/react-router";

import { authClient } from "@/lib/auth-client";

import UserAvatar from "./user-avatar";

export default function UserMenu() {
	const navigate = useNavigate();
	const { data: session, isPending } = authClient.useSession();

	if (isPending) {
		return <Skeleton className="size-10 rounded-full bg-[#141f38]" />;
	}

	if (!session) {
		return (
			<div className="flex items-center gap-3">
				<Link to="/login">
					<Button
						variant="ghost"
						className="rounded-lg px-5 py-2 font-medium text-[#a3aac4] hover:bg-white/5 hover:text-white"
					>
						登录
					</Button>
				</Link>
				<Link to="/register">
					<Button className="rounded-xl bg-gradient-to-r from-[#85adff] to-[#6e9fff] px-6 py-2 font-bold text-[#002c66] shadow-lg">
						立即注册
					</Button>
				</Link>
			</div>
		);
	}

	const userName = session.user.name || session.user.email || "我的账号";

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className="size-10 overflow-hidden rounded-full border-2 border-[#85adff]/20 transition-all hover:border-[#85adff] focus:outline-none"
				aria-label="打开用户菜单"
			>
				<UserAvatar
					name={userName}
					image={session.user.image}
					className="size-full"
					fallbackClassName="bg-[#85adff] text-[#002150] text-sm font-bold"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				sideOffset={12}
				className="min-w-56 rounded-2xl border border-[#40485d] bg-[#141f38] p-2 text-[#dee5ff] shadow-2xl shadow-black/50 ring-0"
			>
				<DropdownMenuGroup>
					<DropdownMenuLabel className="px-3 py-2 text-[#a3aac4]">
						<div className="flex flex-col gap-1">
							<span className="font-semibold text-[#dee5ff] text-sm">
								{userName}
							</span>
							<span className="truncate text-xs">{session.user.email}</span>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator className="mx-2 bg-[#40485d]" />
					<DropdownMenuItem
						className="rounded-xl px-3 py-2.5 text-[#dee5ff] text-sm focus:bg-white/5 focus:text-white"
						onClick={() => {
							navigate({
								to: "/profile-center",
							});
						}}
					>
						<span className="material-symbols-outlined text-[18px]">
							person
						</span>
						个人中心
					</DropdownMenuItem>
					<DropdownMenuItem
						variant="destructive"
						className="rounded-xl px-3 py-2.5 text-sm focus:bg-red-500/10"
						onClick={() => {
							authClient.signOut({
								fetchOptions: {
									onSuccess: () => {
										navigate({
											to: "/",
										});
									},
								},
							});
						}}
					>
						<span className="material-symbols-outlined text-[18px]">
							logout
						</span>
						退出登录
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
