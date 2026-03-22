import { Button } from "@anime_website/ui/components/button";

const AUTH_OPTIONS = [
	{
		name: "Discord",
		iconUrl:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xx0BcUCqmoEtMJiPcJbjNU7oW0a2wmdRPCn9gHqb7ouIBk3wVYX-djHVioKr1ygWvc8PFRVFv4vl-7u7hodrh0_zrg1Oaq1EyuMhE-HiIaN2OyOApW8kYLcsdIE3dd4o0qkA794IJkYW8BaGVqKgnn1e2pN6cMs9oGvtrd1fk1DbumGxCL4A8wX7yHSfwXuVvAZ6Uv2SguKRgoXX50jZI3EKXc9mSd4vpwmG3-YWyW9Za84n4w-HxSoEiR5ajI2yeVV-FkGZ8rY",
	},
	{
		name: "Google",
		iconUrl:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuAQLzX_-Nc0VgmRX2VTl0WKHh_8KN33GbCrqnjolCt12oBKvKuKrJrbCoz_v69BvoG6ukpdc1KQRWZHysPY_ReBVDeLE527kyU4tQcytwOxEVjZPPW1bnmgk_XmSw0lu5AhkHVEaj9Cg2wxlETALKIwznuNpaXvcBSr54FdKcqGrDVLQgBN6u9-e_hIuvRaYd0ufJCFMdMaDRYN9oDYMVFTAxjv1qgCxA0ykLGVE45XY4xg_tk6ikjo9RT-DSzXjHdtEIr0uWrpjew",
	},
] as const;

export default function SocialAuthButtons({ label }: { label: string }) {
	return (
		<>
			<div className="flex w-full items-center gap-4">
				<div className="h-px flex-1 bg-[#40485d]/30" />
				<span className="font-bold text-[#6d758c] text-[10px] uppercase tracking-[0.28em]">
					{label}
				</span>
				<div className="h-px flex-1 bg-[#40485d]/30" />
			</div>

			<div className="grid w-full grid-cols-2 gap-4">
				{AUTH_OPTIONS.map((option) => (
					<Button
						key={option.name}
						type="button"
						variant="secondary"
						className="h-auto gap-2 rounded-xl border-none bg-[#141f38] py-3 text-[#dee5ff] transition-all duration-300 hover:bg-[#192540]"
					>
						<img
							alt={option.name}
							src={option.iconUrl}
							className="size-5 opacity-80"
						/>
						<span className="font-medium text-sm">{option.name}</span>
					</Button>
				))}
			</div>
		</>
	);
}
