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

  return (
    <section
      id={styles.hero_wrapper}
      ref={componentRef}
      style={
        topPosition !== null && topPosition < -296
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "black" }
      }
    >
      <div className={styles.hero_container}>
        <h1 className={`${styles.hero_title}`}>
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
          <h2
            style={
              topPosition !== null && topPosition < -296
                ? { color: "black" }
                : {}
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            illum repellendus, excepturi assumenda tenetur iste deleniti, id
            fugit a dolorum quae earum ipsa! Obcaecati voluptatem culpa tempora
            voluptas debitis quibusdam accusamus iure facilis amet, sint,
            temporibus facere repudiandae ut doloribus mollitia ipsa esse, qui
            praesentium ducimus quasi sit minus! Error, eos iste? Non totam
            magnam cupiditate? Facilis fuga incidunt quaerat!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
