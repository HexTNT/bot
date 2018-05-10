const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  let i = 0;
  message.guild.members.forEach(member => {
      if(!member.user.bot) i = i + 1;
  });
  let b = 0;
  message.guild.members.forEach(member => {
      if(member.user.bot) b = b + 1;
  });
    const embed = new Discord.RichEmbed()
       .addField('>> Nume <<', message.guild.name, true)
       .addField('>> ID <<', message.guild.id, true)
       .addField('>> Camere <<', message.guild.channels.size, true)
       .addField(">> Camere Text <<", message.guild.channels.filter(ch => ch.type === 'text').size, true)
       .addField(">> Camere Voice <<", message.guild.channels.filter(ch => ch.type === "voice").size, true)
       .addField('>> Membrii <<', message.guild.memberCount, true)
       .addField(`>> Boti <<`, `${b}`, true)
       .addField(`>> Oameni <<`, `${i}`, true)
       .setColor(`35f4ot`)
       .setThumbnail(message.guild.iconURL)
       .setAuthor(message.guild.name, message.guild.iconURL)
       .addField('>> Owner <<', message.guild.owner.user.username, true)
       .addField('>> Regiune <<', message.guild.region, true)
       .addField(">> Facut la <<", message.guild.createdAt, true)
       .setTimestamp()

       message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sinfo'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
};
