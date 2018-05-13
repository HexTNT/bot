const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on('ready', () => {
  client.user.setActivity(`mp!help`);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} comenzi incarcate.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Comenzi incarcate: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
   props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
 });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

const prefix = 'mp!'


client.elevation = message => {
  let permlvl = 0;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};

client.on('message', message => {
  
 if (message.content === 'mp!boy') {
    const embed = new Discord.RichEmbed() 
    message.guild.member(message.author).addRole(message.guild.roles.find("name", "♨️ | Boys"))
    embed.addField('Boys','Ai primit rank-ul `♨️ | Boys`')
    embed.setColor('ff0000')
  message.channel.send(embed)
  }

  if (message.content === 'mp!girl') {
    const embed = new Discord.RichEmbed() 
    message.guild.member(message.author).addRole(message.guild.roles.find("name", "❤️ | Girls"))
    embed.addField('Girls','Ai primit rank-ul `❤️ | Girls`')
    embed.setColor('ff0000')
  message.channel.send(embed)
  }

if (message.content === 'mp!infograd vip+') {
  const embed = new Discord.RichEmbed()
  .addField('VIP+', `Pret: 2.50EUR
Si are urmatoarele permisiuni:
✓ Prefix tab/chat 
✓ Acces la /Fly
✓ Acces la /Hat
✓ Acces la /Feed
✓ Slot rezervat cand server-u e plin 
✓ Acces la /ModChat
✓ Acces la /kick 
✓ Acces la /Mute
✓ Acces la /Kit VIP
**Il poti cumpara de [aici](http://store.multyplay.ro/category/64867/)**`)
 .setColor('ff0000')
 .setFooter('Bot developer: HexHunter#3266')
 message.channel.send(embed);
};


if (message.content === 'mp!infograd hero') {
  const embed = new Discord.RichEmbed()
  .addField('HERO', `Pret: 10EUR
Si are urmatoarele permisiuni:
✓ Prefix tab/chat 
✓ Acces la /Fly
✓ Acces la /Hat
✓ Acces la /Feed
✓ Slot rezervat cand server-u e plin 
✓ Acces la /ModChat
✓ Acces la /kick 
✓ Acces la /UnMute
✓ Acces la /Kit Hero
✓ Acces la /tp 
✓ Acces la /Gamemode 1
✓ Acces la /Gamemode 0
**Il poti cumpara de [aici](http://store.multyplay.ro/category/64867/)**`)
 .setColor('ff0000')
 .setFooter('Bot developer: HexHunter#3266')
 message.channel.send(embed);
}

if (message.content === 'mp!infograd legend') {
  const embed = new Discord.RichEmbed()
  .addField('LEGEND', `Pret: 15EUR
Si are urmatoarele permisiuni:
✓ Prefix tab/chat 
✓ Acces la /Fly
✓ Acces la /Hat
✓ Acces la /Feed
✓ Slot rezervat cand server-u e plin 
✓ Acces la /ModChat
✓ Acces la /kick 
✓ Acces la /Mute
✓ Acces la /UnMute
✓ Acces la /Kit Legend
✓ Acces la /tp 
✓ Acces la /Gamemode 1
✓ Acces la /Tempban
✓ Acces la /Skull
✓ Acces la /Time set day
✓ Acces la /Vanish
✓ Acces la /Weather clear
✓ Acces la /Top
✓ Acces la /me
**Il poti cumpara de [aici](http://store.multyplay.ro/category/64867/)**`)
 .setColor('ff0000')
 .setFooter('Bot developer: HexHunter#3266')
 message.channel.send(embed);
}

if (message.content === 'mp!infograd supreme') {
  const embed = new Discord.RichEmbed()
  .addField('SUPREME', `Pret: 20EUR
Si are urmatoarele permisiuni:
✓ Prefix tab/chat 
✓ Acces la /Fly
✓ Acces la /Hat
✓ Acces la /Feed
✓ Slot rezervat cand server-u e plin 
✓ Acces la /ModChat
✓ Acces la /kick 
✓ Acces la /Mute
✓ Acces la /UnMute
✓ Acces la /Kit Supreme
✓ Acces la /tp 
✓ Acces la /Gamemode 1
✓ Acces la /Gamemode 0
✓ Acces la /Tempban
✓ Acces la /Skull
✓ Acces la /Time set day
✓ Acces la /Vanish
✓ Acces la /Weather clear
✓ Acces la /Top
✓ Acces la /me
✓ Acces la /god
✓ Acces la /invsee
**Il poti cumpara de [aici](http://store.multyplay.ro/category/64867/)**`)
 .setFooter('Bot developer: HexHunter#3266')
 .setColor('ff0000')
 message.channel.send(embed);
}

if (message.content === 'mp!infograd sponsor') {
  const embed = new Discord.RichEmbed()
  .addField('SPONSOR', `Pret: 37.50EUR
Si are urmatoarele permisiuni:
✓ Prefix tab/chat 
✓ Acces la toate comenzile din essentials
✓ Acces la toate comenzile de ban/unban/mute/kick
✓ Acces la /Giveall (Event doar cu acordu unui Administrator)
✓ Slot rezervat cand server-u e plin 
✓ Acces la /ModChat
✓ Acces la toate kit-urile
**Il poti cumpara de [aici](http://store.multyplay.ro/category/64867/)**`)
 .setColor('ff0000')
 .setFooter('Bot developer: HexHunter#3266')
 message.channel.send(embed);
}

if (message.content === 'mp!infograd manager') {
  const embed = new Discord.RichEmbed()
  .addField('MANAGER', `Pret: 75EUR
Si are urmatoarele permisiuni:
✓ Are acces la toate comenzile + op!
**Il poti cumpara de [aici](http://store.multyplay.ro/category/64867/)**`)
 .setColor('ff0000')
 .setFooter('Bot developer: HexHunter#3266')
 message.channel.send(embed);
}

if (message.content.toLowerCase().includes('https://discord.gg')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} nu ai voie sa promovezi servere pe aici!`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}

if (message.content.toLowerCase().includes('https://discord.me')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} nu ai voie sa promovezi servere pe aici!`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}

  if (message.content.toLowerCase().includes('www.youtube.com')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} nu e permis asa ceva pe aici!`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}
  
  if (message.content.toLowerCase().includes('youtu.be')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} nu e permis asa ceva pe aici!`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}
  
if (message.content.toLowerCase().includes('https://discord.io')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} nu ai voie sa promovezi servere pe aici!`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}

if (message.content.toLowerCase().includes('pula')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} cum iti permiti sa vorbesti asa`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}

if (message.content.toLowerCase().includes('coaie')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} cum iti permiti sa vorbesti asa`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}

if (message.content.toLowerCase().includes('pizda')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} cum iti permiti sa vorbesti asa`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}

if (message.content.toLowerCase().includes('handicapat')) {
  const culoare = new Discord.RichEmbed()
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Nu am acces sa sterg mesaje`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
culoare.addField('NU!', `${message.author} cum iti permiti sa vorbesti asa`)
culoare.setColor('ff0000')
message.channel.send(culoare);
}

});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;


client.login(settings.token);
