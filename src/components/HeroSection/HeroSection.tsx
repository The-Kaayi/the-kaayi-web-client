import Image from "next/image";
import heroImage from "../../../public/images/main-logo.png";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image src={heroImage} alt="Hero Image" width={500} height={500} />
      </div>
      <p className={styles.tagline}>
        Explore, rate, and relish local flavors.
      </p>
      <h2 className={styles.title}>Feast on Feedback</h2>
      <p className={styles.description}>
        Share your dining experiences and explore local favorites. Connect with
        the community, discover new flavors, and support your favorite spots.
      </p>
      <button className={styles.ctaBtn}>Get Started</button>
    </section>
  );
};

export default HeroSection;
