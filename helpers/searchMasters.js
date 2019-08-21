const axios = require('axios');
const SONLINESU_HEADERS = require('../sonline-header');

const searchMasters = async (salonId, serviceId) => {
    const mastersResponse = await axios.get(`https://api.sonline.su/v1/salons/${salonId}/masters`, SONLINESU_HEADERS);
    const result = mastersResponse.data.filter(master => master.services.includes(serviceId));
    return result;
};

module.exports = searchMasters;
