const axios = require('axios');
const SONLINESU_HEADERS = require('../../sonline-header');
const URL = require('../../urls');
const MongoClient = require('mongodb').MongoClient;
const DB_URL = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(DB_URL);

const addUserOrderInDB = (data, userId) => (error, client) => {
    if (error) {
        return console.log(error)
    }

    const db = client.db("usersdb");
    const collection = db.collection("users");
    const user = {
        id: userId,
        date: data.date,
        msg: `Напоминаем, что ${data.date}, вы записаны к ${data.master.name} на процедуру ${data.services_names}.`
    };

    collection.insertOne(user, (error, result) => {
        if (error) return console.log(error);
        client.close();
    });
};

const createRequestBody = (data) => {
    return {
        salon: data.salonId,
        sex: "F",
        date: createVisitTime(data.date, data, time),
        master: data.masterId,
        services: [data.serviceId],
        comment: "api test",
        phone: data.phone,
        name: data.name
    };
};

const createVisitTime = (date, time) => `${date} ${time[0]}${time[1]}:${time[3]}${time[4]}:00`;

const time = (req, res) => {
    const data = req.body;
    
    axios
        .post(
            URL.ORDER_URL,
            createRequestBody(data ),
            SONLINESU_HEADERS)
        .then(({ data }) => {
            console.log('order')
            mongoClient.connect(addUserOrderInDB(data, data.userId));
            res.send({ msg: 'Запись прошла успешно' });
        });
};

module.exports = time;
