import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "짐허브 | GYMHUB - 당신의 피트니스 파트너",
  description:
    "최신 헬스 기구 찾기, 360° 헬스장 가상투어, 체력나이 진단까지. 짐허브에서 당신의 피트니스 여정을 시작하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
