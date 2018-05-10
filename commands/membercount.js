const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  let i = 0;
  message.guild.members.forEach(member => {
      if(!member.user.bot) i = i + 1;
  });

  let o = 0;
  message.guild.members.forEach(member => {
    if (member.user.bot) return;
    if (member.user.presence.status == "online") o++
    if (member.user.presence.status == "dnd") o++
    if (member.user.presence.status == "idle") o++
  });

  let b = 0;
  message.guild.members.forEach(member => {
      if(member.user.bot) b = b + 1;
  });

embed.addField('Membrii', message.guild.memberCount, true)
embed.addField(`Boti`, `${b}`)
embed.addField(`Persoane`, `${o}/${i}`)
embed.setColor(`ff0000`)
embed.setFooter('Bot developer: HexHunter#3266')
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
};
