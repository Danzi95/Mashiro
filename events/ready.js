const settings = require('../settings.json');
const Discord = require('discord.js');
module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(`Logged in as ${client.user.tag}! <3`);
/** DONT FORGET TO UNCOMMENT!
  const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor('#43B581')
    .setTitle(`has logged in`)
    .setDescription(`I\'m ready to execute your commands`);
  client.channels.get(client.channels.find('name', settings.botchannel).id).send({embed}); //needs to be modified for multi-guild bot
**/
  client.user.setActivity(settings.activity);
  client.user.setStatus(settings.status);
};
