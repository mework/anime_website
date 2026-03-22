interface CategoryCardProps {
	iconName: string;
	title: string;
	countLabel: string;
	description: string;
	href?: string;
}

export default function CategoryCard({
	iconName,
	title,
	countLabel,
	description,
	href = "#categories-slot",
}: CategoryCardProps) {
	return (
		<a
			href={href}
			className="group block rounded-xl bg-[#141f38] p-6 transition-all hover:bg-[#192540]"
		>
			<div className="mb-4 flex items-center justify-between">
				<span className="material-symbols-outlined text-3xl text-[#85adff]">
					{iconName}
				</span>
				<span className="font-bold font-login-body text-[#a3aac4] text-xs uppercase">
					{countLabel}
				</span>
			</div>
			<h4 className="mb-1 font-bold font-login-headline text-[#dee5ff] text-xl">
				{title}
			</h4>
			<p className="font-login-body text-[#a3aac4] text-sm leading-6">
				{description}
			</p>
		</a>
	);
}
