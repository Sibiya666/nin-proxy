const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const registration = (resClient, reqClient) => {
    const userName = resClient.query.name;
    const userPhone = resClient.query.phone;

    axios
        .post(
            URL.CLIENT_REGISTRATION_URL,
            {
                name: userName,
                phone: userPhone,
            },
            SONLINESU_HEADERS
        )
        .then(({ data }) => {
            reqClient.send({
                'X-Device-ID': data.message['X-Device-ID']
            })
        })
};

module.exports = registration;