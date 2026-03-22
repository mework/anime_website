import { createFileRoute } from "@tanstack/react-router";

import AuthPageShell from "@/components/auth-page-shell";
import SignUpForm from "@/components/sign-up-form";

export const Route = createFileRoute("/register")({
	head: () => ({
		meta: [
			{
				title: "注册 | MidnightAnime",
			},
			{
				name: "description",
				content: "创建 MidnightAnime 账号，加入动漫社区并开始你的追番之旅。",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AuthPageShell>
			<SignUpForm />
		</AuthPageShell>
	);
}
