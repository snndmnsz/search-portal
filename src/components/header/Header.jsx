import React from "react";
import { useLocation } from "react-router";
import styles from "./Header.module.scss";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import logo from "../../assets/images/logo.png";
import SearchComponent from "../search/search/SearchComponent";
import { Link } from "react-router-dom";
import Back from "../../assets/icons/Back";

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
        <Link to="/new-search-record">
          <Button
            title="Add new record"
            onClick={() => console.log("cliked")}
          />
        </Link>
      )}
      {location.pathname === "/new-search-record" ? (
        <Link to="/" className={styles.back}>
          <Back />
          <p>Return to List Page</p>
        </Link>
      ) : null}
    </header>
  );
}

export default Header;
