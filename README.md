# BRAXOVA

Sitio institucional de BRAXOVA — desarrollo web y sistemas inteligentes.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix)
- **Framer Motion** (reveals, micro-interacciones) y **GSAP** (parallax del hero, contadores)
- **Lenis** (scroll suave)
- **React Hook Form + Zod** (formulario de contacto)
- **Lucide** (iconos)

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo -> http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build de producción
npm run lint     # ESLint
npx tsc --noEmit # chequeo de tipos
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx              # metadata, JSON-LD, fuentes, header/footer
│   ├── page.tsx                # home (composición de secciones)
│   ├── sitemap.ts / robots.ts  # SEO generado
│   ├── icon / apple-icon / …   # favicon y OG generados con next/og
│   └── portafolio/[slug]/      # páginas de caso de éxito (SSG)
├── components/
│   ├── sections/               # una sección por archivo
│   ├── motion/                 # Reveal, Magnetic, GsapCounter
│   └── ui/                     # primitivos shadcn/ui
└── lib/
    ├── projects.ts             # datos de proyectos (fuente única)
    ├── data.ts                 # servicios, industrias, stack, FAQ…
    └── site.ts                 # URL base para SEO
```

## Editar contenido

- **Proyectos / casos de éxito** → `src/lib/projects.ts`
- **Servicios, industrias, tecnologías, FAQ, testimonios** → `src/lib/data.ts`
- **Capturas de proyectos** → `public/portafolio/<slug>/`

Para sumar imágenes reales a un proyecto, agregá los archivos en
`public/portafolio/<slug>/` y completá `images` y `gallery` en `projects.ts`.
Mientras no haya capturas reales, el proyecto muestra un placeholder de marca
(nunca una interfaz inventada).

## Deploy

Ver [DEPLOYMENT.md](./DEPLOYMENT.md).
