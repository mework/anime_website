export default function Footer() {
	const footerLinks = ["隐私政策", "服务条款", "联系我们", "帮助中心"];
	const footerIcons = ["public", "alternate_email", "group"];

	return (
		<footer className="relative w-full bg-[#091328] px-8 py-16">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
				<span className="mb-4 font-bold font-login-headline text-[#85adff] text-xl">
					MidnightAnime
				</span>

				<div className="mb-8 flex flex-wrap justify-center gap-6">
					{footerLinks.map((label) => (
						<a
							key={label}
							href="/"
							className="font-login-body text-[#a3aac4] text-sm transition-colors hover:text-white"
						>
							{label}
						</a>
					))}
				</div>

				<div className="mb-8 flex gap-4">
					{footerIcons.map((icon) => (
						<a
							key={icon}
							href="/"
							aria-label={icon}
							className="group flex size-10 items-center justify-center rounded-full bg-[#141f38] transition-all hover:bg-[#85adff]"
						>
							<span className="material-symbols-outlined text-[#dee5ff] transition-colors group-hover:text-[#002c66]">
								{icon}
							</span>
						</a>
					))}
				</div>

				<p className="font-login-body text-[#a3aac4] text-sm">
					© 2024 MidnightAnime. 午夜影院极致体验.
				</p>
			</div>
		</footer>
	);
}
