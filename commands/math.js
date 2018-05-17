const Discord = require('discord.js'),
      math = require('math-expression-evaluator');

exports.run = (client, message, args, tools) => {
    const embed = new Discord.RichEmbed()
    .setColor("ff0000");
    if (!args[0]) {
        embed.addField(`Gresit!`, `Ce vrei sa calculez?
        \nEx: **5+5 (adunare)
            \n5-5 (scadere)
            \n5*5 (inmultire)
            \n5/5 (impartire)**`);
        return message.channel.send(embed); 
    }
  let result;
 try {
   result = math.eval(args.join(' '));  
    } catch (e) { 
   result = 'Eroare: "Ceva a mers gresit, te rog sa il contactezi pe `HexHunter#3266`"'; 
    }

embed.addField('Calcul', `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField('Rezultat', `\`\`\`js\n${result}\`\`\``);
 message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'math',
  };