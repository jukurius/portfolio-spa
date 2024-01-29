"use client";
import React, { useEffect, useState } from "react";
import { HeroBg } from "./about-page/hero-bg";
import styles from "@/assets/scss/components/time-line.module.scss";
import TimeLineDot from "./time_line_dot";

const TimeLine = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.hero_wrapper}>
        <div className={styles.title_container}>
          <h1>My Working Journey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            placeat, consequuntur modi nisi veniam dolor nihil neque? Atque, sed
            tempore!
          </p>
        </div>
        <div className={styles.hero_wrapper_inner}>
          <div className={styles.vertical_line}></div>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 100 } : { top: 50 }}
            variant="straight_left"
            direction="left"
          >
            <h2>2006</h2>
            <p>
              I started my studies as a construction builder at vocational
              school.
            </p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 200 } : { top: 160 }}
            variant="straight_right"
            direction="right"
          >
            <h2>2009</h2>
            <div>
              <p>I graduated as a construction builder.</p>
            </div>
          </TimeLineDot>
          <TimeLineDot
            position={{ top: 250 }}
            variant="right_down"
            direction="left_down"
          >
            <h2>2009</h2>
            <p>I completed my military service.</p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 340 } : { top: 340 }}
            variant="straight_right"
            direction="right"
          >
            <h2>2010 - 2020</h2>
            <p>
              During this period, I worked for several construction companies in
              the Kuopio area. Most of the time, I worked for a company called X
              as a carpenter.
            </p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 420 } : { top: 500 }}
            variant="straight_left"
            direction="left"
          >
            <h2>Early 2020</h2>
            <p>
              I applied to Savonia University of Applied Sciences to study for a
              Bachelor's degree in Computer Engineering.
            </p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 580 } : { top: 640 }}
            variant="straight_right"
            direction="right"
          >
            <h2>8/2020</h2>
            <p>I was accepted to the school and began full-time studies.</p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 640 } : { top: 740 }}
            variant="right_down"
            direction="left_down"
          >
            <h2>2022</h2>
            <p>
              Internship at Growly Oy. Independently implemented a conversion
              tool project using the MERN stack.
            </p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 800 } : { top: 880 }}
            variant="straight_right"
            direction="right"
          >
            <h2>2023</h2>
            <p>
              Internship at Hurja Solutions Oy. Worked on WordPress programming.
              During the internship, I completed several client projects.
            </p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 860 } : { top: 1040 }}
            variant="straight_left"
            direction="left"
          >
            <h2>Late 2023</h2>
            <p>
              I graduated from school with excellent grades, six months ahead of
              the regular schedule.
            </p>
          </TimeLineDot>
          <TimeLineDot
            position={windowWidth > 768 ? { top: 1000 } : { top: 1160 }}
            variant="straight_left"
            direction="left"
          >
            <h2>Current</h2>
            <p>I have developed myself as a programmer and am ready to work.</p>
          </TimeLineDot>
        </div>
      </div>
      <HeroBg />
    </>
  );
};

export default TimeLine;
