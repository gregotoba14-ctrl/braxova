import type { LucideIcon } from "lucide-react"
import {
  Code2,
  Settings2,
  Zap,
  ShoppingCart,
  Sparkles,
  LayoutTemplate,
  BarChart3,
  Cloud,
  Shield,
  Compass,
  Clock,
  TrendingUp,
  HeartPulse,
  Dumbbell,
  Briefcase,
  Sprout,
  Building2,
  Puzzle,
  MessageCircle,
  Smartphone,
  Headset,
} from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  desc: string
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    desc: "Sitios y aplicaciones a medida, rápidos, seguros y pensados para convertir visitas en clientes.",
  },
  {
    icon: Settings2,
    title: "Sistemas de Gestión",
    desc: "Plataformas internas para ordenar operaciones, stock, turnos, pacientes o cualquier proceso clave.",
  },
  {
    icon: Zap,
    title: "Automatización",
    desc: "Eliminamos tareas repetitivas conectando tus herramientas y flujos de trabajo entre sí.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Tiendas online de alto rendimiento con pagos, stock y checkout optimizados para vender más.",
  },
  {
    icon: Sparkles,
    title: "Inteligencia Artificial",
    desc: "Asistentes, chatbots y modelos aplicados que agregan valor real a tu producto o negocio.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "Páginas de alto impacto diseñadas para campañas, lanzamientos y generación de leads.",
  },
  {
    icon: BarChart3,
    title: "Datos y Reportes",
    desc: "Información clara y centralizada para entender tu negocio y tomar mejores decisiones.",
  },
  {
    icon: Cloud,
    title: "Soporte y Escalabilidad",
    desc: "Soluciones preparadas para funcionar de forma segura, estable y crecer junto a tu negocio.",
  },
]

export type Benefit = {
  icon: LucideIcon
  title: string
  desc: string
}

// Framed around what the client gets, not what BRAXOVA is.
export const BENEFITS: Benefit[] = [
  {
    icon: Clock,
    title: "Ahorrá tiempo real",
    desc: "Reducí tareas repetitivas y dedicá más tiempo a lo que realmente importa.",
  },
  {
    icon: TrendingUp,
    title: "Aumentá tus ventas",
    desc: "Sitios y sistemas pensados para convertir más oportunidades en clientes.",
  },
  {
    icon: Zap,
    title: "Automatizá procesos",
    desc: "Conectá tareas y procesos para trabajar de forma más simple y reducir errores.",
  },
  {
    icon: Code2,
    title: "Todo más organizado",
    desc: "Centralizá información, tareas y procesos para tener mayor control de tu negocio.",
  },
  {
    icon: Compass,
    title: "Mejor presencia online",
    desc: "Una presencia digital profesional, rápida y preparada para que tus clientes te encuentren.",
  },
  {
    icon: BarChart3,
    title: "Crece con tu negocio",
    desc: "Soluciones preparadas para acompañarte a medida que sumás clientes, operaciones y nuevas necesidades.",
  },
  {
    icon: Shield,
    title: "Información protegida",
    desc: "Buenas prácticas para cuidar la información de tu negocio y de tus clientes.",
  },
  {
    icon: Cloud,
    title: "Acompañamiento cercano",
    desc: "Comunicación directa durante el proyecto y soporte para que la solución siga funcionando como necesitás.",
  },
]

export type ProcessStep = {
  n: string
  title: string
  desc: string
}

export const PROCESS: ProcessStep[] = [
  { n: "01", title: "Descubrimiento", desc: "Entendemos tu negocio, tus necesidades y qué problema tenemos que resolver." },
  { n: "02", title: "Estrategia", desc: "Definimos el alcance, las prioridades y el camino más adecuado para tu proyecto." },
  { n: "03", title: "Diseño", desc: "Diseñamos la experiencia y la interfaz antes de avanzar con el desarrollo." },
  { n: "04", title: "Desarrollo", desc: "Convertimos el diseño en una solución funcional, rápida y preparada para crecer." },
  { n: "05", title: "Pruebas", desc: "Revisamos funcionamiento, rendimiento y experiencia antes de publicar." },
  { n: "06", title: "Lanzamiento", desc: "Publicamos el proyecto y verificamos que todo funcione correctamente." },
]

// Reemplaza la sección de testimonios (eliminada por no ser verificable:
// no había clientes reales citados). Beneficios verificables del servicio
// en sí, no opiniones de terceros ni resultados no medidos.
export type WorkingCommitment = {
  icon: LucideIcon
  title: string
  desc: string
}

export const WORKING_COMMITMENTS: WorkingCommitment[] = [
  {
    icon: Puzzle,
    title: "Una solución pensada para tu negocio",
    desc: "Entendemos cómo trabajás y desarrollamos una solución adaptada a tus necesidades reales.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    desc: "Hablás directamente con quien desarrolla tu proyecto, con un seguimiento claro durante todo el proceso.",
  },
  {
    icon: Smartphone,
    title: "Diseño pensado para tus usuarios",
    desc: "Creamos experiencias simples, modernas y fáciles de usar en cualquier dispositivo.",
  },
  {
    icon: Headset,
    title: "Acompañamiento después del lanzamiento",
    desc: "Después de publicar, podemos seguir acompañando la evolución, los ajustes y las mejoras del proyecto.",
  },
]

export type FaqItem = {
  q: string
  a: string
}

export const FAQ: FaqItem[] = [
  {
    q: "¿Cuánto tiempo toma desarrollar un proyecto?",
    a: "El tiempo depende del tipo de proyecto, su alcance y funcionalidades. Antes de comenzar definimos las etapas y una estimación clara de los tiempos de desarrollo.",
  },
  {
    q: "¿Qué tecnologías utilizan?",
    a: "Trabajamos con tecnologías como Next.js, React, TypeScript, Tailwind, Node, PostgreSQL, Supabase y Netlify, eligiendo las herramientas adecuadas según las necesidades de cada proyecto.",
  },
  {
    q: "¿Ofrecen soporte después del lanzamiento?",
    a: "Sí. Podemos acompañarte después del lanzamiento con ajustes, mejoras y mantenimiento según las necesidades del proyecto.",
  },
  {
    q: "¿El sitio o sistema me pertenece por completo?",
    a: "Las condiciones de entrega, acceso al código y propiedad del proyecto se definen claramente antes de comenzar, para que sepas desde el primer día qué incluye la entrega.",
  },
  {
    q: "¿Trabajan con empresas fuera de Argentina?",
    a: "Sí. Podemos trabajar de forma remota con empresas y profesionales de distintas ubicaciones, coordinando reuniones y entregas de manera online.",
  },
  {
    q: "¿Cómo se maneja el presupuesto y los pagos?",
    a: "Antes de comenzar definimos el alcance, presupuesto y forma de pago del proyecto. Las condiciones se acuerdan de manera clara según el tipo y tamaño del desarrollo.",
  },
]

export type Industry = {
  icon: LucideIcon
  label: string
  desc: string
}

export const INDUSTRIES: Industry[] = [
  {
    icon: HeartPulse,
    label: "Salud",
    desc: "Clínicas, consultorios y centros de rehabilitación.",
  },
  {
    icon: Dumbbell,
    label: "Fitness",
    desc: "Gimnasios, estudios y entrenadores personales.",
  },
  {
    icon: Briefcase,
    label: "Empresas",
    desc: "Pymes y empresas de servicios de todo tipo.",
  },
  {
    icon: Sprout,
    label: "Agro",
    desc: "Productores y empresas agropecuarias.",
  },
  {
    icon: Building2,
    label: "Inmobiliarias",
    desc: "Inmobiliarias, desarrolladoras y corredores.",
  },
  {
    icon: ShoppingCart,
    label: "Ecommerce",
    desc: "Tiendas online y marcas que venden directo.",
  },
]

// Engineering standards — deliberately phrased as build practices, not
// marketing claims, so this section reads differently from BENEFITS
// (which is framed around client outcomes).
export const ENGINEERING_STANDARDS = [
  { title: "Código limpio", desc: "Desarrollos ordenados y preparados para evolucionar." },
  { title: "Escalable", desc: "Pensado para acompañar el crecimiento de tu negocio." },
  { title: "Documentado", desc: "Una estructura clara para facilitar futuras mejoras." },
  { title: "SEO técnico", desc: "Buenas bases técnicas para mejorar la visibilidad en buscadores." },
  { title: "Alto rendimiento", desc: "Optimizamos cada proyecto para ofrecer una experiencia rápida y fluida." },
  { title: "Seguridad", desc: "Aplicamos buenas prácticas para proteger tu proyecto y su información." },
  { title: "Responsive", desc: "Experiencias adaptadas a celular, tablet y computadora." },
  { title: "Mantenimiento", desc: "Construido para poder actualizarse y mejorar con el tiempo." },
] as const

// Flat list, rendered as a centered wrap — avoids the orphan row a rigid
// grid would leave with an odd count.
export const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node",
  "PostgreSQL",
  "Supabase",
  "Netlify",
] as const

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué nosotros" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
] as const
