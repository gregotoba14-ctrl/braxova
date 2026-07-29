export type DeviceType = "macbook" | "ipad" | "iphone" | "desktop"

// A string key rather than the icon component itself: Project objects flow
// from server components (detail pages) into DeviceFrame, a Client
// Component — React can't serialize a component reference across that
// boundary, only plain data. The key is resolved to an actual icon inside
// the client tree (see industry-icons.tsx).
export type IndustryIconKey =
  | "dumbbell"
  | "heart-pulse"
  | "stethoscope"
  | "footprints"
  | "building"

export type ProjectImages = {
  desktop?: string
  tablet?: string
  mobile?: string
}

export type GalleryImage = {
  src: string
  alt: string
  label: string
}

export type Project = {
  slug: string
  name: string
  category:
    | "Landing Page"
    | "Corporate Website"
    | "Management System"
    | "Dashboard"
    | "Automation"
    | "Real Estate"
    | "Medical"
    | "Gym"
  shortDescription: string
  description: string
  technologies: string[]
  /** Brand gradient stops used for the placeholder frame until real
   *  screenshots are supplied — never rendered as a fake product UI. */
  brand: { c1: string; c2: string }
  device: DeviceType
  challenge: string
  solution: string
  results: string[]
  images?: ProjectImages
  /** Real screenshots for the case-study page gallery. When present,
   *  the detail page shows these inside browser mockups instead of the
   *  device-frame placeholder trio. */
  gallery?: GalleryImage[]
  /** Shown on the device placeholder so the industry reads instantly,
   *  even before a real screenshot is supplied. */
  industryIcon: IndustryIconKey
  industryLabel: string
  /** What was actually built, shown as badges on the portfolio card —
   *  kept honest per project, not a fixed "Landing/Dashboard/Mobile" set
   *  applied everywhere. */
  deliverables: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: "centro-de-kinesiologia",
    name: "Centro de Kinesiología",
    category: "Management System",
    shortDescription:
      "Sistema integral de gestión clínica: turnos, historias clínicas, paquetes de sesiones y facturación en un solo lugar.",
    description:
      "Plataforma de gestión a medida para un centro de kinesiología, con más de una decena de módulos operativos que reemplazaron planillas y procesos manuales por un sistema centralizado en la nube.",
    technologies: ["React", "Supabase", "Netlify"],
    brand: { c1: "#1d3a6e", c2: "#0b1120" },
    device: "macbook",
    industryIcon: "heart-pulse",
    industryLabel: "Salud",
    deliverables: ["Sistema de gestión", "Panel administrativo", "Mobile responsive"],
    challenge:
      "El centro gestionaba turnos, historias clínicas y pagos en planillas separadas, lo que generaba errores, pérdida de información y horas de trabajo administrativo cada semana.",
    solution:
      "Diseñamos y desarrollamos un sistema a medida con más de 13 módulos: turnos, historia clínica, paquetes de sesiones, caja, usuarios, documentos y evolución de pacientes con seguimiento fotográfico, todo en una sola plataforma.",
    results: [
      "13+ módulos operativos en producción",
      "Horas administrativas ahorradas cada semana",
      "Cero planillas, información centralizada y auditable",
    ],
  },
  {
    slug: "gym-olimpo",
    name: "Gym Olimpo",
    category: "Gym",
    shortDescription:
      "Plataforma de gestión para gimnasio: socios, membresías, accesos y pagos en un mismo panel.",
    description:
      "Sistema de administración pensado para la operación diaria de un gimnasio: altas de socios, control de membresías vencidas y seguimiento de pagos, con un panel simple para el personal de recepción.",
    technologies: ["Next.js", "PostgreSQL", "Tailwind"],
    brand: { c1: "#3a2a1e", c2: "#0b1120" },
    device: "desktop",
    industryIcon: "dumbbell",
    industryLabel: "Gimnasio",
    deliverables: ["Landing page", "Panel de gestión", "Mobile responsive"],
    challenge:
      "El control de socios y vencimientos de membresías se hacía a mano, dificultando saber quién estaba al día y generando pérdidas por membresías no renovadas a tiempo.",
    solution:
      "Construimos un panel de gestión con alta de socios, estado de membresía en tiempo real y alertas de vencimiento, agilizando la operación diaria del staff.",
    results: [
      "Gestión de socios centralizada",
      "Visibilidad inmediata de membresías vencidas",
      "Menor pérdida de ingresos por renovaciones",
    ],
    images: {
      desktop: "/portafolio/gym-olimpo/hero.jpg",
    },
    gallery: [
      {
        src: "/portafolio/gym-olimpo/hero.jpg",
        alt: "Página de inicio del sitio de Gym Olimpo",
        label: "Inicio",
      },
      {
        src: "/portafolio/gym-olimpo/actividades.jpg",
        alt: "Sección de actividades del sitio de Gym Olimpo",
        label: "Actividades",
      },
      {
        src: "/portafolio/gym-olimpo/planes.jpg",
        alt: "Sección de planes y precios del sitio de Gym Olimpo",
        label: "Planes",
      },
    ],
  },
  {
    slug: "salud-y-movimiento",
    name: "Salud & Movimiento",
    category: "Medical",
    shortDescription:
      "Sitio corporativo para un centro de salud, pensado para transmitir confianza y facilitar el contacto.",
    description:
      "Sitio web institucional para un centro de salud y rehabilitación, con foco en presentar los servicios de forma clara y facilitar que los pacientes agenden una consulta.",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    brand: { c1: "#1e3a2e", c2: "#0b1120" },
    device: "iphone",
    industryIcon: "stethoscope",
    industryLabel: "Salud",
    deliverables: ["Sitio corporativo", "Mobile responsive"],
    challenge:
      "El centro no tenía presencia digital propia y dependía únicamente de redes sociales, perdiendo pacientes que buscaban información antes de decidirse a consultar.",
    solution:
      "Diseñamos un sitio institucional rápido y mobile-first, con información clara de servicios, profesionales y un canal directo de contacto para agendar turnos.",
    results: [
      "Presencia digital profesional propia",
      "Más consultas iniciadas desde el sitio",
      "Experiencia optimizada para mobile",
    ],
  },
  {
    slug: "plantar",
    name: "Plantar",
    category: "Landing Page",
    shortDescription:
      "Landing page de alto impacto para presentar un servicio de salud podal y captar consultas.",
    description:
      "Landing page enfocada en conversión para un servicio especializado en salud podal, con un mensaje directo y un flujo de contacto simplificado.",
    technologies: ["Next.js", "Tailwind", "React Hook Form"],
    brand: { c1: "#331e3a", c2: "#0b1120" },
    device: "ipad",
    industryIcon: "footprints",
    industryLabel: "Podología",
    deliverables: ["Landing page", "Mobile responsive"],
    challenge:
      "Se necesitaba una página capaz de explicar un servicio poco conocido y convertir visitas en consultas reales, sin fricción en el proceso de contacto.",
    solution:
      "Creamos una landing enfocada en un único objetivo de conversión, con mensajes claros sobre el servicio y un formulario de contacto simple y rápido de completar.",
    results: [
      "Página enfocada en un solo objetivo de conversión",
      "Formulario de contacto de alta finalización",
      "Carga rápida en conexiones móviles",
    ],
  },
  {
    slug: "sistema-inmobiliario",
    name: "Sistema Inmobiliario",
    category: "Real Estate",
    shortDescription:
      "Plataforma de gestión inmobiliaria para propiedades, clientes y seguimiento de operaciones.",
    description:
      "Sistema de gestión para una inmobiliaria, centralizando la carga de propiedades, el seguimiento de clientes interesados y el estado de cada operación en curso.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    brand: { c1: "#3a2a2a", c2: "#0b1120" },
    device: "ipad",
    industryIcon: "building",
    industryLabel: "Inmobiliaria",
    deliverables: ["Sistema de gestión", "Panel administrativo"],
    challenge:
      "El seguimiento de propiedades y clientes se manejaba entre planillas y mensajes sueltos, dificultando saber en qué estado estaba cada operación.",
    solution:
      "Desarrollamos una plataforma centralizada para cargar propiedades, asociar clientes interesados y llevar el seguimiento de cada operación de principio a fin.",
    results: [
      "Propiedades y clientes en una sola plataforma",
      "Seguimiento claro del estado de cada operación",
      "Menos oportunidades perdidas por desorganización",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
