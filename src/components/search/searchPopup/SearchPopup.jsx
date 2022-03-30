import React from "react";
import styles from "./SearchPopup.module.scss";
import SearchItem from "../searchItem/SearchItem";
import { Link } from "react-router-dom";
const DUMMY_DATA = [
  {
    id: 1,
    address: "18th Street Brewery",
    place: "Oakley Avenue, Hammond, IN",
    person: "John Doe",
    date: "12/12/2020",
  },
  {
    id: 2,
    address: "18th Street Brewery",
    place: "Oakley Avenue, Hammond, IN",
    person: "John Doe",
    date: "12/12/2020",
  },
  {
    id: 3,
    address: "18th Street Brewery",
    place: "Oakley Avenue, Hammond, IN",
    person: "John Doe",
    date: "12/12/2020",
  },
];

function SearchPopup() {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.items}>
        {DUMMY_DATA.map((item) => (
          <SearchItem key={item.id} {...item} />
        ))}
      </div>
      <Link className={styles.showMore} to="/search-results/asd">
        Show more...
      </Link>
    </div>
  );
}

export default SearchPopup;
