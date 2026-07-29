// Shared brand glyphs — used by the footer and the contact section, so they
// live in one place instead of being duplicated per component.

export function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M4.2 6.5h2.6v9.2H4.2V6.5Zm1.3-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8.7 6.5h2.5v1.3h.04c.35-.66 1.2-1.35 2.47-1.35 2.64 0 3.13 1.74 3.13 4v5.22h-2.6v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.71H8.7V6.5Z" />
    </svg>
  )
}

export function InstagramGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.1" cy="5.9" r="0.9" fill="currentColor" />
    </svg>
  )
}

export function XGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
      <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function WhatsappGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 3a7 7 0 0 0-6 10.6L3 17l3.5-1a7 7 0 1 0 3.5-13Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7.3 7.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .4l-.4.5c-.1.2-.2.3-.1.5.3.5.8 1 1.3 1.4.5.4 1 .6 1.2.7.2.1.3.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.1.4.3.1.2.1.9-.2 1.3-.3.4-1.1.9-1.9.9-.7 0-2.3-.3-4-1.9-1.8-1.7-2.2-3-2.2-3.3 0-.3.2-.9.4-1.2Z"
        fill="currentColor"
      />
    </svg>
  )
}
