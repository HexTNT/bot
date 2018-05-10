const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
exports.run = (client, message, args) => {


if (message.author.id == '277822215335182337' || message.author.id == '302863729618583555' || message.author.id == '315428735220449280') {
 message.delete();
 embed.setDescription(args.join(" "))
 embed.setColor(`ff0000`);
 embed.setFooter('Bot developer: HexHunter#3266')
  } else {
 return message.channel.send('Nu ai acces la aceasta comanda, doar fondatorii comunitatii au acces!')
 }
 message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anunt',
};