import Image from "next/image"

export function BrowserMockup({
  src,
  alt,
  label,
  priority,
}: {
  src: string
  alt: string
  label: string
  priority?: boolean
}) {
  return (
    <figure className="browser-mockup">
      <div className="browser-mockup-chrome">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <div className="browser-mockup-url">{label}</div>
      </div>
      <div className="browser-mockup-viewport">
        <div className="browser-mockup-media">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 800px"
            priority={priority}
          />
        </div>
        <div className="browser-mockup-sheen" />
      </div>
    </figure>
  )
}
