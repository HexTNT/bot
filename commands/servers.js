const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  //embed.setDescription(`Pana acum sunt in ${client.guilds.size} servere`)
  .setDescription(`I'm in ${client.guilds.size} servers`)
  //{(client.guilds.map(guild => guild.name))}
    .setColor('8ce1ff')
    message.channel.send({embed: embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'servers',
  description: 'Arata in cate servere sunt',
  usage: '$servers'
};
