const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let command;
  let messagecontent = 'wtf';
  let embedcolor;
  if (client.commands.has(args[0])) {
    command = args[0];
  }else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  };
  if (!command) {
    if(args[0] == undefined)return;
    messagecontent = `I cannot find the command: ${args[0]}`;
    embedcolor = '#FAA61A';
  }else{
    messagecontent = `Successfully reloaded: ${command}`;
    embedcolor = '#43B581';
    client.reload(command).catch(e => {
      messagecontent = `Command reload failed: ${command}\nBot-Owner has been notified`;
      console.log(e.stack);
      settings.ownerid.send(`${message.author.tag} in ${message.guild} failed to reload: ${command}\n\`\`\`${e.stack}\`\`\``);
      embedcolor = '#F04747';
    });
  };
  console.log(messagecontent);
  message.channel.send(messagecontent).then(msg => {
    if(message.channel.type == 'text'){
      msg.delete(5000);
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor(`${embedcolor}`)
        .setTitle(message.content)
        .setDescription(messagecontent);
      client.channels.get(message.guild.channels.find('name', settings.botchannel).id).send({embed});
    };
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  detaileddescription: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>'
};
