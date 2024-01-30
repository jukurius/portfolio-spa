import styles from "./hero.module.scss";
import { ibmPlexMono } from "@/utils/fonts";
import ScrollDownIndicator from "@/components/scroll-down-indicator";

interface HeroProps {
  textColor: string;
}

const Hero = ({ textColor }: HeroProps) => {
  return (
    <section id={styles.hero_wrapper}>
      <div className={styles.hero_container}>
        <h1 className={`${styles.hero_title}`}>
          I am Juuso, and i engineer code that shapes destinies.
        </h1>
        <div className={styles.hero_short_info_container}>
          <div
            className={`${styles.hero_short_info_item} ${ibmPlexMono.className}`}
          >
            Juuso Kurkinen, a dedicated software developer, transforms code into
            digital marvels with passion and precision.
          </div>
          <div
            className={`${styles.hero_short_info_item} ${ibmPlexMono.className}`}
          >
            Juuso is embarking on the exciting journey of their &nbsp;
            programming career, eager to learn and make a mark in the digital
            realm.
          </div>
        </div>
        <div className={styles.hero_scroll_indicator_container}>
          <ScrollDownIndicator />
        </div>
        <div className={styles.hero_subtitle_container}>
          <h2 style={{ color: textColor }}>
            Juuso is a passionate programmer who enjoys solving problems and
            continuously enhancing his skills in the realm of coding. He's forte
            lies in Frontend development, but he also possess experience in
            backend development and databases. With a background in computer
            engineering, Juuso is well-versed in the intricacies of technology.
            When not immersed in coding, you can find Juuso indulging in their
            other interests, such as music or physical activities. This
            individual is not just a coder; He brings a well-rounded set of
            skills and interests to the table.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
