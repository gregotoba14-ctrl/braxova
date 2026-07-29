import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { FAQ } from "@/lib/data"

export function Faq() {
  return (
    <section id="faq" className="py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Preguntas frecuentes</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Todo lo que necesitás saber
            </h2>
          </Reveal>
        </div>

        <RevealGroup stagger={0.06}>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <RevealItem key={item.q}>
                <AccordionItem
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-1 transition-colors data-[state=open]:border-accent-blue/35 data-[state=open]:bg-accent-blue/5"
                >
                  <AccordionTrigger className="px-5 py-5 text-base font-semibold hover:no-underline [&>svg]:size-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </RevealItem>
            ))}
          </Accordion>
        </RevealGroup>
      </div>
    </section>
  )
}
