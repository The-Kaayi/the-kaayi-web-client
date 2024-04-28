import Link from "next/link";
import { APP_NAME } from "@/utils/constants";
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
        <p className={styles.logo}>{APP_NAME}</p>
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <Link href={item.link} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signupBtn}>Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
