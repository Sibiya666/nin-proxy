const state = require('../../state');

const time = (clientRes, req) => {
    date = clientRes.date;
    
    const filteredTime = state.filteredDate.filter(element => element.date == date)[0].schedule_allow_order;
    const filteredTimeLength = filteredTime.length;

    if (filteredTimeLength < 1) {
        req.send(
            {
                error: 1,
                msg: `У мастера в этот день  отсутствует слот для записи на эту процедуру`
            })
        return
    }
    
    const result = filteredTime.map(element => element.splice(2, 0, '-'));
    req.send({ result });
    bot.sendMessage(chatId, `Доступное время для записи:`, createTable(filteredTimeLength, filteredTime));
};

const createTimeButton = (filteredTime, i, shift) => {
    shift = shift ? shift : 0;
    return { text: `${filteredTime[i + shift][0]}${filteredTime[i+shift][1]}-${filteredTime[i+shift][2]}${filteredTime[i+shift][3]}`, callback_data: `order/${filteredTime[i+shift]}` }
};

module.exports = time;
