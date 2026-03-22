interface LatestUpdateMiniCardProps {
	backgroundImage: string;
	title: string;
	meta: string;
	href?: string;
}

export default function LatestUpdateMiniCard({
	backgroundImage,
	title,
	meta,
	href = "#latest-updates-slot",
}: LatestUpdateMiniCardProps) {
	return (
		<a
			href={href}
			className="group relative block overflow-hidden rounded-xl bg-[#141f38] shadow-black/20 shadow-xl"
		>
			<img
				alt={title}
				src={backgroundImage}
				className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-110"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

			<div className="relative flex h-full min-h-[140px] flex-col justify-end p-4 lg:min-h-0">
				<h4 className="font-bold font-login-headline text-[#dee5ff] text-lg">
					{title}
				</h4>
				<p className="mt-1 font-login-body text-[#a3aac4] text-xs">{meta}</p>
			</div>
		</a>
	);
}
