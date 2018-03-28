const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  embed.addField('>> Roles <<', '``' + message.guild.roles.map(r => r.name).join('\n') + '``')
  embed.setColor(`16d9f5`)
  //embed.setTimestamp()
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'roles',
  description: 'Vezi gradele serverului',
  usage: '$role'
};
