import React from "react";
import { useState } from "react";
import Button from "../../ui/button/Button";
import SearchInput from "../../ui/searchInput/SearchInput";
import styles from "./Search.module.scss";
import SearchPopup from "../searchPopup/SearchPopup";
import { Link } from "react-router-dom";

function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <SearchInput
          placeholder="Search..."
          onChange={searchHandler}
          value={searchValue}
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
      {searchValue.length > 0 && <SearchPopup />}
      {/* <SearchPopup /> */}
    </div>
  );
}

export default SearchComponent;
