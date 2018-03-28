const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    //embed.setDescription(`User: ${message.author.tag} (${message.author.id})\nServer: ${message.guild.name} (${}` + `feedback:` + args.join(" ")) 
    embed.setDescription(`# Feedback : ${args.join(" ")}
# User : ${message.author.tag} × ${message.author.id}
# From : ${message.guild.name} × ${message.guild.id} `)
    embed.setTimestamp()
    .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
    message.channel.send('I\'ve been send this feedback successfuly,please wait the developer to respond` :wink:')
        client.channels.get('422871428581294080').send({embed: embed});   
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fb'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'feedback',
    description: 'Raportezi un bug sau dai o idee',
    usage: '$feedback <fraza>'
  };