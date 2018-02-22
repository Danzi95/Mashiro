const settings = require('../settings.json');
const Discord = require('discord.js');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(`Disconnected at ${new Date()}`);

  const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor('#F04747')
    .setTitle(`Disconnected`)
    .setDescription(`Something went wrong :(`);
  client.channels.get(client.channels.find('name', settings.botchannel).id).send({embed}); //needs to be modified for multi-guild bot
};
