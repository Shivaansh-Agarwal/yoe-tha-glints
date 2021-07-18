import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import stylesCommon from "../styles/Components.module.css";
import styles from "./styles/ExperienceCardView.module.css";
import { shortenString } from "../../utils/utility.js";

export const ExperienceCardView = ({
  companyLogo,
  companyName,
  jobTitle,
  startDate,
  endDate,
  isCurrentPosition,
  jobDescription,
}) => {
  const [isJobDescExpanded, setIsJobDescExpanded] = useState(false);
  const jobDescShort = shortenString(jobDescription, 40);
  const jobDescDisplayText = isJobDescExpanded ? jobDescription : jobDescShort;
  const readMoreBtnText = isJobDescExpanded ? "read less" : "read more";
  return (
    <div className={styles.experienceCard_wrapper}>
      <div className={styles.expCardLeft}>
        <div className={styles.companyLogoImgWrapper}>
          <img src={companyLogo} alt="company logo" />
        </div>
      </div>
      <div className={styles.expCardRight}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.jobTitle}>{jobTitle}</div>
        <div className={styles.date}>
          {startDate} - {isCurrentPosition ? "Present" : endDate}
        </div>
        <p className={styles.jobDescription}>
          {jobDescDisplayText}
          {jobDescription.split(" ").length > 40 && (
            <button
              className={styles.btn_readMore}
              onClick={() => {
                setIsJobDescExpanded((readMore) => !readMore);
              }}
            >
              <span>...</span>
              {readMoreBtnText}
            </button>
          )}
        </p>
      </div>
      <button className={stylesCommon.btn_edit}>
        <MdEdit />
      </button>
    </div>
  );
};
