const settings = require('../settings.json');
const Discord = require('discord.js');

exports.run = (client, message, params) => {
  let helpname;
  const perms = client.elevation(message);
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    let cname;
    var new_array = client.commands.map(c => cname=perms>=c.conf.permLevel?`**${settings.prefix+c.help.name+' '.repeat(longest - c.help.name.length)}**\`${c.help.description}\`\n`:'').join('');
    let embed = new Discord.RichEmbed()
      .setColor('#BA4F65')
      .setTitle('Command List')
      .setDescription(`Use **${settings.prefix}help <commandname>** for more details`)
      .addField(`\` \``,new_array)
      .setFooter('I hope that I could help you <3');
    message.author.send({embed});

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      let embed = new Discord.RichEmbed()
        .setColor('#BA4F65')
        .setTitle(command.help.name)
        .setDescription(`${command.help.detaileddescription}\n\`Usage: ${settings.prefix}${command.help.usage}\`\n\`Aliases: ${command.conf.aliases}\``)
        .setFooter('If you have more questions, ask an admin :3');
      message.author.send({embed});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'cmd', 'cmds', 'command', 'commands'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Exactly what I\'m showing you right now :3',
  detaileddescription: 'Shows a list of all commands if used without argument.\nWith a command as argument, It\'ll show you a little bit more detailed description\nAliases dont work as argument.',
  usage: 'help <command>'
};
