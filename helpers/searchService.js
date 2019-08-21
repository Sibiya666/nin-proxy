const axios = require('axios');
const SONLINESU_HEADERS = require('../sonline-header');

const searchServices = async (salonId, categoryName) => {

    const categoryResponse = await axios.get(`https://api.sonline.su/v1/salons/${salonId}/services`, SONLINESU_HEADERS);
    const currentCategory = categoryResponse.data.filter(item => item.title === categoryName)[0];

    const servicesInCurrentCategory = currentCategory.services
        ? currentCategory.services[0]
        : currentCategory;


    const services = servicesInCurrentCategory.services
        ? servicesInCurrentCategory.services
        : [servicesInCurrentCategory];

    return services

};

module.exports = searchServices;