"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./hero.module.scss";
import { ibmPlexMono } from "@/utils/fonts";
import ScrollDownIndicator from "./scroll-down-indicator";

const Hero = () => {
  const [topPosition, setTopPosition] = useState<number | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTopPosition = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setTopPosition(rect.top);
      }
    };
    updateTopPosition();
    window.addEventListener("scroll", updateTopPosition);
    return () => {
      window.removeEventListener("scroll", updateTopPosition);
    };
  }, []);
  console.log(topPosition);
  return (
    <section
      id={styles.hero_wrapper}
      ref={componentRef}
      style={
        topPosition !== null && topPosition < -650
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "black" }
      }
    >
      <div className={styles.hero_container}>
        <h1 className={`${styles.hero_title}`}>
          {/* <span
            className={`${styles.hero_title_code_mark}`}
          ></span>{" "} */}
          I am Juuso, and i engineer code that shapes destinies{" "}
          <span
            className={`${styles.hero_title_code_mark} ${ibmPlexMono.className}`}
          >
            {"</>"}
          </span>
        </h1>
        <div className={styles.hero_short_info_container}>
          <div
            className={`${styles.hero_short_info_item} ${ibmPlexMono.className}`}
          >
            Noah Alwood is a passionate software developer with a knack for
            turning lines of code into digital wonders.
          </div>
          <div
            className={`${styles.hero_short_info_item} ${ibmPlexMono.className}`}
          >
            I once wrote a program that generated random acts of kindness
            &nbsp;to perform each day,it was a wholesome experience.
          </div>
        </div>
        <div className={styles.hero_scroll_indicator_container}>
          <ScrollDownIndicator />
        </div>
        <div className={styles.hero_subtitle_container}>
          <h2
            style={
              topPosition !== null && topPosition < -650
                ? { color: "black" }
                : {}
            }
          >
            Noah Alwood is a passionate software developer with a knack for
            turning lines of code into digital wonders. With a background in
            computer science and a flair for creative problem-solving, Noah has
            been on a relentless quest to make the digital world a better place.
            &nbsp;When he's not immersed in code, you'll find Noah exploring the
            great outdoors or playing Soccer and Kick box, finding harmony not
            only in software but in life's diverse melodies.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
