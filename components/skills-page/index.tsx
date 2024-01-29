import ContactForm from "@/components/contact-form";
import SkillsSection from "../skills-sections";
import styles from "./index.module.scss";
import ProgrammingSkills from "../programming-skills";

interface IndexProps {
  pageData: any;
}

const Index = ({ pageData }: IndexProps) => {
  return (
    <div className={styles.main}>
      <ProgrammingSkills data={(pageData as any)?.skillbars} />
      <SkillsSection
        textColor="black"
        showLink={false}
        data={pageData?.programmingSkills}
      />
      <ContactForm />
    </div>
  );
};

export default Index;
