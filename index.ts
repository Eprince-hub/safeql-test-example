import getAnimals from './database/animals';

console.log(
  getAnimals()
    .then((data) => {
      console.log(data);
    })
    .catch(() => {}),
);
