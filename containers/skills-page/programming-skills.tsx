import styles from "./programming-skills.module.scss";
import SkillsGrid from "./skills-grid";

const programmingLanguages = [
  { language: "JavaScript", level: 8 },
  { language: "TypeScript", level: 8 },
  { language: "Java", level: 5 },
  { language: "Python", level: 4 },
  { language: "C#", level: 6 },
  { language: "HTML", level: 6 },
  { language: "CSS / SCSS", level: 6 },
];

const frameworksAndLibraries = [
  { language: "React", level: 8 },
  { language: ".NET", level: 5 },
  { language: "NodeJS", level: 6 },
  { language: "TailwindCSS", level: 8 },
  { language: "Bootstrap", level: 8 },
];

const databases = [
  { language: "MySQL", level: 8 },
  { language: "MongoDB", level: 5 },
];

const ProgrammingSkills = () => {
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
          <SkillsGrid data={programmingLanguages} />
        </div>
        <div className={styles.skills_item}>
          <h3>Frameworks & libraries</h3>
          <SkillsGrid data={frameworksAndLibraries} />
        </div>
        <div className={styles.skills_item}>
          <h3>Databases</h3>
          <SkillsGrid data={databases} />
        </div>
      </div>
    </section>
  );
};

export default ProgrammingSkills;
