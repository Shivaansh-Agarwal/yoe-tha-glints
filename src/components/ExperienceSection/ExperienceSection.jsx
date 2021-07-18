import stylesCommon from "../styles/Components.module.css";
import styles from "./styles/ExperienceSection.module.css";
import { ExperienceCard } from "../ExperienceCard";
import { MdAdd } from "react-icons/md";
export const ExperienceSection = () => {
  const experienceData = [];
  return (
    <section className={stylesCommon.container}>
      <header className={styles.experience_header}>
        <h1 className={styles.experience_text}>Experience</h1>
        <div className={stylesCommon.btn_add}>
          <MdAdd />
        </div>
      </header>
      {experienceData.map(({ id, ...data }) => {
        return <ExperienceCard key={id} {...data} />;
      })}
    </section>
  );
};
