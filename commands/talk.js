const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
exports.run = (client, message, args) => {
  message.delete();
embed.setDescription(`${message.author.username}#${message.author.discriminator} says:\n` + `**`+args.join(" ")+`**` )
embed.setColor(`56t5if`);
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'talk',
  description: 'Vorbeste botul ce spui tu',
  usage: '$talk <vorba>'
};
