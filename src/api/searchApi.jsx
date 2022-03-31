import { convertToJson, isContainsTheWord } from "../utils/utils";

export const getSearchItems = (word) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const array = convertToJson();
      const result = isContainsTheWord(word, array);
      resolve(result);
    }, 300);
  });
};

export const getQuerySearchItems = (word, currentPage, dataPerPage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const array = convertToJson();
      const result = isContainsTheWord(word, array);
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
