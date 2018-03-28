const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
exports.run = (client, message, args) => {
message.channel.sendMessage('*\*Your pemissions are\*\*`\`\`http\n' +
        JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4)+'\n`\`\`');
 }

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'perm',
   usage: '$perm \nNu merge sa vezi permisiunile altor persoane'
 };
