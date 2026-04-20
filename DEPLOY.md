# MIRASUIT Website Deploy Guide

## One-Command Deploy (Vercel)

```bash
cd website/mirasuit-nextjs
vercel login           # One-time auth (opens browser)
vercel --prod          # Deploy to production
```

Expected output: `https://mirasuit.vercel.app`

## Alternative: Cloudflare Pages

```bash
wrangler login         # One-time auth
wrangler pages deploy .next/static --project-name=mirasuit
```

## Alternative: Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.next/static
```

## Build Output

```
.next/static/          # 712KB total static assets
.next/server/          # Serverless functions (Vercel)
```

## A/B Test Routes

| Route | Version | URL |
|-------|---------|-----|
| `/` | A (Control) | hero: 意式定制西装的艺术 |
| `/page-b` | B (Treatment) | hero: AI 定制，3 分钟预见未来的你 |

## Pages Built (9)

- `/` — Homepage (Variant A)
- `/page-b` — Homepage (Variant B)
- `/about` — 品牌故事 + 匠人团队
- `/b2b` — B2B 合作 + 定价
- `/toc` — 定制流程 + 面料
- `/contact` — 联系页面
- `/_not-found` — 404

## Local Dev

```bash
cd website/mirasuit-nextjs
npm run dev     # Currently running on port 3003
```
