const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .addField('Forum', 'Forumul comunitatii MultyPlay este [acesta](http://www.multyplay.ro/forum/index.php)')
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
    name: 'forum',
  };
