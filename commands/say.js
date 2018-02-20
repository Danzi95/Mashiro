const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message, args) => {
  let whattosay = args.join(' ');
  if(args=='')return;

  message.channel.send(whattosay)
    .then(msg => {
      if(message.channel.type == 'text'){
        msg.delete(30000);
        const embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.displayAvatarURL)
          .setColor('#BA4F65')
          .setDescription(whattosay);
          client.channels.get(message.guild.channels.find('name', settings.botchannel).id).send({embed});
      };
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'say',
  description: 'Should I say something for you?',
  detaileddescription: 'I\'ll send a message as if it would be from me ;)',
  usage: 'say <text>'
};
