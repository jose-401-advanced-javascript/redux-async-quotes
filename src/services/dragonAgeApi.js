export const getCharacter = () => {
  return fetch('https://dragon-age-api.herokuapp.com/api/v1/characters/random?count=1')
    .then(results => results)
    .then(([{ name, race, photo, appearances }]) => {
      return { name: name, race: race, img: photo, appearances: appearances };
    });
};
