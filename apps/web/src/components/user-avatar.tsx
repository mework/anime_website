import { cn } from "@anime_website/ui/lib/utils";

interface UserAvatarProps {
	name: string;
	image?: string | null;
	className?: string;
	fallbackClassName?: string;
	imageClassName?: string;
}

function getAvatarInitials(name: string) {
	const value = name.trim();
	if (!value) {
		return "A";
	}

	return value.slice(0, 2).toUpperCase();
}

export default function UserAvatar({
	name,
	image,
	className,
	fallbackClassName,
	imageClassName,
}: UserAvatarProps) {
	if (image) {
		return (
			<img
				src={image}
				alt={name}
				className={cn("h-full w-full object-cover", className, imageClassName)}
			/>
		);
	}

	return (
		<span
			className={cn(
				"flex h-full w-full items-center justify-center bg-[#85adff] font-bold font-login-headline text-[#002150]",
				className,
				fallbackClassName,
			)}
		>
			{getAvatarInitials(name)}
		</span>
	);
}
