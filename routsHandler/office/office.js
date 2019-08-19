const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const office = (resClient, req) => {
    const metroName = decodeURI(resClient.query.metroName);
    const cityId = resClient.query.cityId;

    axios
        .get(`${URL.SALON_URL}?city=${cityId}`, SONLINESU_HEADERS)
        .then(({ data }) => {
            const result = data.filter(item => item.metro_names.includes(metroName));
            req.send({ result: result })
        })
};

module.exports = office;