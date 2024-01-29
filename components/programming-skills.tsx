import styles from "@/assets/scss/components/programming-skills.module.scss";
import SkillsGrid from "@/components/skills-grid";

interface ProgrammingSkillsProps {
  data: any;
}

const ProgrammingSkills = ({ data }: ProgrammingSkillsProps) => {
  return (
    <section className={styles.programming_skills_wrapper}>
      <div className={styles.header_container}>
        <h1>My skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          quidem? Eius consequatur laudantium impedit distinctio vel quidem
          laboriosam enim ut?
        </p>
      </div>
      <div className={styles.skills_container}>
        <div className={styles.skills_item}>
          <h3>Programming languages</h3>
          <SkillsGrid data={data?.programming} />
        </div>
        <div className={styles.skills_item}>
          <h3>Frameworks & libraries</h3>
          <SkillsGrid data={data?.framework} />
        </div>
        <div className={styles.skills_item}>
          <h3>Databases</h3>
          <SkillsGrid data={data?.database} />
        </div>
      </div>
    </section>
  );
};

export default ProgrammingSkills;
