import Link from "next/link";
import Image from "next/image";
import appLogo from "../../../public/app-logo.svg";
import styles from "./Navbar.module.scss";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <Image className={styles.logo} src={appLogo} alt="App Logo" />
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <Link href={item.link} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link href="/login" className={styles.loginBtn}>
          Login
        </Link>
        <Link href="/signup" className={styles.signupBtn}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
