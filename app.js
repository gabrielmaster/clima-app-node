const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// clima.getClima(18.480000, -69.910004)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;

    } catch (e) {
        throw new Error(`No se puedo determinar el clima de ${ direccion}`);
    }

};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);