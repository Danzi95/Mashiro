const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message, args) => {
  let messagecount = parseInt(args.join(' '));
  if(message.channel.type == 'text' && !isNaN(messagecount)){ //guild & number test
    if(messagecount>99) messagecount=99;
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));

    message.channel.send(`I\'ve removed \`${messagecount}\` messages for you~`).then(msg => {
      msg.delete(5000);
      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#43B581')
        .setTitle(message.content)
        .setDescription(`I\'ve removed \`${messagecount}\` messages for you~`);
      client.channels.get(message.guild.channels.find('name', settings.botchannel).id).send({embed});
    });
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear'],
  permLevel: 2
};

exports.help = {
  name: 'clean',
  description: 'I\'ll remove up to 99 messages for you',
  detaileddescription: 'This command works only in guilds and can remove up to 99 messages!',
  usage: 'clean <number>'
};
