import React from "react";
import styles from "./SearchPopup.module.scss";
import SearchItem from "../searchItem/SearchItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../ui/button/Button";
function SearchPopup({ searchValue }) {
  const suggestedData = useSelector((state) => state.searchApi.suggestions);
  const navigate = useNavigate();
  let slicedItems;
  if (suggestedData.length >= 3) {
    slicedItems = suggestedData.slice(0, 3);
  } else if (suggestedData.length > 0 && suggestedData.length < 3) {
    slicedItems = suggestedData;
  } else {
    return null;
  }

  const showMoreHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate("/search/" + searchValue + "?page=1");
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.items}>
        {slicedItems.map((item) => (
          <SearchItem key={item.id} {...item} />
        ))}
      </div>
      <Button
        onClick={showMoreHandler}
        className={styles.showMoreButton}
        title="Show more..."
      />
    </div>
  );
}

export default SearchPopup;
