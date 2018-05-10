const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .addField('Store', 'Magazinul comunitatii MultyPlay este [acesta](http://store.multyplay.ro/)\nDin acest magazin poti cumpara grade globale pe server, kit-uri, pana si upgrade-uri\nGradele pe care le poti cumpara sunt: `VIP+` , `HERO`, `LEGEND`, `SUPREME`, `SPONSOR`, `MANAGER`\nPentru mai multe informatii despre grade poti accesa comanda `mp!infograd <grad>`')
    .setColor('ff0000')
    .setFooter('Bot developer: HexHunter#3266')
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['shop', 'magazin'],
    permLevel: 0
  };
 
  exports.help = {
    name: 'store',
  };