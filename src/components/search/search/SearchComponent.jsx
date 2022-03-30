import React from "react";
import { useState } from "react";
import Button from "../../ui/button/Button";
import SearchInput from "../../ui/searchInput/SearchInput";
import styles from "./Search.module.scss";
import SearchPopup from "../searchPopup/SearchPopup";
import { Link } from "react-router-dom";

function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const inputFocusHandler = (e) => {
    setIsPopupOpen(true);
  };

  const inputBlurHandler = (e) => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <SearchInput
          placeholder="Search..."
          onChange={searchHandler}
          value={searchValue}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
        />
        <Link to="/search-results/asd">
          <Button
            title="Search"
            style={{
              height: "50px",
            }}
          />
        </Link>
      </div>
      {isPopupOpen ? searchValue.length > 0 ? <SearchPopup /> : null : null}
    </div>
  );
}

export default SearchComponent;
