import styles from "@/assets/scss/components/link-component.module.scss";
import { CSSProperties } from "react";
import Link from "next/link";

interface LinkComponentProps {
  to: string;
  text: string;
  className?: string;
  style?: CSSProperties;
}

const LinkComponent = ({ to, text, className, style }: LinkComponentProps) => {
  return (
    <Link
      href={to}
      className={`${styles.link_component} ${
        className ? styles[className] : ""
      }`}
      style={style ? style : {}}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
