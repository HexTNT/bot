const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .addField('Help', `
       mp!fondatori - Vezi fondatorii comunitatii si informatii despre ei
mp!forum - Primesti link de la forum
mp!server - Primesti informatii despre serverul de minecraft
mp!store - Vezi informatii despre store
mp!ship - Vezi daca te potrivesti cu cineva
mp!anunt -  Comanda de dat anunturi (rezervata pentru fondatori)
mp!membercount - Vezi numarul persoanelor de pe server
==========================================================
mp!infograd VIP+ - Vezi la ce are acces gradul VIP+ si cat costa
mp!infograd HERO - Vezi la ce are acces gradul HERO si cat costa
mp!infograd LEGEND - Vezi la ce are acces gradul LEGEND si cat costa
mp!infograd SUPREME - Vezi la ce are acces gradul SUPREME si cat costa
mp!infograd SPONSOR - Vezi la ce are acces gradul SPONSOR si cat costa
mp!infograd MANAGER - Vezi la ce are acces gradul MANAGER si cat costa`)
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
    name: 'help',
  };
