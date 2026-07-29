import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { LenisProvider } from "@/components/lenis-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
})

const TITLE = "BRAXOVA — Desarrollo Web & Sistemas Inteligentes"
const DESCRIPTION =
  "BRAXOVA diseña y desarrolla sitios web, sistemas de gestión y automatizaciones inteligentes que ayudan a empresas a vender más, ahorrar tiempo y escalar. Presupuesto sin cargo."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · BRAXOVA",
  },
  description: DESCRIPTION,
  keywords: [
    "desarrollo web",
    "sistemas de gestión",
    "automatización",
    "CRM",
    "ERP",
    "e-commerce",
    "inteligencia artificial",
    "dashboards",
    "SaaS",
    "BRAXOVA",
  ],
  authors: [{ name: "BRAXOVA" }],
  creator: "BRAXOVA",
  publisher: "BRAXOVA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "BRAXOVA",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BRAXOVA",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  areaServed: "AR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Miguel de Tucumán",
    addressCountry: "AR",
  },
  email: "hola@braxova.com",
  telephone: "+5493810000000",
  sameAs: [],
  makesOffer: [
    "Desarrollo Web",
    "Sistemas de Gestión",
    "Automatización",
    "E-commerce",
    "Inteligencia Artificial",
    "Landing Pages",
    "Dashboards",
    "Soluciones Cloud",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <LenisProvider>
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="bg-noise" />
            <div className="bg-grid" />
          </div>

          <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:fixed focus:left-0 focus:top-0 focus:z-100 focus:rounded-br-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-white"
          >
            Saltar al contenido
          </a>

          <SiteHeader />
          {children}
          <SiteFooter />
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  )
}
