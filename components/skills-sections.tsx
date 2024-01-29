"use client";
import { useRef, useEffect } from "react";
import styles from "@/assets/scss/components/skills-section.module.scss";
import Image from "next/image";
import LinkComponent from "@/components/Link";

interface SkillsSectionProps {
  textColor: string;
  showLink?: boolean;
  data: any;
}

const SkillsSection = ({ textColor, showLink, data }: SkillsSectionProps) => {
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
          {data?.length > 0 &&
            data.map((item: any, index: number) => (
              <li className={styles.skills_section_item} key={index}>
                {item?.image && (
                  <Image
                    className={styles.skills_section_img}
                    src={item.image.url}
                    alt={item.altText}
                    width={240}
                    height={240}
                  />
                )}
              </li>
            ))}
        </ul>
      </div>
      {showLink && (
        <div className={styles.link_container}>
          <LinkComponent to="/development-skills" text="Read more" />
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
