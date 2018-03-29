const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const profanities = require('profanities')
require('./util/eventLoader')(client);

//IN PLAM
//HUG, RIP

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on('ready', () => {
  client.user.setGame(`$help | $invite`);
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

const prefix = '$'

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

client.on('message', message => {
  if (message.author.bot) return;
  //if (!message.content.startsWith(config.prefix)) return;

  // let command = message.content.split(" ") [0];
   //command = command.slice(config.prefix.length);
  // console.log(command);

  let args = message.content.split(" ").slice(1);

  if (!points[message.author.id]) points[message.author.id] = {
  points: 0,
  level: 0
};
let userData = points[message.author.id];
userData.points++;

let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
if (curLevel > userData.level) {
  // Level up!
 
  userData.level = curLevel;
  var up = new Discord.RichEmbed();
  up.setTitle(`Level up ${message.author.username}`)
    .setDescription(`New Level: **${curLevel}**`)
    .setColor(`#0000ff`)
    .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(up)
}

if (message.content === '$level') {
  var embed = new Discord.RichEmbed();
  embed.setTitle(`**${message.author.username}**`)
       .setDescription(`Level: **${userData.level}**  \nXP: **${userData.points}**`)
       .setThumbnail(message.author.avatarURL)
       .setColor("#0000ff")
  message.channel.sendEmbed(embed);
}
fs.writeFile('./points.json', JSON.stringify(points), (err) => {
  if (err) console.error(err)
  });

 // client.on('guildMemberAdd', member => {
 //     member.guild.channels.get('422831741556752387').send('**' + member.user.username + '**, bine ai venit pe serverul meu oficial :wink: . Sper sa te distrezi aici');
 // });
 
//  client.on('guildMemberAdd', (guild, member) => {

//   if (guild.id != `422827810239938563`) return;
//        const embed = new Discord.RichEmbed()
//        .setThumbnail(member.user.displayAvatarURL)
//        .addField(`Persoana a intrat!`, member.user.tag + `bine ai venit pe serverul meu oficial 😉 . Sper sa te distrezi aici si sa iti faci multi prieteni noi!`)
//        .setColor(`35f4ot`)
//       client.channels.get(`422831741556752387`).send(embed)
//  });


    // if (guild.id !== `422827810239938563`) return;
    //    const embed = new Discord.RichEmbed()
    //    embed.setThumbnail(member.user.displayAvatarURL)
    //    embed.addField(`Persoana a intrat!`, member.user.tag + `bine ai venit pe serverul meu oficial 😉 . Sper sa te distrezi aici si sa iti faci multi prieteni noi!`)
    //    embed.setColor(`35f4ot`)
    //   client.channels.get(`422831741556752387`).send({embed: embed})
    //    });


    if (message.content === '$help') {
      message.channel.send(`★ Check your DM :mailbox_with_mail:`)
      const embed = new Discord.RichEmbed()
    .setAuthor(`Comanda $help`)
    .setDescription(`Comands are sorted by categories, each category has her own commands.\n=====================`)
    .addField(`<basic commands>`, `(bs$help)\n=====================`)
    .addField(`<moderation commands>`, `(mod$help)\n=====================`)
    .addField(`<fun commands>`, `(fun$help)\n=====================`)
    .addField(`<level commands>`, `(lv$help)\n=====================`)
    .addField(`<developer commands>`, `(dev$help)\n=====================`)
    .addField(`SUPPORT`,
`- Bot invite link: [AICI](https://discordapp.com/oauth2/authorize/?permissions=1543892215&scope=bot&client_id=422821717996601344)
- Server support: [AICI](https://discord.gg/GV4sk3W)`)
//- Donatii: [AICI](https://www.patreon.com/user?u=9817600)`)
    .setFooter(`Developer: HexHunter#3266`)
    .setThumbnail(message.author.displayAvatarURL)
    .setColor(`35f4ot`)
    message.author.sendEmbed(embed);
    }

    if (message.content === 'bs$help') {
      message.channel.send('★ Check your DMs for `Basic Commands`` :mailbox_with_mail:')
      const embed = new Discord.RichEmbed()
      .setAuthor(`bs$help command`)
      .addField(`★Comenzi basic:`,
`$help - help
info$command - this command tells you what another command does
$invite - receive an invite link from the bot
$ping - check the ping of the bot
$avatar - gives you a link to someone's profile picture
$talk - the bot says what you say
$membercount - check how many members are on the server
$info - info about the bot
$perm - see what permissions you have
$serverinfo - information about the server
$userinfo - information about your account
$servers - see on how many server the bot is in`)
    .setThumbnail(message.author.displayAvatarURL)
    .setFooter(`Developer: HexHunter#3266`)
    .setColor(`35f4ot`)
    message.author.sendEmbed(embed);
    }

    if (message.content === 'mod$help') {
      message.channel.send('★ Check your DMs for `Moderation Commands` :mailbox_with_mail:')
      const embed = new Discord.RichEmbed()
      .setAuthor(`Comanda mod$help`)
      .addField(`★Comenzi de moderare:`,
`$ban - restrict access to someone from the server
$kick - kick a person of the server
$mute - mute a person on the server`)
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.author.sendEmbed(embed);
      }

      if (message.content === 'fun$help') {
        message.channel.send('★ Check your DMs for `Fun Commands` :mailbox_with_mail:')
        const embed = new Discord.RichEmbed()
        .setAuthor(`Comanda fun$help`)
        .addField(`★Comenzi de fun:`,
`$8ball - ask the bot a question and he will give a random answer
$cat - the bot sends a picture with a cat
$dog - the bot sends a picture with a dog
$gif - the bot sends a random gif
$kiss - kiss someone
$slap - slap another user
$lenny - the bot sends a lenny face
$meme - the bot sends a meme
$rate - the bot rates your profile picture
$penis - tells you how long is your penis(joke)
$role - shows the roles of the server
$role - see server roles
$ship - See if you match with someone`)
     .setThumbnail(message.author.displayAvatarURL)
     .setFooter(`Developer: HexHunter#3266`)
     .setColor(`35f4ot`)
     message.author.sendEmbed(embed);
     }

     if (message.content === 'lv$help') {
       message.channel.send('★ Check your DMs for `Level Commands` :mailbox_with_mail:')
       const embed = new Discord.RichEmbed()
       .setAuthor(`Comanda lv$help`)
       .addField(`★Comenzi de level:`, `$level - vezi ce level si cat xp ai`)
       .setThumbnail(message.author.displayAvatarURL)
       .setFooter(`Developer: HexHunter#3266`)
       .setColor(`35f4ot`)
       message.author.sendEmbed(embed);
       }

       if (message.content === 'dev$help') {
         message.channel.send('★ Check your DMs for `Developer Commands` :mailbox_with_mail:')
         const embed = new Discord.RichEmbed()
         .setAuthor(`Comanda dev$help`)
         .addField(`★Comenzi de developer:`, `$reload - refresh a command`)
         .setThumbnail(message.author.displayAvatarURL)
         .setFooter(`Developer: HexHunter#3266`)
         .setColor(`35f4ot`)
         message.author.sendEmbed(embed);
         }
//25.38.155.209
         if (message.content === 'info$avatar') {
           const embed = new Discord.RichEmbed()
           .addField(`★Information about avatar command::`, 'comand:This comand give you the possibility see your avatar or from another person using the command : \n`$avatar <user>` to see onether person avatar \n`$avatar` to see your avatar:camera:')
           .setThumbnail(message.author.displayAvatarURL)
           .setFooter(`Developer: HexHunter#3266`)
           .setColor(`35f4ot`)
           message.channel.sendEmbed(embed);
           }

          if (message.content === 'info$ball') {
           const embed = new Discord.RichEmbed()
           .addField(`★Information about 8ball command:`, 'This command makes the bot to respond at your question, is not an automated response , he picks a random response\n `$8ball <question>` :page_with_curl:')
           .setThumbnail(message.author.displayAvatarURL)
           .setFooter(`Developer: HexHunter#3266`)
           .setColor(`35f4ot`)
           message.channel.sendEmbed(embed);
           }

           if (message.content === 'info$ban') {
           const embed = new Discord.RichEmbed()
           .addField(`★Information about ban command:`, 'This command help you to ban one person from your server \n`$ban <user> <reason>` :hammer:')
           .setThumbnail(message.author.displayAvatarURL)
           .setFooter(`Developer: HexHunter#3266`)
           .setColor(`35f4ot`)
           message.channel.sendEmbed(embed);
           }

if (message.content === 'test') {
  const embed = new Discord.RichEmbed()
  .addField('TEST', '<a:DOG:426754975780044800>\n<a:party:426753063139672064>\n<:love:426754561630535680>\n<:HUG:426753889686257665>\n<:ham:426751301750358038>\n<:discord:426751342024065034>\n<:CAT:426755695837446154>\n<:ban:426756193558593547>\n<:BAKA:426756358671564801>\n<a:RUN:426758516234125313>')
  message.channel.sendEmbed(embed);
}


           if (message.content === 'info$cat') {
           const embed = new Discord.RichEmbed()
           .addField(`★Information about cat command:`, ' This command send you a picture with cats \n`$cat` :cat:')
           .setThumbnail(message.author.displayAvatarURL)
           .setFooter(`Developer: HexHunter#3266`)
           .setColor(`35f4ot`)
            message.channel.sendEmbed(embed);
            }

            if (message.content === 'info$feedback') {
              const embed = new Discord.RichEmbed()
              .addField(`★Information about feedback command:`, 'Send a report to the developer about one problem/error/ ideea\n`$feedback <feedback>` :hammer:')
              .setThumbnail(message.author.displayAvatarURL)
              .setFooter(`Developer: HexHunter#3266`)
              .setColor(`35f4ot`)
               message.channel.sendEmbed(embed);
               }

          if (message.content === 'info$dog') {
          const embed = new Discord.RichEmbed()
           .addField(`★Information about dog command:`, 'This command send you a picture with dogs :dog:\n `$dog` :dog:')
           .setThumbnail(message.author.displayAvatarURL)
           .setFooter(`Developer: HexHunter#3266`)
           .setColor(`35f4ot`)
           message.channel.sendEmbed(embed);
             }

           if (message.content === 'info$gif') {
                     const embed = new Discord.RichEmbed()
             .addField(`★Information about gif command:`, 'This command send you a gif after your choice \n `$gif <argument>`\nExemplu: $gif girl')
              .setThumbnail(message.author.displayAvatarURL)
             .setFooter(`Developer: HexHunter#3266`)
             .setColor(`35f4ot`)
             message.channel.sendEmbed(embed);
               }

            if (message.content === 'info$kick') {
             const embed = new Discord.RichEmbed()
              .addField(`★Information about kick command:`, 'This command helps you kick one person out of your server\n `$kick <user> <reason>` :hammer_pick:')
              .setThumbnail(message.author.displayAvatarURL)
              .setFooter(`Developer: HexHunter#3266`)
              .setColor(`35f4ot`)
              message.channel.sendEmbed(embed);
                 }

                 if (message.content === 'info$kiss') {
                  const embed = new Discord.RichEmbed()
                   .addField(`★Information about kiss command:`, 'kiss one person :heart:\n`$kiss <user>` :heart:')
                   .setThumbnail(message.author.displayAvatarURL)
                   .setFooter(`Developer: HexHunter#3266`)
                   .setColor(`35f4ot`)
                   message.channel.sendEmbed(embed);
                      }

        if (message.content === 'info$lenny') {
      const embed = new Discord.RichEmbed()
      .addField(`★Information about lenny command:`, 'You will get one random lenny \n`$lenny` :boom:')
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.channel.sendEmbed(embed);
         }

      if (message.content === 'info$membercount') {
      const embed = new Discord.RichEmbed()
      .addField(`★Information about membercount command:`, 'you will get informations about server members\n`$membercount` :clipboard:')
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.channel.sendEmbed(embed);
          }

      if (message.content === 'info$meme') {
      const embed = new Discord.RichEmbed()
      .addField(`★Information about meme command:`, 'you will get one random meme\n`$meme` :eye_in_speech_bubble:')
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.channel.sendEmbed(embed);
        }

     if (message.content === 'info$mute') {
     const embed = new Discord.RichEmbed()
    .addField(`★Information about mute command:`, 'With this command you can make a person quiet. If you don\'t have mute role he makes one automatically and unmute him automatically.    \n`$mute <user> <timp>` :mute:')
    .setThumbnail(message.author.displayAvatarURL)
    .setFooter(`Developer: HexHunter#3266`)
    .setColor(`35f4ot`)
     message.channel.sendEmbed(embed);
        }

      if (message.content === 'info$penis') {
      const embed = new Discord.RichEmbed()
      .addField(`★Information about penis command:`, 'Shows you how long penis have the person you mentioned\n`$penis <user>` :banana:')
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.channel.sendEmbed(embed);
        }

      if (message.content === 'info$perm') {
      const embed = new Discord.RichEmbed()
      .addField(`★Information about perm command:`, 'Shows you what permissions you have\n`$perm` :thinking:')
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.channel.sendEmbed(embed);
        }

      if (message.content === 'info$ping') {
      const embed = new Discord.RichEmbed()
      .addField(`★Information about ping command:`, 'Shows you what ping you have \n`$ping` :pencil2:')
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.channel.sendEmbed(embed);
        }

      if (message.content === 'info$role') {
      const embed = new Discord.RichEmbed()
      .addField(`★Information about role command:`, 'Shows you what roles the server have\n`$roles` :levitate:')
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(`Developer: HexHunter#3266`)
      .setColor(`35f4ot`)
      message.channel.sendEmbed(embed);
        }

        if (message.content === 'info$roll') {
        const embed = new Discord.RichEmbed()
        .addField(`★Information about roll command:`, 'You play dices with one friend\n`$roll <user>` 🎲')
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Developer: HexHunter#3266`)
        .setColor(`35f4ot`)
        message.channel.sendEmbed(embed);
          }

          if (message.content === 'info$serverinfo') {
          const embed = new Discord.RichEmbed()
          .addField(`★Information about serverinfo command:`, 'See informations about one certain server/group\n`$serverinfo` :checkered_flag:')
          .setThumbnail(message.author.displayAvatarURL)
          .setFooter(`Developer: HexHunter#3266`)
          .setColor(`35f4ot`)
          message.channel.sendEmbed(embed);
            }

            if (message.content === 'info$servers') {
            const embed = new Discord.RichEmbed()
            .addField(`★Information about servers command:`, 'See on how many server the bot is in\n`$servers` :checkered_flag:')
            .setThumbnail(message.author.displayAvatarURL)
            .setFooter(`Developer: HexHunter#3266`)
            .setColor(`35f4ot`)
            message.channel.sendEmbed(embed);
              }

              if (message.content === 'info$ship') {
              const embed = new Discord.RichEmbed()
              .addField(`★Information about ship command:`, 'see how much do you match with a person\n`$ship <user>` :two_hearts:')
              .setThumbnail(message.author.displayAvatarURL)
              .setFooter(`Developer: HexHunter#3266`)
              .setColor(`35f4ot`)
              message.channel.sendEmbed(embed);
                }

                if (message.content === 'info$talk') {
                const embed = new Discord.RichEmbed()
                .addField(`★Information about talk command:`, 'Bot speak what you said\n`$talk <fraza>` :loud_sound:')
                .setThumbnail(message.author.displayAvatarURL)
                .setFooter(`Developer: HexHunter#3266`)
                .setColor(`35f4ot`)
                message.channel.sendEmbed(embed);
                  }

                  if (message.content === 'info$rate') {
                  const embed = new Discord.RichEmbed()
                  .addField(`★Information about rate command:`, 'Bot gives you a rate for your avatar\n`$rate <user>`\n`$rate`')
                  .setThumbnail(message.author.displayAvatarURL)
                  .setFooter(`Developer: HexHunter#3266`)
                  .setColor(`35f4ot`)
                  message.channel.sendEmbed(embed);
                    }

                  if (message.content === 'info$userinfo') {
                  const embed = new Discord.RichEmbed()
                  .addField(`★Information about userinfo command:`, 'See informations about your account\n`$userinfo` :question:')
                  .setThumbnail(message.author.displayAvatarURL)
                  .setFooter(`Developer: HexHunter#3266`)
                  .setColor(`35f4ot`)
                  message.channel.sendEmbed(embed);
                    }

                    if (message.content === 'info$slap') {
                    const embed = new Discord.RichEmbed()
                    .addField(`★Information about slap command:`, 'Slap a person \n`$slap <user>` :checkered_flag:')
                    .setThumbnail(message.author.displayAvatarURL)
                    .setFooter(`Developer: HexHunter#3266`)
                    .setColor(`35f4ot`)
                    message.channel.sendEmbed(embed);
                      }

});

client.elevation = message => {
  let permlvl = 0;
  // const mod_role = message.guild.roles.find('name', settings.modrolename);
  // if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  // const admin_role = message.guild.roles.find('name', settings.adminrolename);
  // if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};

client.on('message', message => {

if (message.content.toLowerCase().includes('https://discord.gg')) {
  if (message.guild.id == '343572980351107077') return;
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`no permission to delete messages`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
message.channel.send(`${message.author} nu ai voie sa promovezi servere pe aici!`)
}

if (message.content.toLowerCase().includes('https://discord.me')) {
  if (message.guild.id == '343572980351107077') return;
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`no permission to delete messages`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
message.channel.send(`${message.author} nu ai voie sa promovezi servere pe aici!`)
}

if (message.content.toLowerCase().includes('https://discord.io')) {
  if (message.guild.id == '343572980351107077') return;
  if (!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`no permission to delete messages`)
  if (message.author.bot) return;
  if (message.author.id === message.guild.owner.user.id) return;
if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
message.delete();
message.channel.send(`${message.author} nu ai voie sa promovezi servere pe aici!`)
}

// process.on('uncaughtException', function(err) {
//          var errored = new Discord.RichEmbed()
//          .addField(`Oops, Avem o eroare aici`, err)
//          client.channels.get(`422831519556698123`).send({embed: errored})
//  });
//
//  process.on('warning', function(warning) {
//         var errored = new Discord.RichEmbed()
//         .addField(`Oops, Avem o problema aici!`, warning.name + `\n\n` + warning.message + `\n\n` + warning.stack)
//         client.channels.get(`422831519556698123`).send({embed: errored})
//  });

});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

// client.on('warn', e => {
//   console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
// });
//
// client.on('error', e => {
//   console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
// });

client.login(process.env.BOT_TOKEN);
