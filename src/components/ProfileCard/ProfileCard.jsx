import React from "react";
import { MdEdit } from "react-icons/md";
import styles from "./styles/ProfileCard.module.css";

export const ProfileCard = ({ profileImage, name, age }) => {
  return (
    <div className="container">
      <div className={styles.profile_wrapper}>
        <div className={styles.profile_pic}>
          <img src={profileImage} alt="" />
        </div>
        <div className={styles.profile_details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.age}>Age: {age}</div>
        </div>
        <button className={styles.btn_edit}>
          <MdEdit />
        </button>
      </div>
    </div>
  );
};
