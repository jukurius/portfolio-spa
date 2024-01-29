import React, { CSSProperties, ReactNode } from "react";
import styles from "@/assets/scss/components/time-line-dot.module.scss";

interface TimeLineDotProps {
  position?: CSSProperties;
  direction?: string;
  variant?: string;
  children: ReactNode;
}

const TimeLineDot = ({
  position,
  direction,
  children,
  variant,
}: TimeLineDotProps) => {
  return (
    <div className={styles.time_line_dot} style={position}>
      <div className={`${styles.line} ${variant ? styles[variant] : ""}`}></div>
      <div
        className={`${styles.content_box} ${
          direction ? styles[direction] : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default TimeLineDot;
