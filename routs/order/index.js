const axios = require('axios');
const SONLINESU_HEADERS = require('../../sonline-header');
const URL = require('../../urls');

const time = (req, res) => {
    const { salonId, masterId, serviceId, phone, name, date, time } = req.body;
    const visitTime = `${date} ${time[0]}${time[1]}:${time[3]}${time[4]}:00`;

    const requestBody = {
        salon: salonId,
        sex: "F",
        date: visitTime,
        master: masterId,
        services: [serviceId],
        comment: "api test",
        phone,
        name
    };
    console.log(requestBody)
    axios
        .post(
            URL.ORDER_URL,
            requestBody,
            SONLINESU_HEADERS)
        .then(({ data }) => {  
            console.log(data)
            // res.send({
            //     msg: 'Запись прошла успешно'
            // })
        });
};


module.exports = time;
