import React from "react";
import styles from "./SearchInput.module.scss";

import Search from "../../../assets/icons/Search.jsx";

function SearchInput({ placeholder, onChange, value }) {
  return (
    <div className={styles.inputContainer}>
      <Search />
      <input
        value={value}
        type="text"
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
