const axios = require('axios');
const SONLINESU_HEADERS = require('../../sonline-header');

const masters = (clientRes, req) => {
    const masterId = clientRes.quer.masterId;
    const salonId = clientRes.quer.salonId;
    const minutes = clientRes.quer.minutes;

    axios
        .get(`https://api.sonline.su/v1/getslots/${salonId}?master=${masterId}&minutes=${minutes}`, SONLINESU_HEADERS)
        .then(({ data }) => {
            const filteredDate = data.filter(element => element.schedule_allow_order.length > 1);

            if (filteredDate.length < 1) {
                req.send({
                    error: 1,
                    msg: `У мастера отсутствует запись в ближайшие дни. Пожалуйста выберите другого специалиста.`
                });
                return
            }

            const mappedDate = filteredDate.map(item => {
                const date = item.date.split('-');
                return `${date[2]}-${date[1]}`;
            });

            req.send({ result: mappedDate.date });
        })
};


module.exports = masters;
