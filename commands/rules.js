const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setColor('#BA4F65')
    .setTitle('Rules')
    .setDescription(``)
    .addField(`\` \``,`**1. **You will not upload, post, discuss, request, or link to anything that violates local or German law.`)
    .addField(`\` \``,`**2. **\`#lobby\` is to be considered "work safe". Violators may be kicked and their posts removed.`)
    .addField(`\` \``,`**3. **All kind of adult content belongs on \`#nsfw\``)
    .addField(`\` \``,`**4. **Complaining about **яв** (its policies, moderation, etc) may result in post deletion and a ban.`)
    .addField(`\` \``,`**5. **Evading your ban will result in a permanent one. Instead, wait and appeal it! \`Danzi#1181\``)
    .addField(`\` \``,`**6. **No spamming or flooding of any kind. No intentionally evading spam or post filters.`)
    .addField(`\` \``,`**7. **Impersonating a **яв** administrator, moderator, or janitor is strictly forbidden.`)
    .addField(`\` \``,`**8. **The use of scrapers, bots, or other automated posting or downloading scripts is prohibited. Users may also not post from proxies, VPNs, or Tor exit nodes.`)
    .addField(`\` \``,`**9. **Do not upload images containing additional data such as embedded sounds, documents, archives, etc.`);
  message.author.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rules',
  description: 'Server rules',
  detaileddescription: 'Rules ripoff from 4chan',
  usage: 'rules'
};
