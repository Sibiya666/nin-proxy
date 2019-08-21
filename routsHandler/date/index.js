const axios = require('axios');
const SONLINESU_HEADERS = require('../../sonline-header');
const searchMasters = require('../../helpers/searchMasters');

const date = async (req, res) => {
    const { masterName, salonId, minutes, serviceId } = req.body;
    const mastersRespons = await searchMasters(salonId, serviceId);
    const masterId = mastersRespons.find(item => item.title === masterName.split(': ')[1]).id;

    axios
        .get(`https://api.sonline.su/v1/getslots/${salonId}?master=${masterId}&minutes=${minutes}`, SONLINESU_HEADERS)
        .then(({ data }) => {
            const filteredDate = data.filter(element => element.schedule_allow_order.length > 1);
            
            if (filteredDate.length < 1) {
                res.send({
                    error: true,
                    masterId: 0,
                    result: []
                });
                return
            }

            const result = filteredDate.map(item => {
                const date = item.date.split('-');
                return `${date[2]}-${date[1]}`;
            });
         
            res.send({ error: false, result, masterId });
        })
};


module.exports = date;
