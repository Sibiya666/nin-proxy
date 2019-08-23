const searchService = require('../../helpers/searchService');

const services = async (reqCLient, res) => {
    const { categoryName, salonId } = reqCLient.body;
    const services =  await searchService(salonId, categoryName);
    
    const result = services.reduce((acc, current) => {
        acc.push(current.title);
        return acc;
    }, [])

    res.send({ result, next: true });
};

module.exports = services;
