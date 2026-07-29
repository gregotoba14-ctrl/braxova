"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"

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
import {
  contactSchema,
  PROJECT_TYPES,
  BUDGET_RANGES,
  type ContactFormValues,
} from "@/lib/contact-schema"

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  )

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

  // NOTE: no backend is wired up yet — this resolves locally so the form's
  // validation and submit states work end to end. To start receiving
  // submissions, accept the validated payload (typed as ContactFormValues)
  // and POST it to a real endpoint — an API route, Resend, Netlify Forms —
  // in place of the timeout below. Nothing else here needs to change.
  async function onSubmit() {
    setStatus("submitting")
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus("success")
    form.reset()
    setTimeout(() => setStatus("idle"), 3200)
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
                Contanos sobre tu proyecto y te respondemos en menos de
                24&nbsp;hs con una propuesta clara.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-5">
                <a href="mailto:hola@braxova.com" className="contact-row">
                  <span className="contact-icon">
                    <Mail className="size-4.5" strokeWidth={1.7} />
                  </span>
                  hola@braxova.com
                </a>
                <a href="tel:+5493810000000" className="contact-row">
                  <span className="contact-icon">
                    <Phone className="size-4.5" strokeWidth={1.7} />
                  </span>
                  +54 9 381 000-0000
                </a>
                <div className="contact-row">
                  <span className="contact-icon">
                    <MapPin className="size-4.5" strokeWidth={1.7} />
                  </span>
                  San Miguel de Tucumán, Argentina · Remoto para el mundo
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
                  noValidate
                >
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
                      className="btn-glow h-12 w-full justify-center rounded-xl text-base"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Enviando...
                        </>
                      ) : status === "success" ? (
                        <>
                          <CheckCircle2 className="size-4" />
                          ¡Solicitud enviada!
                        </>
                      ) : (
                        <>
                          Solicitar presupuesto
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>
                    <p className="mt-4 text-center text-xs text-muted-foreground/70">
                      {status === "success"
                        ? "Gracias por escribirnos. Te contactaremos muy pronto."
                        : "Te respondemos por email en menos de 24 horas hábiles."}
                    </p>
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
