import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { readAllSearch } from "./api/searchApi";
import Home from "./pages/home/Home";
import SearchResults from "./pages/search/SearchResults";
import AddNew from "./pages/addNew/AddNew";

import "./App.css";

function App() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    readAllSearch().then((search) => {
      setSearch(search);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search-results" element={<SearchResults />} />
        <Route path="new-search-record" element={<AddNew />} />
      </Routes>
    </div>
  );
}

export default App;
