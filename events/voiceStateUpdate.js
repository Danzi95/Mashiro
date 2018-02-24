/** voiceStateUpdate emits every time someone joins/leaves a voiceChannel or gets un/muted or un/deafen
    Here it'll be used to notify when someone joins the channel with mp3-files because the german /tts sucks xD
    Upgrade: Should check if bot is in a channel and use this function on that channels
    When Music function is integrated should use diffrent dispatcher and they should check each other and the music bot should pause
**/

const Discord = require('discord.js');
const settings = require('../settings.json');
//const talkedRecently = new Set();

module.exports = (oldMember, newMember) => {
  if(oldMember.voiceChannelID!='359341483364712450' && newMember.voiceChannelID!='359341483364712450')return; //limiting to lobby
  if((!oldMember.mute && newMember.mute) || (oldMember.mute && !newMember.mute))return; //stopped script-runtrough for mute & deafen
  if(oldMember.user.bot)return; //no bots

  var queue;
  // SET TO JOINING MP3
  if(oldMember.voiceChannelID!='359341483364712450' && newMember.voiceChannelID=='359341483364712450'){
    if(newMember.id=='141180008453373952'){queue='./voice/Danzi_joined.mp3'}else
    if(newMember.id=='359067383933173760'){queue='./voice/RockLP_joined.mp3'}else
    if(newMember.id=='336234007857725450'){queue='./voice/Tomek_joined.mp3'}else
    if(newMember.id=='227487149514162177'){queue='./voice/Vladi_joined.mp3'}else
    if(newMember.id=='281867472498589697'){queue='./voice/Aksis_joined.mp3'}else
    if(newMember.id=='321231056839639050'){queue='./voice/AndyCrit_joined.mp3'}else
    if(newMember.id=='141286475277795329'){queue='./voice/Shaun_joined.mp3'}else
    if(newMember.id=='359056850139742209'){queue='./voice/MissSnappy_joined.mp3'}else
    if(newMember.id=='365973242550157333'){queue='./voice/Skippy_joined.mp3'}else
    {queue='./voice/User_joined.mp3'}
  }else //LEAVING
  if(oldMember.voiceChannelID=='359341483364712450' && newMember.voiceChannelID!='359341483364712450'){
    if(newMember.id=='141180008453373952'){queue='./voice/Danzi_left.mp3'}else
    if(newMember.id=='359067383933173760'){queue='./voice/RockLP_left.mp3'}else
    if(newMember.id=='336234007857725450'){queue='./voice/Tomek_left.mp3'}else
    if(newMember.id=='227487149514162177'){queue='./voice/Vladi_left.mp3'}else
    if(newMember.id=='281867472498589697'){queue='./voice/Aksis_left.mp3'}else
    if(newMember.id=='321231056839639050'){queue='./voice/AndyCrit_left.mp3'}else
    if(newMember.id=='141286475277795329'){queue='./voice/Shaun_left.mp3'}else
    if(newMember.id=='359056850139742209'){queue='./voice/MissSnappy_left.mp3'}else
    if(newMember.id=='365973242550157333'){queue='./voice/Skippy_left.mp3'}else
    {queue='./voice/User_left.mp3'}
  };

  const client = newMember.client;
  //Check if connected, then connect
  if(!client.channels.get('359341483364712450').voiceConnection) client.channels.get('359341483364712450').join().then(connection => {
      if(queue){ //Should prevent to run dispatcher without mp3, dont know if needed because I already covered all cases
        const dispatcher = connection.playFile(queue);
        dispatcher.on('end', ()=> { //gets called if dispatcher has done its job
          delete dispatcher; //this one keeps the dispatcher from hanging up, I guess the dispatcher.destroy() is useless
          dispatcher.destroy();
          //queue.shift(); //still here in case I want try my other way of doing this shit again xD
          //connection.channel.leave();
        });
      }
  })
  .catch(console.error);

/** Piece of code I saw which inspirated me for my own extra AFK feature
    Wont think of implementing this yet

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
};
