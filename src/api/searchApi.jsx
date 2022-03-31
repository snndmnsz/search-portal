import { isContainsTheWord } from "../utils/utils";

export const getSearchItems = (word) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("TESODEVdata"));
      const result = isContainsTheWord(word, data);
      resolve(result);
    }, 300);
  });
};

export const getQuerySearchItems = (word, currentPage, dataPerPage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("TESODEVdata"));
      const result = isContainsTheWord(word, data);
      const pagination = {
        currentPage: currentPage,
        totalPages: Math.ceil(result.length / dataPerPage),
        dataPerPage: dataPerPage,
      };
      resolve({
        data: result.slice(
          (currentPage - 1) * dataPerPage,
          currentPage * dataPerPage
        ),
        pagination: pagination,
      });
    }, 300);
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
    }, 300);
  });
};
