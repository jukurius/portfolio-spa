import styles from "@/assets/scss/components/main-footer.module.scss";
import Link from "next/link";
import linkedinIcon from "@/assets/images/footer/linkedin.svg";
import facebookIcon from "@/assets/images/footer/facebook.svg";
import instagramIcon from "@/assets/images/footer/instagram.svg";
import twitterIcon from "@/assets/images/footer/twitter.svg";
import githubIcon from "@/assets/images/footer/github.svg";
import Image from "next/image";

const MainFooter = () => {
  return (
    <footer id={styles.footer_wrapper}>
      <div className={styles.footer_row_top}>
        <div className={styles.footer_row_content}>
          <h3>Logo section</h3>
        </div>
        <div className={styles.footer_row_content}>
          <h3>Navigation</h3>
          <ul className={styles.footer_menu}>
            <li className={styles.footer_menu_item}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.footer_menu_item}>
              <Link href="/">Work</Link>
            </li>
            <li className={styles.footer_menu_item}>
              <Link href="/">Services</Link>
            </li>
            <li className={styles.footer_menu_item}>
              <Link href="/">About Me</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_row_content}>
          <h3>Socials</h3>
          <ul className={styles.footer_socials_menu}>
            <li className={styles.footer_socials_menu_item}>
              <Link href="/">
                <Image src={linkedinIcon} alt="Linkedin icon" />
              </Link>
            </li>
            <li className={styles.footer_socials_menu_item}>
              <Link href="/">
                <Image src={facebookIcon} alt="Linkedin icon" />
              </Link>
            </li>
            <li className={styles.footer_socials_menu_item}>
              <Link href="/">
                <Image src={instagramIcon} alt="Linkedin icon" />
              </Link>
            </li>
            <li className={styles.footer_socials_menu_item}>
              <Link href="/">
                <Image src={twitterIcon} alt="Linkedin icon" />
              </Link>
            </li>
            <li className={styles.footer_socials_menu_item}>
              <Link href="/">
                <Image src={githubIcon} alt="Linkedin icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_row_middle}>
        <div className={styles.horizontal_line}></div>
      </div>
      <div className={styles.footer_row_bottom}>
        <p>© 2024 Juuso - All rights reserved</p>
        <p>
          <Link href="/">Privacy Policy</Link> ·{" "}
          <Link href="/credits">Credits</Link>
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
