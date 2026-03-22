import { Toaster } from "@anime_website/ui/components/sonner";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { trpc } from "@/utils/trpc";

import "../index.css";

export interface RouterAppContext {
	trpc: typeof trpc;
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{
				title: "anime_website",
			},
			{
				name: "description",
				content: "anime_website is a web application",
			},
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
	}),
});

function RootComponent() {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	const isStandalonePage =
		pathname === "/" || pathname === "/login" || pathname === "/register";
	const showDevtools = import.meta.env.DEV && !isStandalonePage;

	return (
		<>
			<HeadContent />
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				disableTransitionOnChange
				storageKey="vite-ui-theme"
			>
				<div
					className={
						isStandalonePage ? "min-h-svh" : "grid h-svh grid-rows-[auto_1fr]"
					}
				>
					{!isStandalonePage ? <Header /> : null}
					<Outlet />
				</div>
				<Toaster richColors />
			</ThemeProvider>
			{showDevtools ? <TanStackRouterDevtools position="bottom-left" /> : null}
			{showDevtools ? (
				<ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
			) : null}
		</>
	);
}
