import React from "react";
import styles from "./SearchPopup.module.scss";
import SearchItem from "../searchItem/SearchItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SearchPopup({ searchValue }) {
  const suggestedData = useSelector((state) => state.searchApi.suggestions);
  let slicedItems;
  if (suggestedData.length >= 3) {
    slicedItems = suggestedData.slice(0, 3);
  } else if (suggestedData.length > 0 && suggestedData.length < 3) {
    slicedItems = suggestedData;
  } else {
    return null;
  }

  return (
    <div className={styles.popupContainer}>
      <div className={styles.items}>
        {slicedItems.map((item) => (
          <SearchItem key={item.id} {...item} />
        ))}
      </div>
      <Link className={styles.showMore} to={`/search/${searchValue}`}>
        Show more...
      </Link>
    </div>
  );
}

export default SearchPopup;
