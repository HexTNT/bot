const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
const client = new Discord.Client()
exports.run = (client, message, args) => {
const Text = [
" ( ͡~ ͜ʖ ͡°) ",
" (๑و•̀ω•́)و ",
" ( ͡°❥ ͡°) ",
' (✪ω✪)/' ,
' (๑ت๑) ',
" ¯( ͠° ͟ʖ °͠ )/¯ ",
' （╯ ͡° ▽ ͡°）╯︵ ┻━┻ ',
" ( ͡°_ʖ ͡°) ",
" (∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ ",
" ( ͡ ͜ ʖ ͡ ) ",
" ( ͡°з ͡°) ",
" ( ͡ ͜ ʖ ͡ ) ",
" ( ͠° ͟ ͜ʖ ͡°) ",
" (ง ͡° ͜ʖ ͡°)=/̵͇̿/'̿'̿̿̿ ̿ ̿ ̿ ",
"ヽ( ͝° ͜ʖ͡°)ﾉ ",
"( ͡°ω ͡°)",
" ( ͡°- ͡°) ",
" ( ͡• ͜ʖ ͡• ) ",
" ( ͡ಠ ʖ̯ ͡ಠ) ",
" ( ͡° ͜ʖ ͡°) "
];
const raspuns = new Discord.RichEmbed()
 .setColor('ea3919')
.setDescription(Text[Math.floor(Math.random()*Text.length)])

 let question = message.content.split(" ").slice(1);
 message.channel.send({embed: raspuns});
 }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lenny',
  description: 'Doar un lenny face',
  usage: '$lenny'
};
