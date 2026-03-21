# 项目上下文

## 项目概述

这是一个基于 `pnpm workspace + Turborepo` 的 TypeScript monorepo。

- 前端：`apps/web`，技术栈为 `Vite + React 19 + TanStack Router + React Query`
- 后端：`apps/server`，技术栈为 `Bun + Hono + tRPC`
- 共享能力：放在 `packages/*`，包括 API、鉴权、数据库、环境变量、UI 和部署脚本

优先把它理解为“前后端分离，但类型和基础设施在 monorepo 内共享”的项目。

## 目录地图

### 应用入口

- `apps/web`
  - 前端应用入口
  - 路由定义在 `src/routes`
  - 页面级组件和 app 内组件放在 `src/components`
  - tRPC 客户端在 `src/utils/trpc.ts`
  - Better Auth 客户端在 `src/lib/auth-client.ts`

- `apps/server`
  - 后端 HTTP 入口
  - `src/index.ts` 负责挂载 Hono、中间件、`/api/auth/*` 和 `/trpc/*`

### 共享包

- `packages/api`
  - tRPC 入口
  - 放 router、procedure、context
  - 需要新增后端接口时，优先改这里

- `packages/auth`
  - Better Auth 配置
  - 放认证相关行为、adapter、cookie 策略

- `packages/db`
  - 数据库连接、Drizzle schema、drizzle-kit 配置
  - 当前 schema 主要服务于 Better Auth

- `packages/env`
  - 环境变量声明和校验
  - 分为 `@anime_website/env/server` 和 `@anime_website/env/web`

- `packages/ui`
  - 共享 UI primitive 和全局样式
  - 基础组件优先放这里，不要在 app 内重复造轮子

- `packages/infra`
  - Alchemy / Cloudflare 相关部署脚本
  - 当前主要体现 web 部署入口

## 改动落点指南

### 前端相关

- 新页面或新路由：改 `apps/web/src/routes`
- 前端 app 内组件：改 `apps/web/src/components`
- 前端 API 调用：优先看 `apps/web/src/utils/trpc.ts`
- 登录态相关前端逻辑：优先看 `apps/web/src/lib/auth-client.ts`

### 后端相关

- 新 tRPC procedure、router、鉴权规则：改 `packages/api`
- 认证行为或 Better Auth 配置：改 `packages/auth`
- 数据库 schema、连接、迁移配置：改 `packages/db`
- 环境变量声明：改 `packages/env`

### 共享 UI 与样式

- 新的共享基础组件：改 `packages/ui/src/components`
- 全局样式和设计 token：优先看 `packages/ui/src/styles/globals.css`

## 关键运行链路

### 页面和 tRPC

- 前端通过 `apps/web/src/utils/trpc.ts` 发请求
- tRPC 请求地址是 `${VITE_SERVER_URL}/trpc`
- 服务端在 `apps/server/src/index.ts` 把 `/trpc/*` 挂到 `packages/api` 的 router

### 登录态和认证

- 前端通过 `better-auth/react` 访问 `${VITE_SERVER_URL}/api/auth/*`
- 服务端在 `apps/server/src/index.ts` 把 `/api/auth/*` 直接交给 Better Auth
- Better Auth 配置在 `packages/auth`
- Better Auth 通过 Drizzle adapter 访问 `packages/db`

### 受保护接口

- `packages/api/src/context.ts` 会先读取 session
- `packages/api/src/index.ts` 中的 `protectedProcedure` 依赖这个 session
- 前端受保护页面当前示例是 `/dashboard`
- 前端路由守卫不是唯一安全边界，后端接口也要过 `protectedProcedure`

## 工程规则

- 环境变量必须在 `packages/env` 中声明后再使用，不要直接新增未声明变量
- 共享组件优先复用 `packages/ui`，不要在 `apps/web` 重复实现基础 UI primitive
- 新增后端能力时，优先复用 `packages/api + packages/auth + packages/db` 的现有分层，不要把基础设施逻辑直接堆进 `apps/server`
- 根层脚本目前使用 `turbo` 简写；新增脚本时优先写成 `turbo run <task>`
- `packages/infra` 当前主要体现 web 部署，不要默认 server 部署路径已经完整存在

## 已知陷阱

- `apps/web/src/routeTree.gen.ts` 是生成文件，不要手工维护
- 登录态依赖 cookie；Better Auth 当前使用：
  - `sameSite: "none"`
  - `secure: true`
  - `httpOnly: true`
- 这意味着本地开发和生产环境都要特别注意 `BETTER_AUTH_URL`、`CORS_ORIGIN`、`VITE_SERVER_URL` 的配套关系
- `packages/api/src/context.ts` 当前返回 `auth: null`，说明上下文模型还有扩展空间，但现阶段不要假设这里已经承载更多能力
- `packages/db` 当前主要是认证相关 schema，不要误以为已经有完整业务数据层

## 高频入口文件

- `apps/web/src/main.tsx`
- `apps/web/src/routes/__root.tsx`
- `apps/web/src/utils/trpc.ts`
- `apps/web/src/lib/auth-client.ts`
- `apps/server/src/index.ts`
- `packages/api/src/index.ts`
- `packages/api/src/context.ts`
- `packages/api/src/routers/index.ts`
- `packages/auth/src/index.ts`
- `packages/db/src/index.ts`
- `packages/env/src/server.ts`
- `packages/env/src/web.ts`

## 工作方式建议

- 先判断改动属于前端、后端、认证、数据库、环境变量还是共享 UI
- 再选择正确落点，不要默认所有改动都应该直接落在 `apps/web` 或 `apps/server`
- 如果需要跨前后端联动，优先沿着 `packages/api` 这条共享类型链路扩展
- 如果涉及登录态、跨域或 cookie，优先检查 `packages/auth` 和 `packages/env`
