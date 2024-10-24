import HeroSection from "@/components/sections/HeroSection.astro";
import BannerSection from "@/components/sections/BannerSection.astro";

export type SectionType = "hero_section" | "banner_section";

export const components: Record<SectionType, (_props: any) => any> = {
  hero_section: HeroSection,
  banner_section: BannerSection,
};
