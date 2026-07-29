import Link from "next/link"

import { BraxovaMark } from "@/components/brand-mark"
import {
  LinkedinGlyph,
  InstagramGlyph,
  XGlyph,
  WhatsappGlyph,
} from "@/components/social-icons"
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/contact"

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
  { label: "Por qué BRAXOVA", href: "#por-que" },
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
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp"
              >
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  {PHONE_DISPLAY}
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
