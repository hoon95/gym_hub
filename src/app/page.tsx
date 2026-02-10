import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { StatsCounter } from "@/components/home/StatsCounter";
import { CommunityPreview } from "@/components/home/CommunityPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <StatsCounter />
      <CommunityPreview />
    </>
  );
}
