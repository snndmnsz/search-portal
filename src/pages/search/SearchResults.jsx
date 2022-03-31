import React, { useEffect, useState } from "react";
import styles from "./SearchResults.module.scss";
import SearchItem from "../../components/search/searchItem/SearchItem";
import Button from "../../components/ui/button/Button";
import DropDown from "../../components/ui/dropDown/DropDown";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchItems, getQuerySearchItems } from "../../api/searchApi";
import { setData, clearData } from "../../redux/slice";
function SearchResults() {
  const { searchValue } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const { currentPage, dataPerPage } = useSelector(
    (state) => state.searchApi.pagination
  );

  useEffect(() => {
    dispatch(clearData());
    // getSearchItems(searchValue).then((res) => {
    //   dispatch(setData(res));
    // });

    getQuerySearchItems(searchValue, currentPage, dataPerPage).then((res) => {
      console.log(res.pagination);
      dispatch(setData(res.data));
    });
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <DropDown
          items={[
            "Name ascending",
            "Name descending",
            "Year ascending",
            "Year descending",
          ]}
          defaultItem="Name ascending"
        />
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableItems}>
          {data.map((item) => (
            <SearchItem key={item.id} {...item} showPersonInfo={true} />
          ))}
        </div>
        <div className={styles.tablePagination}>
          <Button title="Previous" />
          <Button title="1" />
          <Button title="2" />
          {"..."}
          <Button title="3" />
          <Button title="4" />
          <Button title="Next" />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
