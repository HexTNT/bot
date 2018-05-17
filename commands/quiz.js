const Discord = require('discord.js');

const quiz = [
  { q: "Cati ani are serverul MultyPlay", a: ["3"] },
  { q: "Numeste un fondator al serverului", a: ["Vico", "Andreas", "Dead", "Gabitu"] },
  { q: "Care este cea mai jucata sectiune", a: ["skyblock"] },
  { q: "Care este ip-ul serverului", a: ["fun.multyplay.ro"] },
  { q: "De cine am fost facut?", a: ["HexHunter#3266", "HexHunter"] },
  { q: "Unde se tin eventurile?", a: ["skyblock-easy", "skyblock normal", "skyblock-easy si normal"] },
  { q: "Care este fondatorul principal?", a: ["Vico" , "xVico_Ro"] },
  { q: "Cand se fac eventurile", a: ["sambata" , "duminica", " sambata si duminica"] },
  { q: "Pe ce loc este comunitatea MultyPlay", a: ["3", "trei"] }
];

const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};


module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Castigator: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Raspuns corect: \`${winnerMessage.content}\``)
                                 .setFooter(`Intrebare: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('Nu am primit un raspuns la timp')
                                 .setTitle(`Raspunsul corect este: \`${item.a}\``)
                                 .setFooter(`Intrebare: ${item.q}`)
                                })
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'quiz',
  };
