import React from "react";
import styles from "./SearchInput.module.scss";

import Search from "../../../assets/icons/Search.jsx";

function SearchInput({ placeholder, onChange, value, onFocus,onBlur, ...props }) {
  return (
    <div className={styles.inputContainer}>
      <Search />
      <input
        value={value}
        type="text"
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
