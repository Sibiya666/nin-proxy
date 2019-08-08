const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const createHttpRequserCity = (url, id) => {
    return axios.get(`${url}?city=${id}`, SONLINESU_HEADERS)
};

const geoHandler = (clientRes, req) => {
    const id = clientRes.query.city;
    Promise.all([
        createHttpRequserCity(URL.SALON_URL, id),
        createHttpRequserCity(URL.GEO_URL, id)
    ]).then(res => {
        const salon = res[0].data;
        let metroStation = res[1].data[0].cities[0].metro;
        req.send(createRequest(metroStation, salon))
    })
};

const createRequest =  (metro, salon) => {
    
    if (metro) {
         data = metro.filter(element => salon.find(item =>
            item.metro.includes(element.id)
        ));
        return { screen: 'metro', data }
    } else {
        data = salon.filter(item => routId == item.city);
        return {screen: 'salon', data}
    }
}

module.exports = geoHandler;