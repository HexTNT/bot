const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.mentions.users.size < 1) return message.reply('Mention someone!')
  //if (message.author.id) return message.reply('Mentioneaza alta persoana, nu te poti juca singur')
   var roll1 = Math.floor(Math.random() * 6) +1;
   var roll2 = Math.floor(Math.random() * 6) +1;
   var roll3 = Math.floor(Math.random() * 6) +1;
   var roll4 = Math.floor(Math.random() * 6) +1;
   //if (message.author.id < 1) return message.reply('Mentioneaza alta persoana').catch(console.error);
   let user = message.mentions.users.first();
   const embed = new Discord.RichEmbed()
 .setAuthor('Roll and roll', 'http://img03.bgstatic-com.de/images/documents/documents/2509/modulecontent/612x0/maplestory_xenon.jpg')
 .setDescription(`${message.author.username}#${message.author.discriminator}` + '\n🎲 ' + roll1 + ' 🎲 ' + roll2 + '\n\n    VS       \n\n' + `${user.username}#${user.discriminator}` +'\n🎲 ' + roll3 + ' 🎲 ' + roll4)
 .setColor(0x971010)
 //.setTimestamp();
  return message.channel.send({embed: embed});
    }

exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [ ],
      permLevel: 0
      };

      exports.help = {
      name: 'roll',
      description: 'Te joci cu zarurile',
      usage: '$roll <mention>'
    };
