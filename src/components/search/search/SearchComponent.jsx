import React from "react";
import { useState } from "react";
import Button from "../../ui/button/Button";
import SearchInput from "../../ui/searchInput/SearchInput";
import styles from "./Search.module.scss";
import SearchPopup from "../searchPopup/SearchPopup";
import { useNavigate } from "react-router-dom";
import { getSearchItems } from "../../../api/searchApi";
import { useDispatch } from "react-redux";
import {
  setData,
  clearData,
  setSuggestions,
  clearSuggestions,
} from "../../../redux/slice";

function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    getSearchItems(e.target.value).then((res) => {
      dispatch(setSuggestions(res));
    });
  };

  if (searchValue.length === 0) {
    dispatch(clearSuggestions());
  }

  const inputFocusHandler = (e) => {
    setIsPopupOpen(true);
  };

  const inputBlurHandler = (e) => {
    setIsPopupOpen(false);
  };

  const searchClickHandler = (e) => {
    e.preventDefault();
    setIsPopupOpen(false);
    if (searchValue.length > 0) {
      navigate("/search/" + searchValue);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={searchClickHandler} className={styles.search}>
        <SearchInput
          placeholder="Search..."
          onChange={searchHandler}
          value={searchValue}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
        />
        <Button
          onClick={searchClickHandler}
          type="submit"
          title="Search"
          style={{
            height: "50px",
          }}
        />
      </form>
      {isPopupOpen ? (
        searchValue.length > 0 ? (
          <SearchPopup searchValue={searchValue} />
        ) : null
      ) : null}
    </div>
  );
}

export default SearchComponent;
