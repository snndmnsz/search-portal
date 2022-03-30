import React from "react";
import styles from "./SliderItem.module.scss";
function SliderItem({ title, time, author, image }) {
  return (
    <div className={styles.sliderItemContainer}>
      <div className={styles.image}>
        <img src={image} alt="image" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <p className={styles.time}>{time}</p>
        {"·"}
        <p className={styles.author}>by {author}</p>
      </div>
    </div>
  );
}

export default SliderItem;
