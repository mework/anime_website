import { createFileRoute, Link } from "@tanstack/react-router";

import Footer from "@/components/footer";
import HomeHeader from "@/components/headers/home-header";
import CategoryCard from "@/components/home/category-card";
import LatestUpdateCard from "@/components/home/latest-update-card";
import LatestUpdateMiniCard from "@/components/home/latest-update-mini-card";
import TopRankingItem from "@/components/home/top-ranking-item";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{
				title: "子夜动漫 | 首页",
			},
			{
				name: "description",
				content: "探索最新更新、热门排行榜与精选分类，开始你的午夜追番之旅。",
			},
		],
	}),
	component: HomeComponent,
});

function HomeComponent() {
	const { data: session, isPending } = authClient.useSession();
	const latestUpdateMiniCards = [
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuB9MoxNV3AxBKpirxwnQYyhr1vzyIgCY7op47OW4zIYeMNEX93ZcnRpJ-9MCfyrhuaiXcAswCNZSqJkLzo1egwRuIp3EGq21_nhvqPgcdw-33Zq359-rCDASXtNr_WixM9GGLM8diWMI1-SGXbdANQ81SBzLC7j2ESp9nfl2ofLbN_DrEC-K2t1Ja59mxaJCj4NTI0um6gm1OsMd_fFmVXt1wee8Nja3WQAe0DKexaAe2_MqKNxgIyNbr_mTQ5pfclgAcUCo0fyM9E",
			title: "虚空回响",
			meta: "第1季 E04 • 24分钟",
		},
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuDXc039YOUen1AOwDr41qW-yrbvx3h-t0jJJrwL5ipj7XYgUfkv996eQXgypAyHrlFJ-FfmIzrW_ciP8VZLvIpn3JUhZnq4Ahyt2VpVxsZC8AOqDqw1BKU-2zVJ5vJaJwfm-14LEkQws-2h33UWFpOhnE-lbqv0sixgDAIMKI7n1y2HoVqHoYqSyxkcQpRznGwRi0FMlA4Ech37_U3kXqk-9eSaCr4ysaMKW9LWr2IQ3HR6OUO9gHdnUe9J6mnkm9iPvKtw0W-CEgQ",
			title: "数据泄露",
			meta: "第2季 E08 • 22分钟",
		},
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuAqMoSUWBqWqEVg1rKbSGWjAR-oAuHiPGHjjRDQg1OVxZKzXabvKOk0ngOupnEvSr0FrkA9G-J9IZve7vvE5l_R221lFQRH_0TIllhRX1UbnqEJhOPBa6PhAJ0PrFlCMi9ss43ALaOYfRRmdRLJDt-pG5jcmgbat0QhW8dxv5AqULjJRNVz7DCkOw2HKHn1uiIWlSxI2TmcavdIAo1vW8tfi-xjUL440t3iZ2rv63LWKYJuWaz-moRNkudpAkIObxC8e3Jlh0PqB7o",
			title: "硅基心脏",
			meta: "第1季 E15 • 25分钟",
		},
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuDkAkl_P4Fknm8F1BlfkxWolv5_AxuGiSC7naKtwx46U7Xon87mtTakwNRYyv8mLVmE1snhIhHOTfsSdJNESPAtjbqkeM-XMbG3bm8PJubbA7Zo5zKeQpSfI54GjTtQNX6BvJCesb9dfftM6Vb2W6JOYBqfnHCknYfXKglHpn83_77mmBjKyjxgNb4XNhiW_Vb3hB72-H5UAq4TUb4I9yApSHuz2nsrmQ4-AXfWqR5Jje57JM2lib526pXLMgQDvuea-I_tyNG6XJg",
			title: "阿尔法协议",
			meta: "剧场版 • 1小时45分",
		},
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuA7yR9v2CndLYT740Xs3VkHHQv_9NzoKm1MUuPH0AAEzkORbuWmfGLxWhtaDCFXp_vZ7jrPrGvm6vaXDe4EziCv5UTs_7JysBAdu0G02xlXw1_qSbZJ3xtb-oCcACJ7lfoZ01hf7JmyKfh_Sf7u5u5N8NZe_yjfR--jNV20Ggg7WoZitIjmVAohBnkBT6WAb0lOADLPUoyD4bjCcHqQvaq14fGPbzFt2g5CiAyp2UlRqnHtE2B5PIKt_CvXc1MKhSdjUWJkgxp-zsM",
			title: "霓虹余烬",
			meta: "第3季 E02 • 23分钟",
		},
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuCXkDjKqOkRnaKD56MnJS6m15ssvNekd0AVcN4Wcmvoz-3M9Ec-K-NpEV_uM2KQ0UTMlXQYiOnb3ylA09Wya0Qp5HSdfn8QYuIxp0_ts5x0wjJdImgNdhDnm5Xp0ywvNE-BOr1IZKIvMLfIut8ixV6qyOfsTANnR5C8hQ3_q5OysYkdL_0S_0TEEelP9ICDI2Cfq4HtcpDz7j6NxW8gVMyCswsXtPaoBOm-nBPkg3O5v2Zev63a66tZpkPBW3y2yTbigJWPq7sQY4I",
			title: "霓虹浪人",
			meta: "第1季 E09 • 24分钟",
		},
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuCg3sb6QRakjaibmRiLfnLE-mO6ZP3HzGrdOU8q2OxtJMhamodWanuO61i9r0wLLmuBmPypAyn21VvIALjc49sbUL2lRjk4hq0OjBrMdROOvzxlx_9L0N2V7nMAA2lGsBn7EQQrSE-tkCm493pYHJ3KRfthDJRWSNwT2dbu95kHmSnn8uYQwu6mo8cLcZxKuX1d1v1KxYSOga_RunuVhf1ywEk4fL0nItaJJjzx5SCZp0Kv2C-ikRMJ5Qb1qZyZV1goUL07LDZn0jE",
			title: "X 协议",
			meta: "第2季 E01 • 26分钟",
		},
		{
			backgroundImage:
				"https://lh3.googleusercontent.com/aida-public/AB6AXuATbaIlfFSn06uR6K9g2P1ZRRLF-d9B67F9DXR9d8vZ3sFQvLWapWEaH1-ludjYTDo2QL_zELplLWnu8Z2a0l1LKMAAdhGV-Wv2YJbI-EREteVHuX9rYRqHa3QF3VzOYPQ9WD2JiDvhHkEMw2JJ5cQN_mGQsg4nrMn5I6WjmCO7l7H_1zcnCWCo9rECCYTVoOVtv_fh1-cRyq33d6SfvHKjNdJ3VwbbkOzB8bgETKIHWDNw4PIm5OL79DAg86OCvvNbIqFcmSWlv0o",
			title: "夜幕协议",
			meta: "特别篇 • 48分钟",
		},
	] as const;

	return (
		<div className="bg-[#060e20] text-[#dee5ff]">
			<HomeHeader isPending={isPending} session={session} />

			<section
				id="hero"
				className="relative flex min-h-[870px] w-full scroll-mt-24 items-end overflow-hidden pt-20"
			>
				<div className="absolute inset-0 z-0">
					<img
						alt="带有蓝色光芒的未来主义霓虹城市场景"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuATbaIlfFSn06uR6K9g2P1ZRRLF-d9B67F9DXR9d8vZ3sFQvLWapWEaH1-ludjYTDo2QL_zELplLWnu8Z2a0l1LKMAAdhGV-Wv2YJbI-EREteVHuX9rYRqHa3QF3VzOYPQ9WD2JiDvhHkEMw2JJ5cQN_mGQsg4nrMn5I6WjmCO7l7H_1zcnCWCo9rECCYTVoOVtv_fh1-cRyq33d6SfvHKjNdJ3VwbbkOzB8bgETKIHWDNw4PIm5OL79DAg86OCvvNbIqFcmSWlv0o"
						className="h-full w-full object-cover opacity-60"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-[#060e20]/40 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-r from-[#060e20] via-transparent to-transparent" />
				</div>

				<div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 md:px-12">
					<div className="max-w-4xl">
						<div className="mb-4 flex flex-wrap items-center gap-3">
							<span className="rounded-full border border-[#85adff]/20 bg-[#85adff]/20 px-3 py-1 font-bold font-login-body text-[#85adff] text-xs uppercase tracking-[0.28em]">
								主打推荐
							</span>
							<span className="flex items-center gap-1 font-login-body text-[#a3aac4] text-sm">
								<span
									className="material-symbols-outlined text-sm"
									style={{
										fontVariationSettings:
											'"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
									}}
								>
									star
								</span>
								9.8 评分
							</span>
						</div>

						<h1 className="mb-6 font-black font-login-headline text-6xl leading-none tracking-tighter md:text-8xl">
							赛博 <br /> 创世纪
						</h1>

						<p className="mb-8 max-w-2xl font-login-body text-[#a3aac4] text-lg leading-8">
							在这个记忆可以像货币一样交易的世界里，一名独行分析师发现了一个可能重启人类数字意识的协议。
						</p>

						<div className="flex flex-wrap gap-4">
							<a
								href="#latest-updates"
								className="inline-flex items-center gap-2 rounded-xl bg-[#85adff] px-8 py-4 font-bold font-login-body text-[#002c66] shadow-xl transition-transform hover:scale-105"
							>
								<span
									className="material-symbols-outlined"
									style={{
										fontVariationSettings:
											'"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
									}}
								>
									play_arrow
								</span>
								立即观看
							</a>
							<Link
								to={session ? "/dashboard" : "/login"}
								className="inline-flex items-center gap-2 rounded-xl bg-[#141f38] px-8 py-4 font-bold font-login-body text-[#dee5ff] transition-colors hover:bg-[#192540]"
							>
								<span className="material-symbols-outlined">add</span>
								{session ? "进入控制台" : "我的追番"}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<main className="relative z-10 -mt-12 px-6 pb-24 md:px-12">
				<div className="mx-auto max-w-[1600px] space-y-24">
					<section id="latest-updates" className="scroll-mt-24">
						<div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
							<div>
								<h2 className="font-bold font-login-headline text-3xl text-[#dee5ff]">
									最新更新
								</h2>
								<p className="mt-2 font-login-body text-[#a3aac4]">
									新上架剧集与动态
								</p>
							</div>

							<a
								href="#latest-updates-slot"
								className="inline-flex items-center gap-1 font-login-body font-medium text-[#85adff] hover:underline"
							>
								查看全部
								<span className="material-symbols-outlined">chevron_right</span>
							</a>
						</div>

						<div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
							<LatestUpdateCard
								backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCoEuky6uCism-yQNUvF8oujtaK7riIQXmf3BDPqozOwz8FyNcRdJ-CM60qAR_OXtxHGDGtaZ_ZoXbLRfOKStTueVIWegITcl-6au7U4GKbgYgq_56f70Zz8WIeEeWc7s81oRzZesKDAZY6mjNVMp8XMc4Q_GKK42vk4iZTnxVoE5cY77z3BdGPMYmrtWGENP_Wyp0PN3K7roTQr81zcA9PUfNCWXUJCbahCRNSqF1QHwUWEP279DW5lldtk77XMpTPpXoKcIUybyo"
								episodeLabel="第12集已更新"
								title="神经链路：零点"
								description="人类与机器之间最后的桥梁在本周的高潮剧情中终于揭晓。"
								badges={["HD", "字幕 | 配音"]}
							/>

							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[108px] lg:grid-cols-2 lg:grid-rows-4">
								{latestUpdateMiniCards.map((card) => (
									<LatestUpdateMiniCard
										key={`${card.title}-${card.meta}`}
										backgroundImage={card.backgroundImage}
										title={card.title}
										meta={card.meta}
									/>
								))}
							</div>
						</div>
					</section>

					<section className="grid grid-cols-1 gap-12 lg:grid-cols-3">
						<div id="top-ranking" className="scroll-mt-24 lg:col-span-2">
							<div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
								<h2 className="font-bold font-login-headline text-3xl text-[#dee5ff]">
									协议排行榜 Top 5
								</h2>
								<a
									href="#top-ranking-slot"
									className="font-login-body text-[#85adff] text-sm hover:underline"
								>
									查看更多榜单
								</a>
							</div>

							<TopRankingItem
								rank="01"
								posterImage="https://lh3.googleusercontent.com/aida-public/AB6AXuA7yR9v2CndLYT740Xs3VkHHQv_9NzoKm1MUuPH0AAEzkORbuWmfGLxWhtaDCFXp_vZ7jrPrGvm6vaXDe4EziCv5UTs_7JysBAdu0G02xlXw1_qSbZJ3xtb-oCcACJ7lfoZ01hf7JmyKfh_Sf7u5u5N8NZe_yjfR--jNV20Ggg7WoZitIjmVAohBnkBT6WAb0lOADLPUoyD4bjCcHqQvaq14fGPbzFt2g5CiAyp2UlRqnHtE2B5PIKt_CvXc1MKhSdjUWJkgxp-zsM"
								title="赛博 创世纪"
								genres="动作, 科幻, 心理"
								trendText="全球协议热度 #1"
							/>
						</div>

						<div id="categories" className="scroll-mt-24">
							<div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
								<h2 className="font-bold font-login-headline text-3xl text-[#dee5ff]">
									指令分类
								</h2>
								<a
									href="#categories-slot"
									className="font-login-body text-[#85adff] text-sm hover:underline"
								>
									查看更多分类
								</a>
							</div>

							<CategoryCard
								iconName="bolt"
								title="高能脉冲"
								countLabel="342 部作品"
								description="高风险的硬核动作系列作品。"
							/>
						</div>
					</section>

					<section
						id="schedule-slot"
						className="scroll-mt-24 rounded-xl border border-[#192540] bg-[#0f1930] p-8"
					>
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<h2 className="font-bold font-login-headline text-2xl text-[#dee5ff]">
									放送表槽位预留
								</h2>
								<p className="mt-2 font-login-body text-[#a3aac4]">
									这里预留给后续的放送表、专题页和更多内容跳转。
								</p>
							</div>

							<a
								href="#hero"
								className="font-login-body text-[#85adff] text-sm hover:underline"
							>
								返回顶部
							</a>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
