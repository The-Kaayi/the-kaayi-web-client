import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {

    return ( 
        <section className={styles.heroSection}>
            <h1 className={styles.title}>The Kaayi</h1>
        </section>
    )
        
}

export default HeroSection