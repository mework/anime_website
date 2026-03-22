import { cn } from "@anime_website/ui/lib/utils";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const inputVariants = cva(
	"w-full min-w-0 outline-none transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"h-8 rounded-none border border-input bg-transparent px-2.5 py-1 text-xs file:inline-flex file:h-6 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:disabled:bg-input/80",
				login:
					"rounded-xl border-none bg-[#091328] py-3 text-[#dee5ff] text-sm placeholder:text-[#6d758c] focus-visible:ring-2 focus-visible:ring-[#85adff]/40",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Input({
	className,
	type,
	variant,
	...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
	return (
		<InputPrimitive
			type={type}
			data-slot="input"
			className={cn(inputVariants({ variant, className }))}
			{...props}
		/>
	);
}

export { Input, inputVariants };
