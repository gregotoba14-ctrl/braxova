/**
 * Real BRAXOVA contact info — single source of truth. Every place that
 * shows a phone, email, WhatsApp link or location (contact section,
 * footer, layout metadata, JSON-LD) imports from here instead of
 * hardcoding the values, so there is exactly one place to update them.
 */

export const CONTACT_EMAIL = "gregorio.tobares@icloud.com"

/** Human-readable, for display and the `tel:` link. */
export const PHONE_DISPLAY = "+54 9 3472 586643"

/** E.164, no spaces — required by Schema.org `telephone` and `tel:` hrefs. */
export const PHONE_E164 = "+5493472586643"

/** wa.me expects digits only, no leading "+". */
export const WHATSAPP_NUMBER = "5493472586643"

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola BRAXOVA, quiero consultar por un proyecto."

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`

export const LOCATION_CITY = "Marcos Juárez"
export const LOCATION_REGION = "Córdoba"
export const LOCATION_COUNTRY = "Argentina"
export const LOCATION_DISPLAY = `${LOCATION_CITY}, ${LOCATION_REGION}, ${LOCATION_COUNTRY}`
