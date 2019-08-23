const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const salons = async (reqClient, res) => {
    const { metroName } = reqClient.body;
    const salonsResponse = await axios.get(`${URL.SALON_URL}`, SONLINESU_HEADERS);
    const salonsFiltered = salonsResponse.data.filter(item => {

        if (item.metro_names) {
            return item.metro_names.includes(metroName)
        }

        return false
    });

    const salons = salonsFiltered.reduce((acc, current) => {
        acc.push(current.title)
        return acc
    }, []);

    res.send({ result: salons })
};

module.exports = salons;