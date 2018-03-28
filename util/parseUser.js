exports.parseUser = (message, user) => {
  const member = message.guild.member(user) || null;
  if (user.id === message.author.id) {
    return message.channel.send('Nu poti face asta pe tine, de ce ai incerca?');
  } else if (member) {
    if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('Persoana mentionata are un grad mai mare ca al tau.');
  }
  return user;
};
