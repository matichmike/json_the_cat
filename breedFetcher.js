const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const breedName = data[0];
    if (breedName) {
      callback(null, breedName.description);
    } else {
      callback('Breed doesnt exist');
    }
  });
};
module.exports = { fetchBreedDescription };