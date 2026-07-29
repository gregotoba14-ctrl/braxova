import { Dumbbell, HeartPulse, Stethoscope, Footprints, Building2, type LucideIcon } from "lucide-react"
import type { IndustryIconKey } from "@/lib/projects"

export const INDUSTRY_ICONS: Record<IndustryIconKey, LucideIcon> = {
  dumbbell: Dumbbell,
  "heart-pulse": HeartPulse,
  stethoscope: Stethoscope,
  footprints: Footprints,
  building: Building2,
}
