import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "골든브레인케어 - AI 기반 언어·인지 재활 솔루션",
  description:
    "골든브레인케어는 AI 기반 언어·인지 재활 솔루션을 통해 재활의 지속성과 회복 가능성을 높이는 디지털 헬스케어 기업입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${publicSans.variable}`}>
      <head>
        <meta name="naver-site-verification" content="72147221cb35cccd73df5f42de4ce8a215bd9911" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
