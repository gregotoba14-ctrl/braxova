"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Reveal } from "@/components/motion/reveal"
import { WhatsappGlyph } from "@/components/social-icons"
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  LOCATION_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact"
import {
  contactSchema,
  PROJECT_TYPES,
  BUDGET_RANGES,
  type ContactFormValues,
} from "@/lib/contact-schema"

// Netlify registers this form from public/__forms.html at deploy time (see
// that file for why — @netlify/plugin-nextjs v5 no longer scans React's
// prerendered output) and matches submissions to it via the "form-name"
// field below.
const NETLIFY_FORM_NAME = "contacto-braxova"

/** Netlify Forms expects a classic urlencoded POST body, not JSON. */
function encodeFormData(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&")
}

type SubmitStatus = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [status, setStatus] = React.useState<SubmitStatus>("idle")

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      project: "",
      budget: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    // Guard against a second submit landing while the first is in flight
    // (belt-and-suspenders alongside the disabled button below).
    if (status === "submitting") return

    setStatus("submitting")
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": NETLIFY_FORM_NAME,
          name: values.name,
          company: values.company ?? "",
          email: values.email,
          phone: values.phone ?? "",
          project: values.project ?? "",
          budget: values.budget ?? "",
          message: values.message,
        }),
      })

      if (!response.ok) {
        throw new Error(`Netlify respondió con status ${response.status}`)
      }

      setStatus("success")
      form.reset()
    } catch {
      // Deliberately keep whatever the visitor typed — form.reset() is only
      // called on the success path above, so a failed submit never wipes
      // their message.
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-28 lg:py-36">
      <div className="hero-glow hero-glow-bottom" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Contacto</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                Construyamos algo increíble juntos
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Contanos sobre tu proyecto y te ayudamos a definir la mejor
                solución para tu negocio.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-5">
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-row">
                  <span className="contact-icon">
                    <Mail className="size-4.5" strokeWidth={1.7} />
                  </span>
                  {CONTACT_EMAIL}
                </a>
                <a href={`tel:${PHONE_E164}`} className="contact-row">
                  <span className="contact-icon">
                    <Phone className="size-4.5" strokeWidth={1.7} />
                  </span>
                  {PHONE_DISPLAY}
                </a>
                <div className="contact-row">
                  <span className="contact-icon">
                    <MapPin className="size-4.5" strokeWidth={1.7} />
                  </span>
                  {LOCATION_DISPLAY} · Remoto para el mundo
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 border-t border-white/[0.07] pt-8">
                <p className="mb-4 text-sm font-medium text-muted-foreground">
                  ¿Preferís hablar directo?
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 justify-center gap-2 rounded-xl border-white/12 bg-white/4 hover:bg-white/8"
                  >
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsappGlyph className="size-4" />
                      Hablar por WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="h-11 justify-center gap-2 rounded-xl hover:bg-white/8"
                  >
                    <a href={`mailto:${CONTACT_EMAIL}`}>
                      <Mail className="size-4" />
                      Enviar un correo
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-5 sm:grid-cols-2"
                  name={NETLIFY_FORM_NAME}
                  method="POST"
                  noValidate
                >
                  {/* No data-netlify attributes here on purpose: this form is
                      always submitted via the fetch() in onSubmit, never a
                      native browser POST, so those attributes would do
                      nothing except risk confusing @netlify/plugin-nextjs's
                      build-time check. The actual Netlify registration —
                      including the honeypot wiring — comes from
                      public/__forms.html; "form-name" below just has to
                      match it so submissions land against the right form. */}
                  <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />

                  {/* Honeypot: real visitors never see or fill this in (it's
                      hidden from both the layout and screen readers via
                      aria-hidden, so it never traps a legitimate submission
                      from an assistive-tech user). Bots that auto-fill every
                      field trip it, and Netlify silently drops the submit —
                      as long as the field name matches "bot-field" declared
                      in public/__forms.html. */}
                  <p className="hidden" aria-hidden="true">
                    <label>
                      No completar este campo si sos humano
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan Pérez" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Mi Empresa S.A."
                            autoComplete="organization"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="juan@empresa.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+54 9 11 0000-0000"
                            autoComplete="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de proyecto</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Seleccioná una opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {PROJECT_TYPES.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Presupuesto estimado</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Seleccioná una opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {BUDGET_RANGES.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>Contanos sobre tu proyecto</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="¿Qué querés lograr? Cuanto más contexto, mejor propuesta te podemos armar."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      aria-busy={status === "submitting"}
                      className="btn-glow h-12 w-full justify-center rounded-xl text-base"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar consulta
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>

                    {/* aria-live announces status changes to screen readers
                        without requiring focus to move. */}
                    <div role="status" aria-live="polite" className="mt-4">
                      {status === "success" && (
                        <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-emerald-400">
                          <CheckCircle2 className="size-4 shrink-0" />
                          ¡Consulta enviada correctamente! BRAXOVA responderá
                          a la brevedad.
                        </p>
                      )}
                      {status === "error" && (
                        <div className="rounded-xl border border-red-500/25 bg-red-500/10 p-4 text-center">
                          <p className="flex items-center justify-center gap-2 text-sm font-medium text-red-400">
                            <AlertCircle className="size-4 shrink-0" />
                            No pudimos enviar tu consulta. Tus datos siguen
                            completos, podés reintentar.
                          </p>
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-4"
                          >
                            <WhatsappGlyph className="size-3.5" />
                            Escribinos por WhatsApp en su lugar
                          </a>
                        </div>
                      )}
                      {status === "idle" && (
                        <p className="text-center text-xs text-muted-foreground/70">
                          Revisamos cada consulta de forma personalizada y te
                          respondemos por email.
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
