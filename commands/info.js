const Discord = require('discord.js');
exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
message.channel.send({
  embed: {
    color: 9232895,
    fields: [
      {
        name: 'About Bot',
        value: 'This bot is more for fun, moderation comands probably have few bugs that I didn\'t discovered, I\'m new in moderation comands'
      },
      {
        name: 'Credits',
        value: 'Developer - HexHunter#3266 \nHost Provider - xGammingPro#7339\nHelper - Emil 😻#3524\nHelper - ByKeR#0690 \nTester - Pingu.#8867'
      }
    ]
  }
});
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'info',
    description: 'Primesti informatii despre bot',
}
