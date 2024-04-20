import Image from "next/image";
import logo from "../../public/images/main-logo.png";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt="The Kaayi Logo" />
    </main>
  );
}
