const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  let i = 0;
  message.guild.members.forEach(member => {
      if(!member.user.bot) i = i + 1;
  });
  let b = 0;
  message.guild.members.forEach(member => {
      if(member.user.bot) b = b + 1;
  });
embed.addField('Members', message.guild.memberCount, true)
embed.addField(`Bots`, `${b}`)
embed.addField(`Humans`, `${i}`)
embed.setColor(`#FFD700`)
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'membercount',
  description: 'Vezi persoanele pe server',
  usage: '$membercount'
};
