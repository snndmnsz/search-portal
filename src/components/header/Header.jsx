import React from "react";
import { useLocation } from "react-router";
import styles from "./Header.module.scss";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import logo from "../../assets/images/logo.png";
import SearchComponent from "../search/search/SearchComponent";
import { Link } from "react-router-dom";
function Header() {
  const location = useLocation();

  return (
    <header className={styles.headerContainer}>
      {location.pathname === "/" ? (
        <div></div>
      ) : (
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      )}
      {location.pathname === "/" ||
      location.pathname === "/new-search-record" ? (
        <div></div>
      ) : (
        <div className={styles.search}>
          <SearchComponent />
        </div>
      )}
      {location.pathname === "/new-search-record" ? (
        <div></div>
      ) : (
        <Button title="Add new record" onClick={() => console.log("cliked")} />
      )}
    </header>
  );
}

export default Header;
