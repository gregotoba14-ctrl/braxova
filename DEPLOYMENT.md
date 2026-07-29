# Deploying BRAXOVA to Netlify

This project stays a **real Next.js 15 App Router application** on Netlify.
It is not exported to static HTML — server rendering, `next/image`
optimization, the generated OG images, `sitemap.xml` and `robots.txt` all keep
working.

---

## 1. What you upload

Upload **the `braxova/` folder itself** as the root of the Git repository.

```
braxova/            <-- THIS is the repo root you push to GitHub
├── netlify.toml
├── next.config.ts
├── package.json
├── package-lock.json
├── public/
│   └── portafolio/gym-olimpo/{hero,actividades,planes}.jpg
├── src/
└── tsconfig.json
```

Do **not** upload the parent `cloud code/` folder — it contains an unrelated
project (`kine-erp`) and would confuse the build.

**Never commit these** (already handled by `.gitignore`):

| Folder / file          | Why |
|------------------------|-----|
| `node_modules/`        | Netlify runs `npm ci` itself |
| `.next/`               | Netlify builds this on their servers |
| `tsconfig.tsbuildinfo` | local TypeScript cache |
| `.env*`                | secrets |

> There is **no folder to drag-and-drop**. A Next.js app needs a build step on
> Netlify's side, so it must be connected via Git (or the CLI in §3).

---

## 2. Deploy via GitHub (recommended)

**Step 1 — push the repo**

From inside `braxova/`:

```bash
git init
git add .
git commit -m "BRAXOVA site ready for deploy"
git branch -M main
git remote add origin https://github.com/<your-user>/braxova.git
git push -u origin main
```

**Step 2 — create the Netlify site**

1. Go to <https://app.netlify.com> → **Add new site** → **Import an existing project**.
2. Choose **GitHub**, authorise it, pick the `braxova` repository.
3. Netlify reads `netlify.toml` and pre-fills everything:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** *(leave empty — the repo root is already the app)*
4. Click **Deploy**.

The first build takes ~2–4 minutes. When it finishes you get a URL like
`https://braxova-xyz123.netlify.app`.

**Step 3 — custom domain (when ready)**

1. **Site configuration → Domain management → Add a domain** → `braxova.com`.
2. Point your DNS at Netlify as instructed; HTTPS is issued automatically.
3. Then add the env var below and redeploy so SEO URLs are exact:

   **Site configuration → Environment variables → Add:**

   ```
   NEXT_PUBLIC_SITE_URL = https://braxova.com
   ```

   Until you set this, the site automatically falls back to Netlify's own URL,
   so `sitemap.xml`, `robots.txt` and the canonical/OG tags always point at a
   domain that actually serves the site.

---

## 3. Alternative: deploy from your machine (Netlify CLI)

```bash
npm install -g netlify-cli
cd braxova
netlify login
netlify init      # create/link the site
netlify deploy --build --prod
```

---

## 4. Why `netlify.toml` matters

`@netlify/plugin-nextjs` is what keeps this a real Next.js app: it serves the
prerendered App Router routes and runs `/_next/image` optimization on demand.

**Do not** add `output: "export"` to `next.config.ts`. That would disable image
optimization and reduce the site to a static dump — exactly what we're avoiding.

---

## 5. Post-deploy checklist

| Check | Expected |
|---|---|
| `/` | Home page loads |
| `/portafolio/gym-olimpo` | Case study with 3 real screenshots |
| `/portafolio/{centro-de-kinesiologia,salud-y-movimiento,plantar,sistema-inmobiliario}` | All load |
| `/sitemap.xml` | 6 URLs, correct domain |
| `/robots.txt` | Points at your sitemap |
| `/opengraph-image` | 1200×630 PNG |
| DevTools → Network on a screenshot | Served from `/_next/image`, type `image/webp` |
| Nonexistent URL | 404 page |

---

## 6. Known limitation — the contact form

The form validates fully (React Hook Form + Zod) but **does not send anything
yet**; submission resolves locally. To start receiving messages, replace the
timeout in `src/components/sections/contact.tsx` → `onSubmit()` with a real
call. Simplest option on Netlify is Netlify Forms; otherwise a Next.js route
handler posting to Resend/SendGrid.
