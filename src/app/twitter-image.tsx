import { ImageResponse } from "next/og"
import { OgImageTemplate } from "@/lib/og-image-template"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "BRAXOVA — Desarrollo Web & Sistemas Inteligentes"

export default function TwitterImage() {
  return new ImageResponse(<OgImageTemplate />, size)
}
