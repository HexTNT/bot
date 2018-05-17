exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`Nu gasesc comanda: ${args[0]}`);
  } else {
    message.channel.send(`Se da reload la: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Am dat reload la: ${command}`);
          })
          .catch(e => {
            m.edit(`Nu am reusit sa dau reload la: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4

};

exports.help = {
  name: 'reload',
};
