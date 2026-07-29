import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre completo."),
  company: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, "Ingresá tu email.")
    .email("Ingresá un email válido."),
  phone: z.string().trim().optional(),
  project: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Contanos un poco más sobre tu proyecto (mínimo 10 caracteres)."),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const PROJECT_TYPES = [
  "Sitio web / Landing page",
  "Sistema de gestión",
  "E-commerce",
  "Automatización de procesos",
  "CRM / ERP",
  "Inteligencia artificial",
  "Otro",
] as const

export const BUDGET_RANGES = [
  "Menos de USD 1.000",
  "USD 1.000 – 3.000",
  "USD 3.000 – 8.000",
  "Más de USD 8.000",
] as const
