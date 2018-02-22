const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message, args) => {
  let dice = args[0]==null?6:parseInt(args[0]);
  let number = (Math.floor(Math.random()*dice)+1);
  message.channel.send(message.author.username+` has rolled a **${number}** with a D`+dice).then(msg => {
    if(message.channel.type == 'text'){
      msg.delete(5000);

      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#43B581')
        .setTitle(message.content)
        .setDescription(message.author.username+` has rolled a ${number} with a D`+dice);

      client.channels.get(message.guild.channels.find('name', settings.botchannel).id).send({embed});
    };
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Roll a dice',
  detaileddescription: 'Roll a dice',
  usage: 'roll <number>'
};
