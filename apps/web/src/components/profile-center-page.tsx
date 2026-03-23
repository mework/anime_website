import { Button } from "@anime_website/ui/components/button";

import type { ProfileCenterViewModel } from "@/features/profile-center/use-profile-center-view";

import UserAvatar from "./user-avatar";

interface ProfileCenterPageProps {
	view: ProfileCenterViewModel;
}

export default function ProfileCenterPage({ view }: ProfileCenterPageProps) {
	return (
		<div className="flex flex-1 flex-col bg-[#060e20] text-[#dee5ff]">
			<header className="relative h-[350px] overflow-hidden">
				<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#060e20]/60 to-[#060e20]" />
				<img
					src={view.summary.heroBackgroundImage}
					alt=""
					className="absolute inset-0 h-full w-full object-cover opacity-50"
				/>
				<div className="relative z-20 mx-auto flex h-full max-w-7xl items-end px-8 pb-12">
					<div className="flex w-full flex-col gap-8 md:flex-row md:items-end">
						<div className="group relative size-32 overflow-hidden rounded-2xl border-4 border-[#141f38] shadow-2xl md:size-40">
							<UserAvatar
								name={view.summary.userName}
								image={view.summary.userAvatar}
								className="size-full"
								fallbackClassName="text-3xl"
							/>
							<div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
								<span className="material-symbols-outlined text-3xl text-white">
									photo_camera
								</span>
							</div>
						</div>

						<div className="flex-1">
							<div className="mb-2 flex flex-wrap items-center gap-3">
								<span className="rounded-full bg-[#85adff]/10 px-3 py-1 font-bold font-login-body text-[#85adff] text-xs uppercase tracking-[0.28em]">
									{view.summary.badgeLabel}
								</span>
								<span className="flex items-center gap-1 text-[#a3aac4] text-sm">
									<span className="material-symbols-outlined text-sm">
										verified
									</span>
									{view.summary.membershipLabel}
								</span>
							</div>

							<h1 className="font-black font-login-headline text-4xl text-[#dee5ff] tracking-tighter md:text-5xl">
								{view.summary.userName}
							</h1>

							<div className="mt-6 flex flex-wrap gap-8">
								{view.summary.stats.map((stat) => (
									<div key={stat.label} className="flex flex-col">
										<span className="font-bold font-login-body text-[#a3aac4] text-xs uppercase tracking-[0.28em]">
											{stat.label}
										</span>
										<span className="font-bold font-login-headline text-2xl text-[#85adff]">
											{stat.value}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="hidden items-center gap-4 lg:flex">
							<Button className="h-auto rounded-xl bg-gradient-to-r from-[#85adff] to-[#6e9fff] px-6 py-3 font-bold text-[#002c66] shadow-[#85adff]/20 shadow-xl transition-all hover:scale-105 active:scale-95">
								{view.summary.primaryActionLabel}
							</Button>
							<Button
								variant="secondary"
								size="icon-lg"
								className="size-12 rounded-xl bg-[#141f38] text-[#dee5ff] transition-all hover:bg-[#192540] hover:text-white active:scale-90"
								aria-label={view.summary.secondaryActionLabel}
							>
								<span className="material-symbols-outlined">share</span>
							</Button>
						</div>
					</div>
				</div>
			</header>

			<div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-8 py-12 lg:flex-row">
				<aside className="w-full lg:w-64">
					<nav className="space-y-2">
						{view.actionLinks.map((link) => (
							<a
								key={link.id}
								href={link.href}
								className={
									link.active
										? "flex items-center gap-4 rounded-xl border-[#85adff] border-l-4 bg-[#6e9fff]/20 px-6 py-4 font-semibold text-[#85adff] transition-all"
										: "group flex items-center gap-4 rounded-xl px-6 py-4 text-[#a3aac4] transition-all hover:bg-[#141f38] hover:text-[#dee5ff]"
								}
							>
								<span
									className={
										link.active
											? "material-symbols-outlined"
											: "material-symbols-outlined transition-transform group-hover:scale-110"
									}
									style={
										link.active
											? {
													fontVariationSettings:
														'"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
												}
											: undefined
									}
								>
									{link.icon}
								</span>
								<span>{link.label}</span>
							</a>
						))}
					</nav>

					<div className="mt-12 rounded-2xl bg-[#091328] p-6">
						<h4 className="mb-4 font-bold font-login-body text-[#a3aac4] text-xs uppercase tracking-[0.28em]">
							{view.status.title}
						</h4>
						<div className="flex items-center gap-3">
							<div className="size-3 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
							<span className="font-medium text-sm">{view.status.label}</span>
						</div>
						<p className="mt-2 text-[#a3aac4] text-xs italic">
							{view.status.quote}
						</p>
					</div>
				</aside>

				<div className="flex-1 space-y-16">
					<section>
						<div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<h3 className="font-bold font-login-headline text-2xl text-[#dee5ff] tracking-tight">
									{view.historySectionTitle}
								</h3>
								<p className="text-[#a3aac4] text-sm">
									{view.historySectionDescription}
								</p>
							</div>
							<button
								type="button"
								className="flex items-center gap-1 font-semibold text-[#85adff] text-sm hover:underline"
							>
								{view.historySectionCta}
								<span className="material-symbols-outlined text-sm">
									arrow_forward
								</span>
							</button>
						</div>

						<div className="group relative aspect-[21/9] cursor-pointer overflow-hidden rounded-3xl bg-[#141f38] shadow-2xl md:aspect-[25/9]">
							<img
								src={view.continueWatching.backgroundImage}
								alt={view.continueWatching.title}
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-[#060e20] via-[#060e20]/40 to-transparent" />
							<div className="absolute inset-0 flex max-w-xl flex-col justify-center p-8">
								<div className="mb-4 flex flex-wrap items-center gap-2">
									<span className="rounded bg-red-500 px-2 py-0.5 font-black font-login-body text-[10px] text-white uppercase tracking-[0.24em]">
										{view.continueWatching.statusLabel}
									</span>
									<span className="font-login-body font-medium text-[#dee5ff]/80 text-xs">
										{view.continueWatching.meta}
									</span>
								</div>
								<h2 className="mb-4 font-black font-login-headline text-3xl text-[#dee5ff] leading-tight md:text-4xl">
									{view.continueWatching.title}
								</h2>
								<p className="mb-6 hidden text-[#a3aac4] text-sm md:block">
									{view.continueWatching.description}
								</p>
								<div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
									<div
										className="h-full rounded-full bg-[#85adff] shadow-[0_0_15px_rgba(133,173,255,0.6)]"
										style={{
											width: `${view.continueWatching.progressPercent}%`,
										}}
									/>
								</div>
								<div className="flex flex-wrap gap-4">
									<Button className="h-auto rounded-xl bg-white px-6 py-3 font-bold text-[#060e20] transition-all hover:bg-[#85adff] active:scale-95">
										<span
											className="material-symbols-outlined"
											style={{
												fontVariationSettings:
													'"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
											}}
										>
											play_arrow
										</span>
										{view.continueWatching.primaryActionLabel}
									</Button>
									<Button
										variant="secondary"
										className="h-auto rounded-xl border border-white/10 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
									>
										<span className="material-symbols-outlined">info</span>
										{view.continueWatching.secondaryActionLabel}
									</Button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
