const axios = require('axios');
const SONLINESU_HEADERS = require('../../sonline-header');
const URL = require('../../urls');

const category = async (reqClient, res) => {
    const { salonName } = reqClient.body;
    const salonsResponse = await axios.get(`${URL.SALON_URL}`, SONLINESU_HEADERS);
    const salonId = salonsResponse.data.filter(item => item.title == salonName)[0].id;
    const servicesResponse = await axios.get(`https://api.sonline.su/v1/salons/${salonId}/services`, SONLINESU_HEADERS);
    const result = servicesResponse.data.reduce((acc, current) => {
        acc.push(current.title);
        return acc
    }, []);

    res.send({ result, salonId, next: true })

};

module.exports = category;
