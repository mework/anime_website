import { Button } from "@anime_website/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@anime_website/ui/components/card";
import { Checkbox } from "@anime_website/ui/components/checkbox";
import { Input } from "@anime_website/ui/components/input";
import { Label } from "@anime_website/ui/components/label";
import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";

import { authClient } from "@/lib/auth-client";

import Loader from "./loader";
import SocialAuthButtons from "./social-auth-buttons";

const signUpSchema = z
	.object({
		name: z.string().min(2, "用户名长度不能少于 2 位"),
		email: z.email("请输入有效的邮箱地址"),
		password: z.string().min(8, "密码长度不能少于 8 位"),
		confirmPassword: z.string().min(1, "请再次输入密码"),
		agreeToTerms: z.boolean(),
	})
	.refine((value) => value.password === value.confirmPassword, {
		message: "两次输入的密码不一致",
		path: ["confirmPassword"],
	})
	.refine((value) => value.agreeToTerms, {
		message: "请先阅读并同意用户协议和隐私政策",
		path: ["agreeToTerms"],
	});

export default function SignUpForm() {
	const navigate = useNavigate({
		from: "/register",
	});
	const { isPending } = authClient.useSession();
	const [showPassword, setShowPassword] = useState(false);

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			agreeToTerms: false,
		},
		onSubmit: async ({ value }) => {
			await authClient.signUp.email(
				{
					email: value.email,
					password: value.password,
					name: value.name,
				},
				{
					onSuccess: () => {
						navigate({
							to: "/profile-center",
						});
						toast.success("注册成功");
					},
					onError: (error) => {
						toast.error(error.error.message || error.error.statusText);
					},
				},
			);
		},
		validators: {
			onSubmit: signUpSchema,
		},
	});

	if (isPending) {
		return <Loader />;
	}

	return (
		<Card className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-blue-200/10 bg-[#141f3899] py-0 text-[#dee5ff] shadow-2xl shadow-blue-950/40 ring-0 backdrop-blur-[24px]">
			<div className="absolute -top-24 -right-24 size-48 rounded-full bg-[#85adff]/10 blur-3xl" />
			<CardHeader className="relative z-10 mb-8 gap-2 border-none px-8 pt-8 pb-0 text-center">
				<CardTitle className="font-bold font-login-headline text-2xl text-[#dee5ff]">
					创建新账号
				</CardTitle>
				<CardDescription className="text-[#a3aac4] text-sm">
					加入我们的动漫社区，开始您的追番之旅
				</CardDescription>
			</CardHeader>

			<CardContent className="relative z-10 px-8 py-0">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
					className="flex flex-col gap-4"
				>
					<form.Field name="name">
						{(field) => (
							<div className="flex flex-col gap-2">
								<Label
									htmlFor={field.name}
									className="ml-1 font-medium text-[#a3aac4] text-xs"
								>
									用户名
								</Label>
								<div className="group relative">
									<span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6d758c] text-[20px] transition-colors group-focus-within:text-[#85adff]">
										person
									</span>
									<Input
										id={field.name}
										name={field.name}
										type="text"
										variant="login"
										autoComplete="username"
										placeholder="请输入您的用户名"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										aria-invalid={field.state.meta.errors.length > 0}
										className="pr-4 pl-12"
									/>
								</div>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-[#ff716c] text-sm">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>

					<form.Field name="email">
						{(field) => (
							<div className="flex flex-col gap-2">
								<Label
									htmlFor={field.name}
									className="ml-1 font-medium text-[#a3aac4] text-xs"
								>
									电子邮箱
								</Label>
								<div className="group relative">
									<span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6d758c] text-[20px] transition-colors group-focus-within:text-[#85adff]">
										mail
									</span>
									<Input
										id={field.name}
										name={field.name}
										type="email"
										variant="login"
										autoComplete="email"
										placeholder="example@email.com"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										aria-invalid={field.state.meta.errors.length > 0}
										className="pr-4 pl-12"
									/>
								</div>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-[#ff716c] text-sm">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>

					<form.Field name="password">
						{(field) => (
							<div className="flex flex-col gap-2">
								<Label
									htmlFor={field.name}
									className="ml-1 font-medium text-[#a3aac4] text-xs"
								>
									密码
								</Label>
								<div className="group relative">
									<span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6d758c] text-[20px] transition-colors group-focus-within:text-[#85adff]">
										lock
									</span>
									<Input
										id={field.name}
										name={field.name}
										type={showPassword ? "text" : "password"}
										variant="login"
										autoComplete="new-password"
										placeholder="至少8位字符"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										aria-invalid={field.state.meta.errors.length > 0}
										className="pr-12 pl-12"
									/>
									<button
										type="button"
										className="absolute top-1/2 right-4 flex size-5 -translate-y-1/2 items-center justify-center text-[#6d758c] leading-none transition-colors hover:text-[#dee5ff]"
										onClick={() => setShowPassword((value) => !value)}
									>
										<span className="material-symbols-outlined block text-[20px] leading-none">
											{showPassword ? "visibility_off" : "visibility"}
										</span>
									</button>
								</div>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-[#ff716c] text-sm">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>

					<form.Field name="confirmPassword">
						{(field) => (
							<div className="flex flex-col gap-2">
								<Label
									htmlFor={field.name}
									className="ml-1 font-medium text-[#a3aac4] text-xs"
								>
									确认密码
								</Label>
								<div className="group relative">
									<span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6d758c] text-[20px] transition-colors group-focus-within:text-[#85adff]">
										enhanced_encryption
									</span>
									<Input
										id={field.name}
										name={field.name}
										type="password"
										variant="login"
										autoComplete="new-password"
										placeholder="请再次输入密码"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										aria-invalid={field.state.meta.errors.length > 0}
										className="pr-4 pl-12"
									/>
								</div>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-[#ff716c] text-sm">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>

					<form.Field name="agreeToTerms">
						{(field) => (
							<div className="flex flex-col gap-2 pt-1">
								<div className="flex items-center gap-2 text-[#a3aac4] text-xs">
									<Checkbox
										id={field.name}
										name={field.name}
										checked={field.state.value}
										onCheckedChange={(checked) =>
											field.handleChange(checked === true)
										}
										className="mt-0.5 rounded border-[#40485d] bg-[#091328] text-[#85adff] data-checked:bg-[#85adff] data-checked:text-[#002150]"
									/>
									<label
										htmlFor={field.name}
										className="cursor-pointer leading-tight"
									>
										我已阅读并同意
										<Link
											to="/"
											className="mx-1 inline text-[#85adff] transition-colors hover:text-blue-300"
										>
											用户协议
										</Link>
										和
										<Link
											to="/"
											className="ml-1 inline text-[#85adff] transition-colors hover:text-blue-300"
										>
											隐私政策
										</Link>
									</label>
								</div>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-[#ff716c] text-sm">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>

					<form.Subscribe
						selector={(state) => ({
							canSubmit: state.canSubmit,
							isSubmitting: state.isSubmitting,
						})}
					>
						{({ canSubmit, isSubmitting }) => (
							<Button
								type="submit"
								size="lg"
								className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#85adff] to-[#6e9fff] py-3.5 font-semibold text-[#002150] text-sm shadow-[#85adff]/20 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-[#94b6ff] hover:to-[#7ba7ff] active:scale-95"
								disabled={!canSubmit || isSubmitting}
							>
								{isSubmitting ? "注册中..." : "立即注册"}
							</Button>
						)}
					</form.Subscribe>
				</form>
			</CardContent>

			<CardFooter className="relative z-10 flex flex-col gap-8 border-none px-8 pt-8 pb-8">
				<SocialAuthButtons label="或通过以下方式注册" />

				<p className="w-full text-center text-[#a3aac4] text-sm">
					已有账号？
					<Link
						to="/login"
						className="ml-1 font-bold text-[#85adff] transition-all hover:underline"
					>
						立即登录
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
