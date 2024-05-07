import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/images/main-logo.png";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.filter}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.heroImage}
            src={heroImage}
            alt="Hero Image"
          />
        </div>
        <h2 className={styles.title}>Feast on Feedback</h2>
        <p className={styles.description}>
          Share your dining experiences and explore local favorites. Connect
          with the community, discover new flavors, and support your favorite
          spots.
        </p>
        <Link href="/dashboard" className={styles.ctaBtn}>
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
