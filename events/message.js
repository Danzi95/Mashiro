const Discord = require('discord.js');
const settings = require('../settings.json');
module.exports = message => {
  const client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.prefix)) return;
  const command = message.content.split(' ')[0].slice(settings.prefix.length);
  const params = message.content.split(' ').slice(1);
  const perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  }else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }else if (command.startsWith('set')){  //making an exeption for the set command
    if (client.commands.has('set')) {
      cmd = client.commands.get('set');
    }
  }

  if(message.channel.type == 'text') message.delete();
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if (cmd.conf.enabled == false) return;
    cmd.run(client, message, params, perms);
  }
};
