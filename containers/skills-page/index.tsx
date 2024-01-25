import ContactForm from "@/components/contact-form/contact-form";
import SkillsSection from "../home-page/skills-sections";
import styles from "./index.module.scss";
import ProgrammingSkills from "./programming-skills";

const Index = () => {
  return (
    <div className={styles.main}>
      <ProgrammingSkills />
      <SkillsSection textColor="black" showLink={false} />
      <ContactForm />
    </div>
  );
};

export default Index;
