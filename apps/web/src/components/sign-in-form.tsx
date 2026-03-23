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

export default function SignInForm() {
  const navigate = useNavigate({
    from: "/login",
  });
  const { isPending } = authClient.useSession();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/profile-center",
            });
            toast.success("登录成功");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.string(),
        password: z.string().min(8, "密码长度不能少于 8 位"),
        rememberMe: z.boolean(),
      }),
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
          欢迎回来
        </CardTitle>
        <CardDescription className="text-[#a3aac4] text-sm">
          请输入您的凭据以访问库
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 px-8 py-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex flex-col gap-5"
        >
          <form.Field name="email">
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor={field.name}
                  className="ml-1 font-medium text-[#a3aac4] text-xs"
                >
                  用户名或电子邮箱
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
                    autoComplete="email"
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

          <form.Field name="password">
            {(field) => (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <Label
                    htmlFor={field.name}
                    className="ml-1 font-medium text-[#a3aac4] text-xs"
                  >
                    密码
                  </Label>
                </div>
                <div className="group relative">
                  <span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6d758c] text-[20px] transition-colors group-focus-within:text-[#85adff]">
                    lock
                  </span>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={showPassword ? "text" : "password"}
                    variant="login"
                    autoComplete="current-password"
                    placeholder="请输入您的密码"
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

          <form.Field name="rememberMe">
            {(field) => (
              <div className="flex items-center justify-between gap-3 text-xs">
                <label
                  htmlFor={field.name}
                  className="group flex cursor-pointer items-center gap-2 text-[#a3aac4]"
                >
                  <Checkbox
                    id={field.name}
                    name={field.name}
                    checked={field.state.value}
                    onCheckedChange={(checked) => field.handleChange(checked)}
                    className="rounded border-[#40485d] bg-[#091328] text-[#85adff] data-checked:bg-[#85adff] data-checked:text-[#002150]"
                  />
                  <span className="transition-colors group-hover:text-[#dee5ff]">
                    记住我
                  </span>
                </label>
                <Link
                  to="/"
                  className="font-medium text-[#85adff] text-xs transition-colors hover:text-blue-300"
                >
                  忘记密码？
                </Link>
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
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#85adff] to-[#6e9fff] py-3.5 font-semibold text-[#002150] text-sm shadow-[#85adff]/20 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-[#94b6ff] hover:to-[#7ba7ff] active:scale-95"
                disabled={!canSubmit || isSubmitting}
              >
                {isSubmitting ? "登录中..." : "登录账号"}
              </Button>
            )}
          </form.Subscribe>
        </form>
      </CardContent>

      <CardFooter className="relative z-10 flex flex-col gap-8 border-none px-8 pt-8 pb-8">
        <SocialAuthButtons label="或通过以下方式继续" />

        <p className="w-full text-center text-[#a3aac4] text-sm">
          还没有账号？
          <Link
            to="/register"
            className="ml-1 font-bold text-[#85adff] transition-all hover:underline"
          >
            立即注册
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
