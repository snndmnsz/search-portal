import React from "react";
import styles from "./SearchResults.module.scss";
import SearchItem from "../../components/search/searchItem/SearchItem";
import Button from "../../components/ui/button/Button";
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
  {
    id: 4,
    address: "18th Street Brewery",
    place: "Oakley Avenue, Hammond, IN",
    person: "John Doe",
    date: "12/12/2020",
  },
  {
    id: 5,
    address: "18th Street Brewery",
    place: "Oakley Avenue, Hammond, IN",
    person: "John Doe",
    date: "12/12/2020",
  },
];

function SearchResults() {
  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <Button title="Order By" />
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableItems}>
          {DUMMY_DATA.map((item) => (
            <SearchItem key={item.id} {...item} showPersonInfo={true} />
          ))}
        </div>
        <div className={styles.tablePagination}>
          <Button title="Previous" />
          <Button title="1" />
          <Button title="2" />
          <Button title="3" />
          <Button title="4" />
          <Button title="Next" />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
