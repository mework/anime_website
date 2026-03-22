interface LatestUpdateCardProps {
	backgroundImage: string;
	episodeLabel: string;
	title: string;
	description: string;
	badges: string[];
	href?: string;
}

export default function LatestUpdateCard({
	backgroundImage,
	episodeLabel,
	title,
	description,
	badges,
	href = "#latest-updates-slot",
}: LatestUpdateCardProps) {
	return (
		<a
			href={href}
			className="group relative block overflow-hidden rounded-xl bg-[#141f38] shadow-2xl shadow-black/20"
		>
			<img
				alt={title}
				src={backgroundImage}
				className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

			<div className="relative flex min-h-[420px] flex-col justify-end p-8">
				<span className="mb-2 block font-bold font-login-body text-[#85adff] text-xs uppercase tracking-[0.28em]">
					{episodeLabel}
				</span>
				<h3 className="mb-3 font-bold font-login-headline text-3xl text-white">
					{title}
				</h3>
				<p className="mb-5 max-w-xl font-login-body text-[#c7d0ec] text-sm leading-6">
					{description}
				</p>
				<div className="flex flex-wrap items-center gap-3">
					{badges.map((badge) => (
						<span
							key={badge}
							className="rounded-lg bg-white/10 px-3 py-1 font-bold font-login-body text-white text-xs backdrop-blur-md"
						>
							{badge}
						</span>
					))}
				</div>
			</div>
		</a>
	);
}
