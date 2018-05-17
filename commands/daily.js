const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')

exports.run = async (client, message, args, tools) => {
  const embed = new Discord.RichEmbed()
  let cooldown = 8.64e+7;
  let amount = 250;
  
  let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
  
  if (cooldown - (Date.now() - lastDaily) > 0) {
    let obj = ms(cooldown - (Date.now() - lastDaily)) 
    embed.addField('Asteapta', `Deja ai colectat, asteapta ${obj.hours} ore si ${obj.minutes}minute!`)
  } else {
    embed.addField('Succes', `Ai colectat ${amount}MP`); 
    db.set(`lastDaily_${message.author.id}`, Date.now()) 
    db.add(`userBalance_${message.author.id}`, amount) 

  }
  embed.setColor('ff0000')
  embed.setFooter('Bot developer: HexHunter#3266')
  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'daily',
  };