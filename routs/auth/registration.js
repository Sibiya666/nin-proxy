const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');


const registration = (resClient, reqClient) => {
    const { name, phone } = resClient.body;

    axios
        .post(
            URL.CLIENT_REGISTRATION_URL,
            { name, phone },
            SONLINESU_HEADERS
        )
        .then(({ data }) => {
            reqClient.send({
                xDeviceID: data.message['X-Device-ID']
            })
        });
};

module.exports = registration;