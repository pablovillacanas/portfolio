import Link from "next/link";

export default function DevNav() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div style={{
      position: "fixed",
      top: "12px",
      right: "12px",
      zIndex: 9999,
      display: "flex",
      gap: "8px",
      background: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(6px)",
      padding: "6px 10px",
      borderRadius: "8px",
      fontSize: "12px",
      fontFamily: "monospace",
    }}>
      <Link href="/" style={{ color: "#fff", textDecoration: "none", opacity: 0.75 }}>
        inicio
      </Link>
      <span style={{ color: "#555" }}>/</span>
      <Link href="/cv" style={{ color: "#fff", textDecoration: "none", opacity: 0.75 }}>
        cv
      </Link>
      <span style={{ color: "#555" }}>/</span>
      <Link href="/freelance" style={{ color: "#fff", textDecoration: "none", opacity: 0.75 }}>
        freelance
      </Link>
    </div>
  );
}
