"use client";
import { useRef, useEffect } from "react";
import styles from "./skills-section.module.scss";
import Image from "next/image";
import js from "@/assets/images/js.png";
import atom from "@/assets/images/atom.png";
import bs from "@/assets/images/bootstrap.png";
import cSharp from "@/assets/images/c-sharp.png";
import css from "@/assets/images/css-3.png";
import git from "@/assets/images/git.png";
import html from "@/assets/images/html.png";
import java from "@/assets/images/java.png";
import mysql from "@/assets/images/mysql.png";
import sass from "@/assets/images/sass.png";
import LinkComponent from "@/components/Link";

const images = [js, atom, bs, cSharp, css, git, html, java, mysql, sass];

interface SkillsSectionProps {
  textColor: string;
}

const SkillsSection = ({ textColor }: SkillsSectionProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.setAttribute("data-animated", String(true));
      const scrollerInner = scrollerRef.current.querySelector(
        `.${styles.skills_section_container}`
      );
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner?.children);
        scrollerContent.forEach((item) => {
          const clonedItem = item.cloneNode(true);
          scrollerInner.appendChild(clonedItem);
        });
      }
    }
  }, []);

  return (
    <section id={styles.skills_section_wrapper}>
      <div className={styles.skills_section_title_container}>
        <h2 style={{ color: textColor }}>Development Toolbox</h2>
        <p style={{ color: textColor }}>
          Navigating the Digital Landscape Where Innovation Meets Technology By
          Unleashing the Power of Code.
        </p>
      </div>
      <div ref={scrollerRef} className={styles.skills_section_wrapper_inner}>
        <ul className={styles.skills_section_container}>
          {images.map((item, index) => (
            <li className={styles.skills_section_item} key={index}>
              <Image
                className={styles.skills_section_img}
                src={item.src}
                alt="js image"
                width={240}
                height={240}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.link_container}>
        <LinkComponent to="/work" text="Read more" />
      </div>
    </section>
  );
};

export default SkillsSection;
