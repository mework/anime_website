interface TopRankingItemProps {
	rank: string;
	posterImage: string;
	title: string;
	genres: string;
	trendText?: string;
	href?: string;
}

export default function TopRankingItem({
	rank,
	posterImage,
	title,
	genres,
	trendText,
	href = "#top-ranking-slot",
}: TopRankingItemProps) {
	return (
		<div className="group flex items-center gap-6 rounded-xl p-4 transition-colors hover:bg-[#141f38]">
			<span className="font-extrabold font-login-headline text-5xl text-[#6d758c]/40 transition-colors group-hover:text-[#85adff]/50">
				{rank}
			</span>

			<img
				alt={title}
				src={posterImage}
				className="h-28 w-20 rounded-lg object-cover shadow-lg"
			/>

			<div className="min-w-0 flex-1">
				<h4 className="truncate font-bold font-login-headline text-[#dee5ff] text-xl">
					{title}
				</h4>
				<p className="mt-1 font-login-body text-[#a3aac4] text-sm">{genres}</p>
				{trendText ? (
					<div className="mt-3 flex items-center gap-2">
						<span
							className="material-symbols-outlined text-[#85adff] text-sm"
							style={{
								fontVariationSettings:
									'"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
							}}
						>
							trending_up
						</span>
						<span className="font-bold font-login-body text-[#85adff] text-xs">
							{trendText}
						</span>
					</div>
				) : null}
			</div>

			<a
				href={href}
				className="inline-flex size-12 items-center justify-center rounded-full bg-[#192540] text-[#dee5ff] transition-all hover:bg-[#85adff] hover:text-[#002c66]"
			>
				<span className="material-symbols-outlined">play_arrow</span>
			</a>
		</div>
	);
}
