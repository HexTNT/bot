const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You don't have access to this command");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I don't have access to this command");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  let loguri = client.channels.find("name", "mod-logs");

  if(!loguri) return message.reply("Am detectat ca acest server nu are o camera numita mod-logs, asta inseamna ca nu pot da kick");
  if (message.mentions.users.size < 1) return message.reply("Mention someone!");
  if(!reason) return message.reply ("Trebuie sa spui un motiv..");
  if (!message.guild.member(user)
  .kickable) return message.reply("I can't kick him ,it has a higher role then me");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`I kicked ${user.username}`, user.displayAvatarURL)
  .addField("Kick", `**Kicked User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  loguri.send({
    embed : kickembed
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  usage: '$kick <mention> <motiv>'
};
