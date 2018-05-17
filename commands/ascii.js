const figlet = require('figlet');

exports.run = async (client, message, args, tools) => {
  
  if(args.join(' ').length > 14) return message.channel.send('Maxuimul este de 14 caractere') 
  if (!args.join(' ')) return message.channel.send('Pune un test! Foloseste: mp!ascii <text>').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ascii',
  };