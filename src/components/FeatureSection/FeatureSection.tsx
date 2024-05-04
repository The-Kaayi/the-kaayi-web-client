import Image from "next/image";
import { featureData } from "@/data/featureData";
import styles from "./FeatureSection.module.scss";


const FeatureSection: React.FC = () => {
  return (
    <div className={styles.featureSection}>
      <h3 className={styles.title}>WHY?</h3>
      <div className={styles.featureContainer}>
        {featureData.map((feature) => (
          <div key={feature.name} className={styles.feature}>
            <Image
              className={styles.featureIcon}
              src={feature.icon}
              alt={feature.name}
            />
            <h4 className={styles.featureTitle}>{feature.name}</h4>
            <p className={styles.featureContent}>{feature.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
