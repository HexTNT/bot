const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
const client = new Discord.Client()
exports.run = (client, message, args) => {
const Penis = [
'8===D (3 cm)',
'8======D (8 cm)',
'8=========D (12 cm)',
'8===============D (22,5 cm)',
'8=====================D (30 cm)'
];
if (message.mentions.users.size < 1) return message.reply('Mention someone!')
const raspuns = new Discord.RichEmbed()
.setColor('ea3919')
.setDescription(Penis[Math.floor(Math.random()*Penis.length)])
message.channel.send("Your penis", {embed: raspuns});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'penis',
description: 'Vezi cat esti tu sau altcineva in penis',
usage: '$penis'
};
