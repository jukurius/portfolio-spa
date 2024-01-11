import Hero from "@/containers/home-page/Hero";
import styles from "./page.module.css";
import SkillsSection from "@/containers/home-page/skills-sections";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <SkillsSection />
    </main>
  );
}
