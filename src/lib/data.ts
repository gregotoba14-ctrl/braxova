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
    title: "Dashboards",
    desc: "Paneles a medida que transforman tus datos en decisiones claras, en tiempo real.",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    desc: "Infraestructura moderna, escalable y segura para que tu sistema crezca sin fricción.",
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
    desc: "Automatizamos tareas repetitivas para que tu equipo se enfoque en lo que importa.",
  },
  {
    icon: TrendingUp,
    title: "Aumentá tus ventas",
    desc: "Sitios y sistemas diseñados para convertir visitas en clientes, no solo para verse bien.",
  },
  {
    icon: Zap,
    title: "Automatizá procesos",
    desc: "Conectamos tus herramientas para eliminar trabajo manual y reducir errores humanos.",
  },
  {
    icon: Code2,
    title: "Arquitectura moderna",
    desc: "Tecnología actual, mantenible y lista para crecer sin reescrituras costosas.",
  },
  {
    icon: Compass,
    title: "Posicionamiento SEO",
    desc: "Estructura técnica pensada para que te encuentren en Google desde el día uno.",
  },
  {
    icon: BarChart3,
    title: "Crece con tu negocio",
    desc: "Sistemas preparados para más usuarios, más datos y más operaciones sin fricción.",
  },
  {
    icon: Shield,
    title: "Seguridad primero",
    desc: "Buenas prácticas y estándares que protegen tu información y la de tus clientes.",
  },
  {
    icon: Cloud,
    title: "Listo para la nube",
    desc: "Infraestructura cloud moderna, disponible y accesible desde cualquier lugar.",
  },
]

export type ProcessStep = {
  n: string
  title: string
  desc: string
}

export const PROCESS: ProcessStep[] = [
  { n: "01", title: "Discovery", desc: "Entendemos tu negocio, objetivos y usuarios antes de escribir una sola línea de código." },
  { n: "02", title: "Estrategia", desc: "Definimos alcance, arquitectura y plan de trabajo con entregas claras." },
  { n: "03", title: "Diseño", desc: "Prototipamos la experiencia visual hasta lograr un producto que enamore." },
  { n: "04", title: "Desarrollo", desc: "Construimos con estándares profesionales, en sprints cortos y visibles." },
  { n: "05", title: "Testing", desc: "Probamos a fondo funcionalidad, rendimiento y seguridad antes de lanzar." },
  { n: "06", title: "Lanzamiento", desc: "Publicamos, monitoreamos y acompañamos el crecimiento post-lanzamiento." },
]

export type Testimonial = {
  initials: string
  name: string
  role: string
  text: string
  gradient: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MG",
    name: "Martina Gómez",
    role: "Directora, Centro de Kinesiología",
    text: "BRAXOVA transformó por completo la forma en que gestionamos turnos y pacientes. El sistema es intuitivo y el soporte, excelente.",
    gradient: "linear-gradient(155deg,#2563eb,#1d4ed8)",
  },
  {
    initials: "RF",
    name: "Rodrigo Fernández",
    role: "Dueño, Gym Olimpo",
    text: "Ahora sabemos exactamente qué socios están al día y cuáles no. Nos ordenó la operación de punta a punta.",
    gradient: "linear-gradient(155deg,#7c3aed,#5b21b6)",
  },
  {
    initials: "CL",
    name: "Camila López",
    role: "Gerente, Sistema Inmobiliario",
    text: "Automatizaron procesos que nos llevaban horas cada semana. Hoy corren solos y sin errores.",
    gradient: "linear-gradient(155deg,#059669,#047857)",
  },
]

export type FaqItem = {
  q: string
  a: string
}

export const FAQ: FaqItem[] = [
  {
    q: "¿Cuánto tiempo toma desarrollar un proyecto?",
    a: "Depende del alcance: una landing page puede estar lista en 1-2 semanas, mientras que un sistema de gestión completo suele tomar entre 4 y 10 semanas. En la etapa de Discovery te damos un cronograma concreto.",
  },
  {
    q: "¿Qué tecnologías utilizan?",
    a: "Trabajamos con stacks modernos como Next.js, React, Node.js, PostgreSQL y servicios cloud como Supabase, Vercel y Netlify, eligiendo en cada caso la tecnología más adecuada para tu proyecto.",
  },
  {
    q: "¿Ofrecen soporte después del lanzamiento?",
    a: "Sí. Todos los proyectos incluyen un período de soporte post-lanzamiento, y ofrecemos planes de mantenimiento continuo para quienes necesitan acompañamiento a largo plazo.",
  },
  {
    q: "¿El sitio o sistema me pertenece por completo?",
    a: "Sí, una vez finalizado el proyecto y realizado el pago correspondiente, el código y los activos son 100% tuyos, sin ataduras ni licencias ocultas.",
  },
  {
    q: "¿Trabajan con empresas fuera de Argentina?",
    a: "Sí, trabajamos de forma remota con clientes de toda Latinoamérica y otras regiones, coordinando reuniones y entregas según tu huso horario.",
  },
  {
    q: "¿Cómo se maneja el presupuesto y los pagos?",
    a: "Definimos un presupuesto cerrado antes de comenzar, dividido en hitos de pago asociados a entregas concretas, para que siempre sepas en qué etapa está tu inversión.",
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
  { title: "Código limpio", desc: "Legible y fácil de retomar por cualquier equipo." },
  { title: "Escalable", desc: "Preparado para más usuarios y más datos." },
  { title: "Documentado", desc: "Entregamos el proyecto explicado, no una caja negra." },
  { title: "SEO técnico", desc: "HTML semántico y metadatos desde la base." },
  { title: "Alto rendimiento", desc: "Optimizado para cargar rápido de verdad." },
  { title: "Seguridad", desc: "Buenas prácticas y dependencias al día." },
  { title: "Responsive", desc: "Probado en mobile, tablet y desktop." },
  { title: "Mantenimiento", desc: "Pensado para evolucionar sin reescribir todo." },
] as const

// Flat list, rendered as a centered wrap — avoids the orphan row a rigid
// grid would leave with an odd count.
export const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node",
  "Laravel",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Docker",
  "AWS",
] as const

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué nosotros" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
] as const
