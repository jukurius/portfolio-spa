import Hero from "@/containers/home-page/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
