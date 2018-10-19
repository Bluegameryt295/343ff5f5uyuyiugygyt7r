const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`BlueBot Codes.`,"https://www.twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

lient.on('message', message => {
   if (message.content === "#server") {
       if (!message.channel.guild) return
       var verificationLevel = message.guild.verificationLevel;
       const verificationLevels = ['None','Low','Meduim','High','Extreme'];
       var Y1 = message.guild.createdAt.getFullYear() - 2000
       var M2 = message.guild.createdAt.getMonth()
       var D3 = message.guild.createdAt.getDate()
       const xNiTRoZ = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle(message.guild.name,message.guild.iconURL)
        .addField(':id: Server ID',`${message.guild.id}`,true)
        .addField(':date: Created on',D3 + '.' + M2 + '.' + Y1,true)             
        .addField(':crown: Server Owner',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
        .addField(':busts_in_silhouette: Members ' + ` [${message.guild.memberCount}] `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
        .addField(':speech_balloon: Channels' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
        .addField(':earth_asia: Region',message.guild.region)
        .addField(':ribbon: Server Emojis',`${message.guild.emojis.size}`,true)
        .addField(':construction: Verification Level',`${verificationLevels[message.guild.verificationLevel]}`,true)
        .addField('By : iiBlueGamer295YT| SK .❤#6144')
        message.channel.send({embed:xNiTRoZ});
    }
   });


client.login(process.env.BOT_TOKEN);
