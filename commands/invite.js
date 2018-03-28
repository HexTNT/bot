const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  embed.setDescription(`[Click this to invite me on your server](https://discordapp.com/oauth2/authorize/?permissions=1543892215&scope=bot&client_id=422821717996601344)\n[Click ca sa intrii pe serverul meu support](https://discord.gg/NJZMk6s)`)
  embed.setFooter(`Developer: HexHunter#3266`)
  embed.setColor(`35f4ot`)
  message.channel.send({embed: embed});
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'invite',
    description: 'Comanda de invite',
    usage: '$invite'
  };
