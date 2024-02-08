const getDataApi = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          id: character.id,
          name: character.name,
          specie: character.species,
          gender: character.gender,
          house: character.house,
          image: character.image,
          alive: character.alive,
        };
      });

      return cleanData;
    });
};

export default getDataApi;
