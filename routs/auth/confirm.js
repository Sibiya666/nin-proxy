const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');
const USER_ACTIVATED = 200;

const confirm = (resClient, reqClient) => {
    const { xDeviceId, phone, code } = resClient.body;
    const options = { ...SONLINESU_HEADERS };
    options.headers['X-Device-ID'] = xDeviceId;

    axios
        .post(
            URL.CONFIRM_REGISTRATION_URL,
            {
                device: xDeviceId,
                phone, code
            },
            options
        )
        .then(
            ({ data }) => {

                if (data.message.code !== USER_ACTIVATED) {
                    reqClient.send({ result: false });
                    return
                }

                reqClient.send({
                        result: true,
                        'X-USER-KEY': data.message['X-USER-KEY']
                    });

            }
        );
};

module.exports = confirm;