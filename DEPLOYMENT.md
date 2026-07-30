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
| **Site configuration → Forms** | `contacto-braxova` listed after the first deploy |
| Submit the live contact form | Appears within seconds under **Forms → contacto-braxova** |

### Reading form submissions

1. Netlify dashboard → your site → **Forms** in the left sidebar.
2. Click **contacto-braxova** → each row is one submission, with all fields.
3. **Forms → Settings and usage → Form notifications** → add an email
   notification (or Slack/webhook) so new consultas land in
   `gregorio.tobares@icloud.com` instead of requiring a manual check.

If the form isn't listed after deploying: open **Deploys → (latest) → Deploy
log** and search for "forms" — Netlify logs how many it detected during the
build. It only registers forms it can find in the build's HTML output, so a
missing form usually means the build didn't run cleanly (rerun `npm run
build` locally first to confirm it's green).

---

## 6. The contact form (Netlify Forms)

The form (`src/components/sections/contact.tsx`) posts real submissions to
**Netlify Forms** — no third-party service, no API keys. It only works once
deployed on Netlify; see §7 for how to check it.

- Form name: `contacto-braxova`
- Fields: nombre, empresa (opcional), email, teléfono (opcional), tipo de
  proyecto, presupuesto, mensaje
- Spam protection: honeypot field (`bot-field`), invisible and
  `aria-hidden` so it never traps a screen-reader user
- States: idle / submitting / success / error, announced via `aria-live`;
  on error the typed data is preserved (no reset) and a WhatsApp link is
  offered as a fallback

### How Netlify actually registers this form

`@netlify/plugin-nextjs` v5 (the OpenNext-based adapter this project uses)
**stopped scanning the app's rendered/prerendered pages for `<form>` tags**.
A form embedded only inside a React component — even one Next prerenders to
HTML at build time — is invisible to Netlify's form registration, and the
build now fails outright if it finds `data-netlify` attributes in React
output with no static counterpart to back them.

The fix, straight from the adapter's own docs
([opennext.js.org/netlify/forms](https://opennext.js.org/netlify/forms)):
ship a real, untouched static HTML file. That's [`public/__forms.html`](./public/__forms.html)
— it's copied verbatim into the deploy output (`.netlify/static/`), which is
what Netlify's form scanner actually reads. It's never linked from the site
and no visitor ever sees it.

The visible React form submits with `fetch("/__forms.html", { method:
"POST", ... })`, matched to the registered form via the `form-name` field.
Field names in three places have to stay in sync — the visible form, the
`fetch()` body, and `public/__forms.html` — if you ever add or rename a
field, update all three.

**Netlify won't process the submission until you deploy** — `next dev` and
`next start` have no Netlify Forms backend, so a local submit attempt
correctly shows the error state (the POST reaches a static file with no
handler). That's expected, not a bug; it's also why the WhatsApp fallback
matters — it's the one contact path that works everywhere, deployed or not.
