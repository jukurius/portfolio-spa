"use client";
import React, { useRef, useEffect, useState } from "react";
import Hero from "./hero";
import SkillsSection from "./skills-sections";
import ContactForm from "@/components/contact-form/contact-form";
import styles from "./index.module.scss";

const Index = () => {
  const [bgColor, setBgColor] = useState<string>("#000000");
  const [textColor, setTextColor] = useState<string>("#fff");
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBgColorState = (position: number) => {
      return position !== null && position <= -496 && position > -596
        ? "#404040"
        : position !== null && position <= -596 && position > -696
        ? "#bfbfbf"
        : position !== null && position <= -696
        ? "#ffffff"
        : "#000000";
    };

    const handleFontColorState = (position: number) => {
      return position !== null && position <= -596 ? "black" : "#fff";
    };

    const updateTopPosition = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const backgroundColor = handleBgColorState(rect.top);
        const fontColor = handleFontColorState(rect.top);
        setBgColor(backgroundColor);
        setTextColor(fontColor);
      }
    };

    updateTopPosition();
    window.addEventListener("scroll", updateTopPosition);
    return () => {
      window.removeEventListener("scroll", updateTopPosition);
    };
  }, []);

  return (
    <div
      className={styles.main}
      ref={componentRef}
      style={{ backgroundColor: bgColor }}
    >
      <Hero textColor={textColor} />
      <SkillsSection textColor={textColor} showLink={true} />
      <ContactForm />
    </div>
  );
};

export default Index;
