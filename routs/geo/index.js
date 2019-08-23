const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const createHttpRequserCity = (url, id) => {
    return axios.get(`${url}?city=${id}`, SONLINESU_HEADERS)
};

const geoHandler = (clientRes, req) => {
    const cityName = clientRes.body.city;

    axios
        .get(URL.GEO_URL, SONLINESU_HEADERS)
        .then(({ data }) => {
            const filteredCities = data[0].cities.filter(item => item.title === cityName);
            const id = filteredCities[0].id;

            return Promise.all([
                createHttpRequserCity(URL.SALON_URL, id),
                createHttpRequserCity(URL.GEO_URL, id)
            ])
        })
        .then(res => {
            const salon = res[0].data;
            let metroStation = res[1].data[0].cities[0].metro;
            req.send(createRequest(metroStation, salon))
        });
};

const createRequest = (metro, salon) => {

    if (metro && salon.find(item => item.metro)) {
        const result = metro.filter(element => salon.find(item =>
            item.metro.includes(element.id)
        ));
        return {
            screen: 'metro',
            cityId: salon[0].city,
            result
        }
    }

    const result = salon
        .filter(item => salon[0].city == item.city)
        .reduce((acc, current) => {
            acc.push(current.title)
            return acc
        }, []);

    return {
        screen: 'salon',
        cityId: salon[0].city,
        result
    }

}

module.exports = geoHandler;