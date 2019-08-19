const services = function (bot, chatId, routId) {
    const currentCategory = state.category.filter(item => item.id == routId)[0];
    const servicesInCurrentCategory = currentCategory.services ? currentCategory.services[0] : currentCategory;
    state.services = servicesInCurrentCategory.services ? servicesInCurrentCategory.services : [servicesInCurrentCategory];
    bot.sendMessage(chatId, `Услуги`, helpersButton.createRoutParamsButton(state.services, 'price').build());
};

module.exports = services;
