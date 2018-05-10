const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .addField('Server', 'Serverul MultyPlay este al 3-lea cel mai mare server de minecraft din Romania atingand suma de +100 de persoane constant pe server avand ca Fondator principal pe `xVicoBT_RO`, comunitatea serverului avand 3 ani \nIP-UL serverului de minecraft este `fun.multyplay.ro`')
    .setColor('ff0000')
    .setFooter('Bot developer: HexHunter#3266')
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
 
  exports.help = {
    name: 'server',
  };
