/**
 * Canonical base URL for metadata, sitemap and robots.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this once the custom domain is live.
 *  2. URL — injected automatically by Netlify with the site's primary URL,
 *     so previews and the default *.netlify.app domain stay self-consistent
 *     instead of advertising a domain that isn't serving the build yet.
 *  3. The production domain, as a final fallback for local builds.
 */
const FALLBACK_URL = "https://braxova.com"

function resolveSiteUrl(): string {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? FALLBACK_URL
  // Trailing slashes break `new URL(path, base)` joins downstream.
  return candidate.replace(/\/+$/, "")
}

export const SITE_URL = resolveSiteUrl()
