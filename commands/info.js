const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setColor('#BA4F65')
    .setTitle('Information')
    .setDescription(`This Bot was created as a little project with which I wanted to:\n`+
                    `** a)** practice programming\n`+
                    `** b)** minimize bot and commands spam\n`+
                    `** c)** have a custom & private bot for better music streaming performance on my guild\n\u200B\n`+
                    `That\'s why this bot isn\'t designed for multiple guilds.\n`+
                    `I got my main knowledge from this [YT-Playlist](https://www.youtube.com/watch?v=rVfjZrqoQ7o&list=PLR2_rarYLHfg6ZJqq0WTMmI9uLcd7_GRO) and the [documentation](https://discord.js.org/#/docs/main/stable/general/welcome).\n`+
                    `\`An Idiot\'s Guide\` stopped at \`ep#10p2\`, \nso from that point on all changes are my crappy junk-code💩🤖\n\n`+
                    `I started to work on this bot on february/2018\nand hope that someone picks my code up and turns it in something even greater.\n`+
                    `[Here\'s Mashiros GitHub](https://github.com/Danzi95/Mashiro), contact me if you used my code & want to share yours :)`)
                    .setFooter('Danzi#1181'  ,client.users.get(`141180008453373952`).displayAvatarURL);
  message.author.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Some informations about me',
  detaileddescription: 'Not very useful and random informations',
  usage: 'info'
};
