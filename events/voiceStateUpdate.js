const Discord = require('discord.js');
const settings = require('../settings.json');
//const talkedRecently = new Set();
var queue=[];

module.exports = (oldMember, newMember) => {
  const client = newMember.client;
  if(oldMember.voiceChannelID==null && newMember.voiceChannelID=='359341483364712450'){
    if(newMember.id=='141180008453373952')queue.push('../voice/Danzi.mp3');
    queue.push('../voice/entered_this_channel.mp3');
  };
  queue.push('../voice/Danzi.mp3');
  queue.push('../voice/entered_this_channel.mp3');

  if(!client.channels.get('359341483364712450').voiceConnection) client.channels.get('359341483364712450').join().then(connection => {
    while(queue.length>0){
        let dispatcher = connection.playFile(queue[1]);
        dispatcher.on('end', ()=> {queue.shift()});
        dispatcher = connection.playFile(queue[0]);
    }
  })
  .catch(console.error);
  /**
  if(!client.channels.get('359341483364712450').voiceConnection) client.channels.get('359341483364712450').join().then(connection => {
    if(oldMember.voiceChannelID==null && newMember.voiceChannelID=='359341483364712450'){
      dispatcher = connection.playFile('../voice/Roland.mp3');
      dispatcher.on('end', end => {delete dispatcher});
      dispatcher = connection.playFile('../voice/entered_this_channel.mp3');
      dispatcher.on('end', end => {delete dispatcher});
    };
  })
  .catch(console.error);
**/

/**
  if (talkedRecently.has(msg.author.id)) {
          msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
  } else {

         // the user can type the command ... your command code goes here :)

      // Adds the user to the set so that they can't talk for a minute
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(msg.author.id);
      }, 60000);
  }
**/

		if (oldMember.id === '141180008453373952' && newMember.id === '141180008453373952') {
      console.log('oldMember: '+oldMember.username);

		};

};
