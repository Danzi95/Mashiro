const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message, args) => {
  let statusarg = args[0]=='idle' || args[0]=='dnd'?args[0]:'online';
  client.user.setActivity({game: {name: 'over you', type: 3}});
  const embed = new Discord.RichEmbed()
    .setColor('#7289DA')//color, Can be a Hex Literal, Hex String, Number, RGB Array or 'DEFAULT', 'RANDOM'
    //.setAuthor(message.author.username, message.author.displayAvatarURL) //name,[icon],[url]
    .setTitle('settings.status') //title
    //.setURL('https://youtu.be/2uhxrPhVO8Y') //url
    .setDescription('statusarg') //description
    .addField(`Test *Test*`,`Test *Test*`+`more`,true); //name, value, [inline]
    //.addBlankField(true) //[inline]
    //.setThumbnail('https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png') //url
    //.setImage(client.user.avatarURL) //url
    //.setFooter('яв' ,'https://cdn.discordapp.com/icons/359070604231573504/0248995e40ad07475fc886db33be567a') //text, [icon]
    //.setTimestamp(); //[timestamp]

  message.author.send({embed});
  //  client.channels.get('359467924194590723').send('Ping?')
  //    .then(msg => {
  //      msg.edit(`Pong!  \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
  //    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'test',
  description: 'Dev does alot of weird tests with me..',
  detaileddescription: 'This area feels weird, it\'s been throbbing hard since that time. When you told me not to go. When you held me so tight. It won\'t go away. Your voice is still in my ear. \nWhat happened to me? Is this.. love? " \n**- Mashiro to **~~Sorata~~** Dev in Episode 12**',
  usage: 'You found an easter egg <3'
};
