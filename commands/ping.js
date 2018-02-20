const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message) => {
  message.channel.send(`Pong! \`${client.ping}ms\``).then(msg => {
    if(message.channel.type == 'text'){
      msg.delete(5000);

      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#43B581')
        .setTitle(message.content)
        .setDescription(`Pong! \`${Math.round(client.ping)}ms / ${Math.round(msg.createdTimestamp - message.createdTimestamp)}ms\``);

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
  name: 'ping',
  description: 'My average hertbeat ping & latency if pinged in guild',
  detaileddescription: 'My average hertbeat ping & latency if pinged in guild',
  usage: 'ping'
};
