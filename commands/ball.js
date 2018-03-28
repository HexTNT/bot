const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
 const hai = [
  'No',
  'I\'m bored, I\'ll respond tomorrow',
  'Yes',
  'Maybe',
  'Not so sure',
  'Sounds OK',
  'I think not',
  'I love potatoes',
  'I like to speak with you',
  'I\'m afraid to respond you',
  'I\'ve been programmed by HexHunter',
  'Oh boy, don\'t take my smoke, I give you my cigarette'
 ];

 embed.setColor('152ac2');
 embed.setDescription(hai[Math.floor(Math.random()*hai.length)])
 let question = message.content.split(" ").slice(1);
 if (question.length < 1) return message.reply("Ask something")
 message.channel.send({embed});
 }

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: '8ball',
   description: 'Intreaba ceva si botul raspunde',
   usage: '$8ball <intrebarea>'
 };
