const axios = require('axios');
const URL = require('../../urls');
const SONLINESU_HEADERS = require('../../sonline-header');

const auth = (resClient, reqClient) => {
    
    const userPhone = resClient.query.phone;
    console.log(`userPhone:${userPhone}`)
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