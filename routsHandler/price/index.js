const searchService = require('../../helpers/searchService');
const searchMasters = require('../../helpers/searchMasters');

const price = async (req, res) => {
    const {
        salonId,
        serviceName,
        categoryName
    } = req.body;

    const services = await searchService(salonId, categoryName);
    const service = services.filter(item => item.title == serviceName)[0];
    const masters = await searchMasters(salonId, service.id);
    const result = masters.map(element => `${element.profession_name} - ${element.name}`);

    res.send({
        result,
        serviceId: service.id,
        serviceInfo: `Цена: ${service.price_range}.\r\nПродолжительность: ${service.minutes_range}\r\nМастера:`,
        minutesRange: service.minutes_range,
        next: true
    })

};

module.exports = price;
