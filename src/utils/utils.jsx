import data from "../dummy-data/dummy-data.json";

export const convertToJson = () => {
  const FullData = [];
  for (const items in data.data) {
    const id = items;
    const dataObject = {
      id: id,
      fullName: data.data[items][0],
      company: data.data[items][1],
      email: data.data[items][2],
      date: data.data[items][3],
      country: data.data[items][4],
      city: data.data[items][5],
    };
    FullData.push(dataObject);
  }
  return FullData;
};

export const isContainsTheWord = (word, data) => {
  const regExp = new RegExp(word, "gi");
  const result = [];
  for (const item of data) {
    if (
      item.fullName.match(regExp) ||
      item.company.match(regExp) ||
      item.email.match(regExp) ||
      item.date.match(regExp) ||
      item.country.match(regExp) ||
      item.city.match(regExp)
    ) {
      result.push(item);
    }
  }
  return result;
};
