import React from "react";
import styles from "./SearchItem.module.scss";
import Location from "../../../assets/icons/Location";
function SearchItem({ address, place }) {
  return (
    <div className={styles.item}>
      <Location />
      <div className={styles.info}>
        <div className={styles.address}>{address}</div>
        <div className={styles.place}>{place}</div>
      </div>
    </div>
  );
}

export default SearchItem;
