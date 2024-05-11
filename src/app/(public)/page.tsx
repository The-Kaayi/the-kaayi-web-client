import HeroSection from "@/components/HeroSection/HeroSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import styles from "./page.module.scss";
import InspectorSection from "@/components/InspectorSection/InspectorSection";
import HeroExpansion from "@/components/HeroExpansion/HeroExpansion";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <HeroExpansion />
      <InspectorSection />
      <FeatureSection />
    </main>
  );
}
