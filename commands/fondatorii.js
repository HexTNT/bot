const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .addField('Fondatori', 
  `[xVicoBT_RO](https://hastebin.com/jesojuhamu)
[Gabitu](https://hastebin.com/equxixujal.php)
[Andreas](https://hastebin.com/zumatayawe.pas)`)
 .setFooter('Bot developer: HexHunter#3266')
 .setColor('ff0000')
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
 
  exports.help = {
    name: 'fondatori',
  };
