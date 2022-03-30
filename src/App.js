import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { readAllSearch } from "./api/searchApi";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import SearchResults from "./pages/search/SearchResults";
import AddNew from "./pages/addNew/AddNew";
import "./App.scss";

function App() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    readAllSearch().then((search) => {
      setSearch(search);
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="search-results/:word"
          element={<SearchResults />}
          exact={true}
        />
        <Route path="new-search-record" element={<AddNew />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
