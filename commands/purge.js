const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
exports.run = (client, message, args) => {
if (message.author.id == '277822215335182337' || message.author.id == '302863729618583555' || message.author.id == '315428735220449280' || message.author.id == '328853317352423424') {
  const messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
 } else {
    message.channel.send('Nu ai acces la comanda')
   }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
};
