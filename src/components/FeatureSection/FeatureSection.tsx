import Image from "next/image";
import styles from "./FeatureSection.module.scss";

const featureData = [
  {
    name: "Efficency Redefined",
    content:
      "Maximize your business impact by streamlining your efforts and focusing on what truly matters. With 'iNSPECTOR', resource allocation becomes seamless, ensuring maximum efficiency while minimizing unnecessary exertion.",
    icon: "",
  },
  {
    name: "Understanding The Pleasure And Pain Points",
    content:
      "Identify what delights customers and address pain points to build satisfaction and loyalty. By understanding and satisfying your customers' true needs, you can establish a trusted brand that consistently exceeds expectations.",
    icon: "",
  },
  {
    name: "Discover the unseen",
    content:
      "We uncovers hidden problems, helping you resolve issues that may go unnoticed by business owners but are apparent to perceptive consumers. Unleash the untapped potential of your business through a deeper understanding of your customers true needs.",
    icon: "",
  },
  {
    name: "Listen To Your Customers",
    content:
      "Delve into the hearts and minds of your customers by collecting valuable feedback and reviews directly from them Gain profound insights into their experiences, preferences, and expectations, enabling you to refine your offerings and exceed their aspirations.",
    icon: "",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className={styles.featureSection}>
      <h3>WHY?</h3>
      <div className={styles.featureContainer}>
        {featureData.map((feature) => (
          <div key={feature.name} className={styles.feature}>
            <Image src={feature.icon} alt={feature.name} />
            <h4>{feature.name}</h4>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
