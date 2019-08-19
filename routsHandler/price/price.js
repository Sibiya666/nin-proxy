const axios = require('axios');

const price = (resClient, req) => {
    const { salonId, serviceId } = resClient.query.salonId;
    const service = state.services.filter(item => item.id == serviceId)[0];

    state.service = service;
    
    axios
        .get(`https://api.sonline.su/v1/salons/${salonId}/masters`, model.SONLINESU_HEADERS)
        .then(({ data }) => {
            const masters = data
                .filter(master => master.services.includes(+serviceId))
                .map(element => `${element.profession_name} ${element.name}`)
            
            res.send({
                masters,
                infoService: `Цена: ${service.price_range}.\r\nПродолжительность: ${service.minutes_range}\r\nМастера:`
            })
        })
};

module.exports = price;
