const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args, tools) => {
  const embed = new Discord.RichEmbed()
  let user = message.mentions.users.first() || message.author;
  let balance = await db.fetch(`userBalance_${user.id}`);
  if (balance === null) balance = 0;
  embed.addField('Bani', `${user.username} - Bani: ${balance}MP`)
  embed.setColor('ff0000')
  embed.setFooter('Bot developer: HexHunter#3266')
  message.channel.send(embed)
}  

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
 
  exports.help = {
    name: 'money',
  };