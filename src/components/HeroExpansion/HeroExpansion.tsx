import styles from "./HeroExpansion.module.scss";

const HeroExpansion: React.FC = () => {
  return (
    <div className={styles.heroExpansion}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Explore & Rate the Finest Eateries & Delights!
        </h2>
        <p className={styles.description}>
          Discover top-rated restaurants and delectable dishes right in your
          neighborhood. Share your experiences and help others find the best
          flavors around.
        </p>
        <button className={styles.ctaBtn}>Start Exploring</button>
      </div>
    </div>
  );
};

export default HeroExpansion;
