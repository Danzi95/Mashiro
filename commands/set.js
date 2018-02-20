const Discord = require('discord.js');
const fs = require('fs');
var settings = './settings.json';
var file = require(`.${settings}`);

exports.run = (client, message, args) => {
  let cmd = message.content.split(' ')[0].slice(file.prefix.length+3);
  let changes;
  switch(cmd){
    case 'prefix':
      file.prefix = changes = args[0]==undefined?"~":args[0];
      break;
    case 'status':
      file.status = changes = args[0]=="idle" || args[0]=="dnd" || args[0]=="invisible"?args[0]:"online";
      break;
    case 'activity':
      file.activity = changes = args.join(" ");
      break;
    case 'botchannel':
      file.botchannel = changes = args[0];
      break;
    case 'adminrole':
      file.adminrolename = changes = args.join(" ");
      break;
    case 'modrole':
      file.modrolename = changes = args.join(" ");
      break;
    default:
      return;
  }
  fs.writeFile(settings, JSON.stringify(file, null, 2), function (err){
    if(err) return console.log(err);
    console.log('Changed '+cmd+' to '+changes+' in '+settings);
  });
  message.channel.send(`Changed ${cmd} to ${changes}`).then(msg => {
    if(message.channel.type == 'text')msg.delete(5000);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'set',
  description: 'Changes prefix for all commands',
  detaileddescription: 'Changes the prefix for all commands\nNo argument sets it to ~',
  usage: 'set<prefix> '
};
