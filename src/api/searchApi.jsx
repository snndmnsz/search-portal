import data from '../dummy-data/dummy-data.json'

export const readAllSearch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data);
        }, 1000);
    });
};
