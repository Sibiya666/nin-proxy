const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const auth = (resClient, reqClient) => {
    const userPhone = resClient.query.phone;
    
    // axios.post('https://bots.switchboton.ru/api/bot/action/NrSRZ2J3q/C5DcBQSCMBFRnDlqBsDdBpBFbDxlPDjDlDhDdDDDRBQCLB0BRxChDJD6CXDxDPHB', {
    //     "platform": "tg",
    //     "users": "99790254",
    //     "data": {
    //         "msg": "some msg"
    //     }
    // }).then();
    
    axios
        .get(
            `${URL.SEARCH_USER_BU_PHONE_URL}=${userPhone}`,
            SONLINESU_HEADERS,
        ).then(({ data }) => {

            if (data.length === 0) {
                reqClient.send({ result: 'reg' })
                return
            }

            reqClient.send({ result: 'auth' })
        });
};

module.exports = auth;