import HeroSection from "@/components/HeroSection/HeroSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
