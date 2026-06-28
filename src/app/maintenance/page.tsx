import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "준비 중 - 골든브레인케어",
  description: "현재 사이트를 준비 중입니다. 잠시 후 다시 방문해 주세요.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
        background: "#0b1020",
        color: "#f5f7fb",
        fontFamily:
          "'Pretendard Variable', Pretendard, var(--font-public-sans), system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.75rem", fontWeight: 800, margin: 0 }}>
        사이트 준비 중입니다
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.6, opacity: 0.8, margin: 0, maxWidth: "28rem" }}>
        더 나은 서비스를 위해 페이지를 준비하고 있습니다.
        <br />
        잠시 후 다시 방문해 주세요.
      </p>
      <p style={{ fontSize: "0.875rem", opacity: 0.6, marginTop: "0.5rem" }}>
        골든브레인케어
      </p>
    </main>
  );
}
