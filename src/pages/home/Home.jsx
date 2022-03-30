import React from "react";
import styles from "./Home.module.scss";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";
import SearchInput from "../../components/ui/searchInput/SearchInput";
import SearchComponent from "../../components/search/search/SearchComponent";
import Slider from "../../components/ui/slider/Slider";
import logo from "../../assets/images/logo.png";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.image} />
        <p className={styles.title}>Search app</p>
      </div>

      <div className={styles.search}>
        <h2 className={styles.title}>Find in records</h2>
        <SearchComponent />
      </div>

      <div className={styles.topNews}>
        <h2 className={styles.topNewsTitle}>Top News</h2>
        <Slider />
      </div>
    </div>
  );
}

export default Home;
