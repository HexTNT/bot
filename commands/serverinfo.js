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
       .addField('>> Server name <<', message.guild.name, true)
       .addField('>> ID <<', message.guild.id, true)
       .addField('>> Channels <<', message.guild.channels.size, true)
       .addField(">> Text Channels <<", message.guild.channels.filter(ch => ch.type === 'text').size, true)
       .addField(">> Voice Channels <<", message.guild.channels.filter(ch => ch.type === "voice").size, true)
       .addField('>> Members <<', message.guild.memberCount, true)
       .addField(`>> Bots <<`, `${b}`, true)
       .addField(`>> Humans <<`, `${i}`, true)
       .setColor(`35f4ot`)
       .setThumbnail(message.guild.iconURL)
       .setAuthor(message.guild.name, message.guild.iconURL)
       .addField('>> Owner <<', message.guild.owner.user.username, true)
       .addField('>> Region <<', message.guild.region, true)
       .addField('>> Roles <<', `$roles`, true)
       .addField(">> Created At <<", message.guild.createdAt, true)
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
  description: 'Vezi informatii despre server',
  usage: '$serverinfo'
};
