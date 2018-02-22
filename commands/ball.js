const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message, args) => {
  if (args=='')return;
  let question = args.join(" ");
  let answer = ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don\'t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'];
  let n = Math.floor((Math.random()*answer.length)+0);
  message.channel.send(question+`\n`+answer[n]).then(msg => {
    if(message.channel.type == 'text'){
      msg.delete(20000);
      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#43B581')
        .setTitle(question)
        .setDescription(answer[n]);
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
  name: '8ball',
  description: 'The Magic 8-Ball is a device used for fortune-telling or seeking advice',
  detaileddescription: 'The Magic 8-Ball is a device used for fortune-telling or seeking advice',
  usage: '8ball <question>'
};
