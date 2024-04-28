import Image from "next/image";
import heroImage from "../../../public/images/main-logo.png";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.filter}>
        <div className={styles.imageContainer}>
          <Image src={heroImage} alt="Hero Image"/>
        </div>
        <div className={styles.tagline}>
          <p>Elevate</p>
          <p>Connect</p>
          <p>Thrive</p>
        </div>
        <h2 className={styles.title}>Feast on Feedback</h2>
        <p className={styles.description}>
          Share your dining experiences and explore local favorites. Connect
          with the community, discover new flavors, and support your favorite
          spots.
        </p>
        <button className={styles.ctaBtn}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
