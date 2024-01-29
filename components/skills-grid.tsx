import styles from "@/assets/scss/components/skills-grid.module.scss";

interface SkillsGridProps {
  data: any[];
}
const SkillsGrid = ({ data }: SkillsGridProps) => {
  return (
    <div className={styles.grid_container}>
      {data.map((item, index) => (
        <div key={index} className={styles.grid_item}>
          <div className={styles.skill_label}>{item.title}</div>
          <div className={styles.skillbar}>
            <div
              className={styles.skillbar_percentage}
              style={{ maxWidth: `${item?.level * 10}%` }}
            >
              <div className={styles.percent_digit}>{`${
                item?.level * 10
              }%`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
