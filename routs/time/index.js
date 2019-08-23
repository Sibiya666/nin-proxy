const axios = require('axios');
const SONLINESU_HEADERS = require('../../sonline-header');

const time = async (req, res) => {
    const { date, masterId, salonId, minutes } = req.body;
    let correctDate = `${date.substr(2, 3)}-${date.substr(0, 2)}`;
    const dateResponse = await axios.get(`https://api.sonline.su/v1/getslots/${salonId}?master=${masterId}&minutes=${minutes}`, SONLINESU_HEADERS);
    const filteredDate = dateResponse.data.filter(element => element.schedule_allow_order.length > 1);
    const filteredTime = filteredDate.filter(element => element.date.includes(correctDate))[0];
    correctDate = filteredTime.date;
    const time = filteredTime.schedule_allow_order;

    if (time.length < 1) {
        res.send(
            {
                error: true,
                result: [],
                date: 0
            })
        return
    }

    const result = time.map(element => {
        const str = [...element];
        const newStr = str.splice(2, 0, '-');

        return str.join('');
    });

    res.send({
        error: false,
        result,
        date: correctDate
    })
};



module.exports = time;
