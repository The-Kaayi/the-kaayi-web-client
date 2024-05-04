"use client";
import Image from "next/image";
import { infoData, socialData, footerLinkData } from "@/data/footerData";
import appLogo from "../../../public/app-logo.svg";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.info}>
            <Image className={styles.appLogo} src={appLogo} alt="App Logo" />

            <div className={styles.infoContainer}>
              {infoData.map((data) => (
                <div className={styles.infoItem} key={data.name}>
                  <Image
                    className={styles.infoIcon}
                    src={data.icon}
                    alt={data.name}
                  />

                  <p className={styles.infoContent}>{data.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.socials}>
            {socialData.map((data) => (
              <Link
                key={data.name}
                className={styles.socialIcon}
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles.socialIcon}
                  src={data.icon}
                  alt={data.name}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.newsletter}>
            <p className={styles.title}>Join our newsletter</p>
            <p className={styles.description}>
              Be the first to know our latest offers and updates
            </p>

            <div className={styles.inputContainer}>
              <input className={styles.input} placeholder="Enter your email" />
              <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
          </div>

          <div className={styles.footerLinks}>
            {footerLinkData.map((data) => (
              <Link
                key={data.name}
                className={styles.footerLink}
                href={data.link}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <p className={styles.copyright}>
        &copy; 2023 The Kaayi. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
