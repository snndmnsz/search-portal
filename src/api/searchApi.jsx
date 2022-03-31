import { isContainsTheWord } from "../utils/utils";

export const getSearchItems = (word) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("TESODEVdata"));
      const result = isContainsTheWord(word, data);
      resolve(result);
    }, 200);
  });
};

export const getQuerySearchItems = (
  word,
  currentPage,
  dataPerPage,
  orderBy
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("TESODEVdata"));
      const result = isContainsTheWord(word, data);
      const pagination = {
        currentPage: currentPage,
        totalPages: Math.ceil(result.length / dataPerPage),
        dataPerPage: dataPerPage,
      };
      if (orderBy === "Name ascending") {
        result.sort((a, b) => {
          if (a.fullName < b.fullName) return -1;
          if (a.fullName > b.fullName) return 1;
          return 0;
        });
      } else if (orderBy === "Name descending") {
        result.sort((a, b) => {
          if (a.fullName > b.fullName) return -1;
          if (a.fullName < b.fullName) return 1;
          return 0;
        });
      } else if (orderBy === "Year ascending") {
        result.sort((a, b) => {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          return 0;
        });
      } else if (orderBy === "Year descending") {
        result.sort((a, b) => {
          if (a.date > b.date) return -1;
          if (a.date < b.date) return 1;
          return 0;
        });
      }

      resolve({
        data: result.slice(
          (currentPage - 1) * dataPerPage,
          currentPage * dataPerPage
        ),
        pagination: pagination,
      });
    }, 200);
  });
};

export const addNewElement = (newElement) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("TESODEVdata"));
      data.push(newElement);
      localStorage.removeItem("TESODEVdata");
      localStorage.setItem("TESODEVdata", JSON.stringify(data));
      resolve({
        success: true,
        message: "New element added",
        data: data,
      });
    }, 200);
  });
};
