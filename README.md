# 茂原公園ガイド

茂原公園を歩くための日文单语旅行指南。Astro、Tailwind CSS、TypeScript 与静态数据构建，部署目标为 Cloudflare Workers Static Assets。

## 本地开发

```bash
pnpm install
pnpm dev
```

生产检查与构建：

```bash
pnpm build
```

Cloudflare 配置干运行：

```bash
pnpm wrangler deploy --dry-run
```

确认 Cloudflare 账户和项目名后部署：

```bash
pnpm deploy
```

## 内容维护

- 公园与停车信息：`src/data/park.ts`
- 散步路线：`src/data/routes.ts`
- 花历与 FAQ：`src/data/seasons.ts`
- 当季状态：首页 `#today` 模块

网站没有数据库、登录或 CMS；内容更新后重新构建部署即可。路线与游览清单仅保存在访客浏览器的 `localStorage`。

## 照片授权

页面照片均为茂原公园实拍，来源及许可链接已在网站页脚逐项列出。源文件位于 `src/assets/photos/`，构建时由 Astro 输出响应式 WebP。
