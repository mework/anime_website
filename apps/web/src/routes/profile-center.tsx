import { createFileRoute, redirect } from "@tanstack/react-router";

import ProfileCenterPage from "@/components/profile-center-page";
import { useProfileCenterView } from "@/features/profile-center/use-profile-center-view";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/profile-center")({
	head: () => ({
		meta: [
			{
				title: "个人中心 | MidnightAnime",
			},
			{
				name: "description",
				content: "查看你的资料、观看历史与追番状态。",
			},
		],
	}),
	beforeLoad: async () => {
		const session = await authClient.getSession();
		if (!session.data) {
			redirect({
				to: "/login",
				throw: true,
			});
		}
		return { session };
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { session } = Route.useRouteContext();
	const view = useProfileCenterView(session.data?.user ?? null);

	return <ProfileCenterPage view={view} />;
}
