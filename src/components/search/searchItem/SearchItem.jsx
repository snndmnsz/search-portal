import React from "react";
import styles from "./SearchItem.module.scss";
import Location from "../../../assets/icons/Location";
function SearchItem({ country, city, fullName, date, showPersonInfo = false }) {
  const event = new Date(date);
  const day = event.getDate();
  const month = event.getMonth() + 1;
  const year = event.getFullYear();
  const full = `${day}/${month}/${year}`;
  return (
    <div className={styles.item}>
      <Location />
      <div className={styles.info}>
        <div className={styles.places}>
          <div className={styles.address}>{country}</div>
          <div className={styles.place}>{city}</div>
        </div>
        {showPersonInfo && (
          <div className={styles.personInfo}>
            <div className={styles.person}>{fullName}</div>
            <div className={styles.date}>{full}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchItem;
