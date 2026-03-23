export interface ProfileStat {
	label: string;
	value: string;
}

export interface ProfileActionLink {
	id: string;
	label: string;
	icon: string;
	href: string;
	active?: boolean;
}

export interface ProfileSummary {
	userName: string;
	userAvatar: string | null;
	heroBackgroundImage: string;
	badgeLabel: string;
	membershipLabel: string;
	stats: ProfileStat[];
	primaryActionLabel: string;
	secondaryActionLabel: string;
}

export interface ContinueWatchingItem {
	title: string;
	statusLabel: string;
	meta: string;
	description: string;
	progressPercent: number;
	backgroundImage: string;
	primaryActionLabel: string;
	secondaryActionLabel: string;
}

export interface ProfileCenterViewModel {
	summary: ProfileSummary;
	actionLinks: ProfileActionLink[];
	status: {
		title: string;
		label: string;
		quote: string;
	};
	continueWatching: ContinueWatchingItem;
	historySectionTitle: string;
	historySectionDescription: string;
	historySectionCta: string;
}

interface SessionUserShape {
	name?: string | null;
	email?: string | null;
	image?: string | null;
}

const profileCenterFixture: ProfileCenterViewModel = {
	summary: {
		userName: "NEON_DRIFTER_99",
		userAvatar:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDJJ_MJzjqYfT_rwWqQQ7Bhrhr8_tLyzEi9JJtYZscpLYEwz9_t06eLXWAK-68MnM4Czc0ZyeQATwJ5FJ5AY8ZZGSAmij6rZnvCSRppkJZAt107RRZEejx3lwcXgdH4DuRHMcUiKHKC1NxIK1F0fzL89u1PDlM8lvWXx673_YYQ0PXozvF_Mjx7KQLu3WPTl_Bk2zvKzmnFfpvLY-DOwg5ujaSDYrauoIO80bgUOJDI5Y0CzrLu8Gs2IsoyOgKNpdCWhb5ZjHNwaNg",
		heroBackgroundImage:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ruv6db278numidN4wjgf8hMNMcpKF7r5n-GhMYUzOztPrH_5Oo8DS0ubXe7VT5dDoK4If6PmPKXwpoGpuRXFz08cFjew86_4_vQ4fNuSg0ZJNe54Tx_mDQ__P-VzacOpVC8V0YCiNJETdrvP37Dgnul8lTvkKg0ZjsOUjd4JGgBh6t9VK5n2KQGcwMJ5kXHyKCKh4eixCFfizSfM-iG--V3CW5W05jw9FkeEI7mPPOuJz8wYa3SvVvSY2xB5F_UhNBAcg3DUDmk",
		badgeLabel: "精英漫游者",
		membershipLabel: "认证会员",
		stats: [
			{
				label: "观看时长",
				value: "1,420 小时",
			},
			{
				label: "已完结",
				value: "84 部",
			},
			{
				label: "全球排名",
				value: "#1,204",
			},
		],
		primaryActionLabel: "编辑资料",
		secondaryActionLabel: "分享资料",
	},
	actionLinks: [
		{
			id: "profile",
			label: "个人资料",
			icon: "person",
			href: "/profile-center",
			active: true,
		},
		{
			id: "watchlist",
			label: "我的追番",
			icon: "bookmarks",
			href: "/profile-center",
		},
		{
			id: "history",
			label: "观看历史",
			icon: "history",
			href: "/profile-center",
		},
		{
			id: "security",
			label: "账户安全",
			icon: "shield",
			href: "/profile-center",
		},
		{
			id: "settings",
			label: "设置中心",
			icon: "settings",
			href: "/profile-center",
		},
	],
	status: {
		title: "当前状态",
		label: "正在疯狂补番",
		quote: "“就最后一集...”",
	},
	continueWatching: {
		title: "赛博城：最后协议",
		statusLabel: "连载中",
		meta: "第2季：第12集 • 剩余 24 分钟",
		description:
			"在一个记忆可以作为货币交易的世界里，一个流浪汉发现了一段足以重置文明的记忆。",
		progressPercent: 75,
		backgroundImage:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDE7Q2zQLFoAP7GLtUGMKRVYva4Y9ZRs6gDceodu-Z0UM-ke80qaLit27O5y7npD1l5CQbvwQpMC_CbcmprAwTz4La04UGyyX_5es94BvBzrUz47GFYBTj9NAF_hVdbdqBOIUd6UaY_ARyPY9Q_io-ZOogMN9TYiJCi8KOLCf4e1bNEc-d2kL4SVVtm7fT2WM14blVmRjzCTt8iwODud0CYEOk4r_vQ2cGioF35edIWQ4xUyr4npxYczXwY5yKY_vAjt3O5kbpos5w",
		primaryActionLabel: "继续观看",
		secondaryActionLabel: "详细信息",
	},
	historySectionTitle: "观看历史",
	historySectionDescription: "从您上次离开的地方继续",
	historySectionCta: "查看全部历史",
};

function getDisplayName(user?: SessionUserShape | null) {
	if (user?.name?.trim()) {
		return user.name.trim();
	}

	if (user?.email?.trim()) {
		return user.email.split("@")[0] || user.email;
	}

	return profileCenterFixture.summary.userName;
}

export function useProfileCenterView(
	user?: SessionUserShape | null,
): ProfileCenterViewModel {
	return {
		...profileCenterFixture,
		summary: {
			...profileCenterFixture.summary,
			userName: getDisplayName(user),
			userAvatar: user?.image || profileCenterFixture.summary.userAvatar,
		},
	};
}
