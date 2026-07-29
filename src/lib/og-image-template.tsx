export function OgImageTemplate() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#070b14",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(37,99,235,0.35), transparent 70%)",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 26,
            background: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px -12px rgba(37,99,235,0.6)",
          }}
        >
          <span style={{ color: "white", fontSize: 52, fontWeight: 800 }}>B</span>
        </div>
        <span
          style={{
            color: "white",
            fontSize: 74,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          BRAXOVA
        </span>
      </div>
      <span
        style={{
          zIndex: 1,
          marginTop: 28,
          color: "#cbd5e1",
          fontSize: 30,
          fontWeight: 500,
        }}
      >
        Desarrollo Web & Sistemas Inteligentes
      </span>
    </div>
  )
}
