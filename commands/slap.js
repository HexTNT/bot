const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
const slap = [
'https://cdn.weeb.sh/images/HkA6mJFP-.gif',
'https://cdn.weeb.sh/images/rJgTQ1tvb.gif',
'https://cdn.weeb.sh/images/rJs7GAttb.gif',
'https://cdn.weeb.sh/images/HJfXM0KYZ.gif',
'https://cdn.weeb.sh/images/H16aQJFvb.gif',
'https://cdn.weeb.sh/images/r1PXzRYtZ.gif',
'https://cdn.weeb.sh/images/S1ylxxc1M.gif',
'https://cdn.weeb.sh/images/SkKn-xc1f.gif'
];

  const embed = new Discord.RichEmbed()
  embed.setColor("#FF0000")
  let user = message.mentions.users.first();
  if (message.mentions.users.size <1) return message.channel.send('Mention someone!')
  embed.setDescription(user.username + ` you have been slaped by ` + message.author.username)
  embed.setImage(slap[Math.floor(Math.random()*slap.length)])
  message.channel.send({embed: embed})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slap',
  description: 'lovesti pe cineva',
  usage: '$slap <mention>'
};
