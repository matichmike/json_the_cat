const request = require('request');
const argv = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`, (error, response, body) => {
  if (error) {
    return console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log('try to actually type');
    }
    console.log(data);
    console.log(data[0].description);
    console.log(typeof data);
  }
});