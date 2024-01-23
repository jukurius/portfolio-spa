import ContactForm from "@/components/contact-form/contact-form";
import styles from "./index.module.scss";
import Hero from "./hero";
import SkillsSection from "../home-page/skills-sections";
import Hobbies from "./hobbies";

const Index = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <Hobbies />
      <ContactForm />
    </div>
  );
};

export default Index;
