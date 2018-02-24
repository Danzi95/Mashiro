const Discord = require('discord.js');
const settings = require('../settings.json');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(`Reconnecting at ${new Date()}`);

  const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor('#FAA61A')
    .setTitle(`Reconnecting..`)
    .setDescription(`I\'m back!`);
  client.channels.get(client.channels.find('name', settings.botchannel).id).send({embed}); //needs to be modified for multi-guild bot
  
  client.user.setActivity(settings.activity);
  client.user.setStatus(settings.status);
};
