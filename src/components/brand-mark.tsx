/**
 * Premium geometric monogram — a chamfered (cut-corner) badge holding an
 * angular "B" built entirely from straight polygon segments, no curves,
 * no gradient. Deliberately avoids the generic "rounded-square + letter"
 * template look.
 */
export function BraxovaMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="7,0 25,0 32,7 32,25 25,32 7,32 0,25 0,7"
        fill="#2563EB"
      />
      <polygon points="9,7 13,7 13,25 9,25" fill="white" />
      <polygon points="13,7 20,7 23,10.5 20,14 13,14" fill="white" />
      <polygon points="13,15.5 21,15.5 24.5,20.5 21,25 13,25" fill="white" />
    </svg>
  )
}
