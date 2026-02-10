"use client";

import dynamic from "next/dynamic";
import { HeroOverlay } from "./HeroOverlay";

const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroScene />
      <HeroOverlay />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
