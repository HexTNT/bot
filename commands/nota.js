const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const mentionuser = message.mentions.users.first()
  const embed = new Discord.RichEmbed()
 const rate = [
  ':black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle: (1/10)',
  ':red_circle::red_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle: (2/10)',
  ':red_circle::red_circle::red_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle: (3/10)',
  ':red_circle::red_circle::red_circle::red_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle: (4/10)',
  ':red_circle::red_circle::red_circle::red_circle::red_circle::black_circle::black_circle::black_circle::black_circle::black_circle: (5/10)',
  ':red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::black_circle::black_circle::black_circle::black_circle: (6/10)',
  ':red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::black_circle::black_circle::black_circle: (7/10)',
  ':red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::black_circle::black_circle: (8/10)',
  ':red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::black_circle: (9/10)',
  ':red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle: (10/10)',
  ':black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle::black_circle: (0/10) | For your avatar I can\'t give you even one point!',
 ];

  if (message.mentions.users.size === 0) {
   embed.setDescription(`For your avatar I give` + rate[Math.floor(Math.random()*rate.length)])
   embed.setImage(message.author.displayAvatarURL)
   embed.setColor("0xff0000")
  } else {
   embed.setDescription(`For this avatar I give` + rate[Math.floor(Math.random()*rate.length)])
   embed.setImage(mentionuser.displayAvatarURL)
   embed.setColor("0xff0000")
  }
  message.channel.send({embed: embed})
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'rate',
    description: 'dai o nota',
    usage: '$nota <persoana>'
  };
