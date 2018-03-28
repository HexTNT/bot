const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const mentionuser = message.mentions.users.first()
 var embed = new Discord.RichEmbed()
if (message.mentions.users.size === 0) {
embed.setDescription(`[Click here for link](${message.author.avatarURL})`)
embed.setImage(message.author.displayAvatarURL)
 embed.setColor("0xff0000")
} else {
 embed.setDescription(`[Click here for link](${mentionuser.avatarURL})`)
 embed.setImage(mentionuser.displayAvatarURL)
 embed.setColor("0xff0000")
}
message.channel.send({embed: embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Vezi avatarul unei persoane',
  usage: '$avatar <persoana>'
};
