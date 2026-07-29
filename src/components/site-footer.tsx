import Link from "next/link"

import { BraxovaMark } from "@/components/brand-mark"

function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M4.2 6.5h2.6v9.2H4.2V6.5Zm1.3-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8.7 6.5h2.5v1.3h.04c.35-.66 1.2-1.35 2.47-1.35 2.64 0 3.13 1.74 3.13 4v5.22h-2.6v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.71H8.7V6.5Z" />
    </svg>
  )
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.1" cy="5.9" r="0.9" fill="currentColor" />
    </svg>
  )
}

function XGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
      <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function WhatsappGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
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

const SERVICE_LINKS = [
  "Desarrollo Web",
  "Sistemas de Gestión",
  "Automatización",
  "E-commerce",
  "Inteligencia Artificial",
]

const COMPANY_LINKS = [
  { label: "Portafolio", href: "#portafolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas frecuentes", href: "#faq" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="#top" className="mb-4 flex items-center gap-2.5">
              <BraxovaMark size={28} />
              <span className="font-display text-[18px] font-extrabold tracking-tight">
                BRAXOVA
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Desarrollo web y sistemas inteligentes para empresas que
              quieren crecer.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <LinkedinGlyph />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <InstagramGlyph />
              </a>
              <a href="#" className="social-icon" aria-label="X (Twitter)">
                <XGlyph />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <WhatsappGlyph />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Servicios</h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="#servicios"
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Compañía</h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contacto</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:hola@braxova.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  hola@braxova.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5493810000000"
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  +54 9 381 000-0000
                </a>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  Solicitar presupuesto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground/70">
            © 2026 BRAXOVA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground/70">
            <Link href="#" className="hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
