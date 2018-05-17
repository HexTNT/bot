const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .addField('Help', `
       mp!fondatori - Vezi fondatorii comunitatii si informatii despre ei
mp!forum - Primesti link de la forum
mp!server - Primesti informatii despre serverul de minecraft
mp!store - Vezi informatii despre store
mp!serverinfo - informatii despre serverul de discord
mp!ship - Vezi daca te potrivesti cu cineva
mp!anunt -  Comanda de dat anunturi (rezervata pentru fondatori)
mp!membercount - Vezi numarul persoanelor de pe server
mp!boy - Primesti grad de baiat
mp!girl - Primesti grad de fata
mp!quiz - Rezolvi un quiz
mp!ascii <text> - transformi un text in ascii text
mp!infograd VIP+ - Vezi la ce are acces gradul VIP+
mp!infograd HERO - Vezi la ce are acces gradul HERO
mp!infograd LEGEND - Vezi la ce are acces gradul LEGEND
mp!infograd SUPREME - Vezi la ce are acces gradul SUPREME
mp!infograd SPONSOR - Vezi la ce are acces gradul SPONSOR
mp!infograd MANAGER - Vezi la ce are acces gradul MANAGER`)
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
    name: 'help',
  };
