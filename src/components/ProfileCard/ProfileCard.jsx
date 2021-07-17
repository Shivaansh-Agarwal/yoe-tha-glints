import React from "react";
import { MdEdit } from "react-icons/md";
import styles1 from "./styles/ProfileCard.module.css";

export const ProfileCard = ({ profileImage, name, age }) => {
  return (
    <div className="container">
      <div className={styles1.profile_wrapper}>
        <div className={styles1.profile_pic}>
          <img src={profileImage} alt="" />
        </div>
        <div className={styles1.profile_details}>
          <div className={styles1.name}>{name}</div>
          <div className={styles1.age}>Age: {age}</div>
        </div>
        <button className={styles1.btn_edit}>
          <MdEdit />
        </button>
      </div>
    </div>
  );
};
