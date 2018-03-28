const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const got = require(`got`);
const api = 'dc6zaTOxFJmzC';

    exports.run = async (client, message, args) => {
          //const args = msg.content.split(" ").slice(1);
        if (args.length < 1) return message.channel.send(`Put an argument!`, {code: "py"})
        const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
        if (!res || !res.body || !res.body.data) return message.channel.send("I don't find a gif", {code: "py"})

        const embed = new Discord.RichEmbed()
        .setImage(res.body.data.image_url)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)

        message.channel.send({embed: embed});
}

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'gif',
        description: 'Primesti un gif',
        usage: '$gif <nume>'
      };
