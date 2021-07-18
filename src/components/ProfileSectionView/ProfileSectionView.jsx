import React from "react";
import { MdEdit } from "react-icons/md";
import stylesCommon from "../styles/Components.module.css";
import styles from "./styles/ProfileSectionView.module.css";

export const ProfileSectionView = ({
  profileImage = "https://via.placeholder.com/150",
  name = "",
  age = "",
}) => {
  return (
    <div className={stylesCommon.container}>
      <div className={styles.profile_wrapper}>
        <div className={styles.profile_pic}>
          <img src={profileImage} alt="" />
        </div>
        <div className={styles.profile_details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.age}>Age: {age}</div>
        </div>
        <button className={stylesCommon.btn_edit}>
          <MdEdit />
        </button>
      </div>
    </div>
  );
};
