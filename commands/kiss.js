const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
const kiss = [
'https://cdn.discordapp.com/attachments/345185455429648384/352151843230711811/2824c0eec975eb8e014235169840fc28.jpg',
'https://cdn.discordapp.com/attachments/345185455429648384/352053523816513536/kiss-1.gif',
'https://s-media-cache-ak0.pinimg.com/originals/a0/67/83/a067836d98c8455da2895103a47413da.jpg',
'http://tupian.enterdesk.com/2015/mxy/5/9/6/3.jpg',
'http://s13.sinaimg.cn/middle/4a73092egc0317757777c&690',
'http://img12.funscrape.com/en/christmasanime/62.jpg',
'https://68.media.tumblr.com/e8228a8e3b323baf8fc9e79991780098/tumblr_inline_n8xp71AgVO1qh2dyi.gif',
'https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif',
'https://cdn.discordapp.com/attachments/412696473461850116/414483073099628560/aa8a23c18ffdea7fa070dacb109bbc78.jpg',
'https://cdn.weeb.sh/images/rJrCj6_w-.gif',
'https://cdn.weeb.sh/images/SJ--2auDZ.gif',
'https://cdn.weeb.sh/images/Bkuk26uvb.gif',
'https://cdn.weeb.sh/images/rymvn6_wW.gif',
'https://cdn.weeb.sh/images/r10UnpOPZ.gif',
'https://cdn.weeb.sh/images/S1-KXsh0b.gif',
'https://68.media.tumblr.com/da190de924237d6762f94c59266dfd72/tumblr_oiv4u7nRWI1tty0zlo1_500.gif'
];

  const embed = new Discord.RichEmbed()
  embed.setColor("#FF0000")
  let user = message.mentions.users.first();
  if (message.mentions.users.size <1) return message.channel.send('Mention someone!')
  embed.setDescription(user.username + ` you have been kissed by ` + message.author.username)
  embed.setImage(kiss[Math.floor(Math.random()*kiss.length)])
  message.channel.send({embed: embed})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kiss',
  description: 'Saruti pe cineva',
  usage: '$kiss <mention>'
};
