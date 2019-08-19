const axios = require('axios');
const SONLINESU_HEADERS = require('../../sonline-header');

const category = (resClient, req) => {
    const salonId = resClient.query.routId;

    axios
        .get(`https://api.sonline.su/v1/salons/${salonId}/services`, SONLINESU_HEADERS)
        .then(({ data }) => {
            req.send({ result: data })
        })
};

module.exports = category;
