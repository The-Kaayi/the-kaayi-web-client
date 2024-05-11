import Image from "next/image";
import heroImage from "../../../public/images/main-logo.png";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.filter}>
        <div className={styles.imageContainer}>
          <Image className={styles.heroImage} src={heroImage} alt="Hero Image"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
