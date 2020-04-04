const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=5daf31649d1bb1cb59beb3ff8c6d8b7b&lang=es&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};