const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message) => {
  //split uptime into s,m,h,d and if its <9 && in the higher unit add a 0 infront: 4h 08m 53s instead of 4h 8m 53s or 04h 08m 53s
  let upsec = `${Math.floor((client.uptime%60000)/1000)}s`;
  upsec = client.uptime>60000 && ((client.uptime%60000)/1000)<10?`0${upsec}`:upsec;
  let upmin = `${Math.floor((client.uptime%3600000)/60000)}m`;
  upmin = client.uptime>3600000 && ((client.uptime%3600000)/60000)<10?`0${upmin}`:upmin;
  let uphour = `${Math.floor((client.uptime%86400000)/3600000)}h`;
  uphour = client.uptime>86400000 && ((client.uptime%86400000)/3600000)<10?`0${uphour}`:uphour;
  let upday = `${Math.floor(client.uptime/86400000)}d`;
  //depending on how high uptime, it will display only the needed units
  let uptime = client.uptime<60000?`${upsec}`:client.uptime<3600000?`${upmin} ${upsec}`:client.uptime<86400000?`${uphour} ${upmin} ${upsec}`:`${upday} ${uphour} ${upmin} ${upsec}`;

  message.channel.send(`Uptime: \`${uptime}\``)
    .then(msg => {
      if(message.channel.type == 'text'){
        msg.delete(5000);

        const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL)
          .setColor('#43B581')
          .setTitle(message.content)
          .setDescription(`I\'m already running for \`${uptime}\`!`);

        client.channels.get(message.guild.channels.find('name', settings.botchannel).id).send({embed});
      };
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['up'],
  permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'Shows how long my work shift has been already',
  detaileddescription: 'Shows for how long it is in ready state',
  usage: 'uptime'
};
