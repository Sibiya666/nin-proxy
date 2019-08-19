const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const confirm = (resClient, reqClient) => {

    const options = {
        ...SONLINESU_HEADERS,
    };

    const xDeviceId = resClient.query.xDeviceId;
    const userPhone = resClient.query.phone;
    const code = resClient.query.code;

    axios.post(
        URL.CONFIRM_REGISTRATION_URL,
        {
            phone: userPhone,
            device: xDeviceId,
            code
        },
        options
    ).then(
        ({ data }) => {
            reqClient.send(
                {
                    result: true,
                    'X-USER-KEY': data.message['X-USER-KEY']

                })
        }
    );
};

module.exports = confirm;