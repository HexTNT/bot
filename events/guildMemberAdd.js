const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = (guild, member) => {
  //const guild = member.guild;
  //client.on('guildMemberAdd', (guild, member) => {
    if (guild.id != `422827810239938563`) return;
       const embed = new Discord.RichEmbed()
       .setThumbnail(member.user.displayAvatarURL)
       .addField(`Persoana a intrat!`, member.user.tag + `bine ai venit pe serverul meu oficial 😉 . Sper sa te distrezi aici si sa iti faci multi prieteni noi!`)
       .setColor(`35f4ot`)
      client.channels.get(`422831741556752387`).send(embed)
      //  });

  // //guild.defaultChannel.send(`${member.user.username} Bine ai venit pe server`);
  // guild.channels.get(`422831741556752387`).send(member.user + `Bine ai venit la mine pe server :wink:`);
};
