import React from "react";
import { useState } from "react";
import Button from "../../ui/button/Button";
import SearchInput from "../../ui/searchInput/SearchInput";
import styles from "./Search.module.scss";
import SearchPopup from "../searchPopup/SearchPopup";
import { useNavigate, useLocation } from "react-router-dom";
import { getSearchItems } from "../../../api/searchApi";
import { useDispatch } from "react-redux";
import {
  setData,
  clearData,
  setSuggestions,
  clearSuggestions,
} from "../../../redux/slice";

function SearchComponent() {
  const location = useLocation();
  const pathValue = location?.pathname?.split("/")[2];

  const [searchValue, setSearchValue] = useState(
    pathValue ? pathValue.replace(/%20/g, " ") : ""
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length > 1) {
      getSearchItems(searchValue.trim()).then((res) => {
        dispatch(setSuggestions(res));
      });
    }
  };

  if (searchValue.length === 0) {
    dispatch(clearSuggestions());
  }

  const inputFocusHandler = () => {
    setIsPopupOpen(true);
  };

  const inputBlurHandler = () => {
    //TODO: FIX THIS PART
    setIsPopupOpen(false);
  };

  const searchClickHandler = (e) => {
    e.preventDefault();
    if (!onBlur) {
      setIsPopupOpen(false);
      if (searchValue.length > 1) {
        navigate("/search/" + searchValue.trim() + "?page=1");
      }
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
