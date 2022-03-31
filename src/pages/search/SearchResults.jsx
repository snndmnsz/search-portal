import React, { useEffect, useState } from "react";
import styles from "./SearchResults.module.scss";
import SearchItem from "../../components/search/searchItem/SearchItem";
import Button from "../../components/ui/button/Button";
import DropDown from "../../components/ui/dropDown/DropDown";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getSearchItems, getQuerySearchItems } from "../../api/searchApi";
import { setData, clearData } from "../../redux/slice";

function SearchResults() {
  const { searchValue } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  let params = new URLSearchParams(location.search);
  const [pagination, setPagination] = useState({
    currentPage: params.get("page") ? +params.get("page") : 1,
    dataPerPage: 5,
    totalPage: 0,
  });

  useEffect(() => {
    dispatch(clearData());

    getQuerySearchItems(
      searchValue,
      pagination.currentPage,
      pagination.dataPerPage
    ).then((res) => {
      const { currentPage, dataPerPage, totalPages } = res.pagination;
      setPagination({
        currentPage: +currentPage,
        dataPerPage: +dataPerPage,
        totalPages: +totalPages,
      });
      setData(res.data);
    });
  }, [searchValue]);

  const changePage = (page) => {
    getQuerySearchItems(searchValue, page, pagination.dataPerPage).then(
      (res) => {
        setPagination(res.pagination);
        setData(res.data);
      }
    );
  };

  const renderPagination = (totalbutton) => {
    const buttons = [];
    for (let i = 1; i <= totalbutton; i++) {
      buttons.push(
        <Button
          key={i}
          title={i}
          style={{
            backgroundColor: pagination.currentPage === i && "#204080",
            color: pagination.currentPage === i && "#fff",
          }}
          className={styles.paginationButton}
          onClick={() => {
            navigate(`/search/${searchValue}?page=${i}`);
            setPagination({ ...pagination, currentPage: i });
            changePage(i);
          }}
        />
      );
    }
    return buttons;
  };

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
          <Button
            title="Previous"
            onClick={() => {
              navigate(
                `/search/${searchValue}?page=${+pagination.currentPage - 1}`
              );
              setPagination({
                ...pagination,
                currentPage: +pagination.currentPage - 1,
              });
              changePage(+pagination.currentPage - 1);
            }}
            disabled={+pagination.currentPage === 1}
          />
          {renderPagination(pagination.totalPages)}
          <Button
            title="Next"
            onClick={() => {
              navigate(
                `/search/${searchValue}?page=${+pagination.currentPage + 1}`
              );
              setPagination({
                ...pagination,
                currentPage: +pagination.currentPage + 1,
              });
              changePage(+pagination.currentPage + 1);
            }}
            disabled={+pagination.currentPage === +pagination.totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
