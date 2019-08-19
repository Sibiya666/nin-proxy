const axios = require('axios');


const time = (resClient, reqClient) => {
    const { salonId, masterId, serviceId, userPhone, userName, date, time } = reqClient.query;
    const visitTime = `${date} ${time[0]}${time[1]}:${time[2]}${time[3]}:00`;

    const requestBody = {
        salon: salonId,
        sex: "F",
        date: visitTime,
        master: masterId,
        services: [serviceId],
        comment: "api test",
        phone: userPhone,
        name: userName
    };

    axios
        .post(
            URL.ORDER_URL,
            requestBody,
            model.SONLINESU_HEADERS)
        .then(({ data }) => {  

        });
};


module.exports = time;
