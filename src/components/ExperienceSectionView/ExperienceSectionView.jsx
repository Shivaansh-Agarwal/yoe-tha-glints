import stylesCommon from "../styles/Components.module.css";
import styles from "./styles/ExperienceSectionView.module.css";
import { ExperienceCardView } from "../ExperienceCardView";
import { MdAdd } from "react-icons/md";

export const ExperienceSectionView = () => {
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
        return <ExperienceCardView key={id} {...data} />;
      })}
    </section>
  );
};
