const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  const mentionuser = message.mentions.users.first()
  if (message.mentions.users.size < 1) return message.reply('Mentioneaza pe cineva!')
  const embed = new Discord.RichEmbed()
 const ship = [
    '█ 5% ​:heart:​',
    '██ 10% ​:heart:',
    '███ 15% ​:heart:',
    '████ 20% ​:heart:',
    '█████ 25% :heart:',
    '██████ 30% ​​:heart:',
    '███████ ​35% :heart:​',
    '████████ 40% :heart:​',
    '█████████ 45%​:heart:',
    '██████████ 50% ​:heart:',
    '███████████ 55% :heart:',
    '████████████ 60%​:heart:​',
    '█████████████ 65% :heart:​',
    '██████████████ ​70% :heart:​',
    '███████████████ 75% ​:heart:',
    '████████████████ 80%​:heart:',
    '█████████████████ 85%:heart:',
    '██████████████████ 90%:heart:',
    '███████████████████ 95%:heart:',
    '████████████████████ 100%:heart:'
 ];

 embed.setColor('ff0000');
 if (!user) return;
 embed.setDescription(`:heartpulse: Potrivire :heartpulse:\n:small_red_triangle_down:${message.author.username}#${message.author.discriminator}\n:small_red_triangle: ${user.username}#${user.discriminator}\n\n` + ship[Math.floor(Math.random()*ship.length)])
 message.channel.send(embed);
 }

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'ship',
   description: 'Vezi daca te potrivesti cu o persoana',
   usage: '$ship <persoana>'
 };
