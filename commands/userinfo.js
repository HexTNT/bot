const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
exports.run = async (client, message, args) => {
  if (message.mentions.users.size) return message.channel.send(`You can see only about you`);
 let game = "game"
if (!message.author.presence.game) {
game = "none"
} else {
game = message.author.presence.game.name
}
var embed = new Discord.RichEmbed()
.addField("Username", message.author.username, true)
.addField("Tag", message.author.discriminator, true)
.addField("Game", game,true)
.addField("Status", message.author.presence.status, true)
.addField("Joined At", message.guild.members.find("id", message.author.id).joinedAt)
.addField("Created At", message.author.createdAt, true)
//.setFooter("Do you need help? Add qRobert#6612!", bot.user.avatarURL)
.setColor(`0019ff`)
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Informatii despre contul tau',
  usage: '$userinfo '
};
