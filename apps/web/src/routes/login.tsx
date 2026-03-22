import { createFileRoute } from "@tanstack/react-router";

import Footer from "@/components/footer";
import Logo from "@/components/logo";
import SignInForm from "@/components/sign-in-form";

export const Route = createFileRoute("/login")({
	head: () => ({
		meta: [
			{
				title: "登录 | MidnightAnime",
			},
			{
				name: "description",
				content: "登录 MidnightAnime，继续访问你的账号与动画内容。",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="relative flex h-svh min-h-[900px] flex-col overflow-hidden bg-[#060e20] text-[#dee5ff]">
			<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
				<div className="absolute -top-20 -left-20 size-[500px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-[linear-gradient(45deg,rgba(59,130,246,0.12),transparent)] blur-[40px]" />
				<div className="absolute -right-20 bottom-0 size-[400px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-[linear-gradient(45deg,rgba(59,130,246,0.12),transparent)] blur-[40px]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
			</div>

			<main className="relative z-10 flex min-h-0 flex-1 flex-col">
				<header className="flex w-full shrink-0 justify-center px-6 py-8">
					<Logo />
				</header>
				<section className="flex min-h-0 flex-1 items-center justify-center px-6 py-10">
					<SignInForm />
				</section>
			</main>

			<Footer />
		</div>
	);
}
