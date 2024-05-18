import Link from "next/link";
import Image from "next/image";
import inspectorLogo from "../../../public/images/InspectorSection/inspector-logo.svg";
import styles from "./InspectorSection.module.scss";

const InspectorSection: React.FC = () => {
  return (
    <div className={styles.inspectorSection}>
      <h3 className={styles.tagline}>
        UNCOVER INSIGHTS,
        <br />
        ENHANCE EXPERIENCES.
      </h3>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={inspectorLogo}
            alt="Inspector Logo"
          />
        </div>
        <p className={styles.description}>
          &apos;iNSPECTOR&apos; is an advanced program meticulously crafted to
          revolutionize how businesses interact with their customers. It
          transcends being just a feedback collection tool and instead
          represents a strategic approach to understanding your clientele,
          unveiling hidden opportunities, and addressing inconspicuous issues
          that may elude business owners.
        </p>
        <Link href={"/inspector"} className={styles.ctaBtn}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default InspectorSection;
