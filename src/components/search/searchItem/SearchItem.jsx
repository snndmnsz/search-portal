import React from "react";
import styles from "./SearchItem.module.scss";
import Location from "../../../assets/icons/Location";
function SearchItem({ address, place, person, date, showPersonInfo = false }) {
  return (
    <div className={styles.item}>
      <Location />
      <div className={styles.info}>
        <div className={styles.places}>
          <div className={styles.address}>{address}</div>
          <div className={styles.place}>{place}</div>
        </div>
        {showPersonInfo && (
          <div className={styles.personInfo}>
            <div className={styles.person}>{person}</div>
            <div className={styles.date}>{date}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchItem;
