module.exports = (guild, user) => {
  guild.defaultChannel.send(`${user.username} a fost banat!`);
};
