const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
exports.run = (client, message, args) => {
  const cat = [
  'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
  'http://www.mhswebdesign.com/wp-content/uploads/2016/09/my-favory-animil.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoehQ9JdKXwQ01_Tnxy4h9FyBfykwvT11jINtiVCfjNZLC-jWrPA',
  'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
  'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/2F33F05F-5F3A-4034-9B5FBFD83DDFDD7D/thul-09958738-11ce-5d21-ac10-92261c59a473.jpg?response-content-disposition=inline',
  'http://www.freakingnews.com/pictures/51000/Cat-1-Mouse-0-51004.jpg',
  'http://cf.kizlarsoruyor.com/a61961/2ec28efa-b472-4001-9bc3-001505148101.jpg',
  'https://cdn.londonandpartners.com/asset/battersea-dogs-and-cats-home-a73191ad4bd6941d0f20db57f11cbe5b.jpg',
  'http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg',
  'https://img.notigatos.es/wp-content/uploads/2016/12/gato-adulto-830x554.jpeg',
  'https://s-media-cache-ak0.pinimg.com/originals/22/b1/a6/22b1a6f40cbc5e6213ce3721e44304b9.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHq8wRE4YOF3zfIHDBUPShfadSqQEN0QoIN9HxJHxo3ypo9gG8WQ',
  'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4EE5F379-193A-44E6-B7B85F3FDCCB4C5B/thul-898a0f98-a438-51c1-8a31-63a603adb37d.jpg?response-content-disposition=inline',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NiDuF6901UAxdcjvKyVxHzX2UWJ4LIJ-HXriy0A_E7cFc7bR',
  'https://cdn.discordapp.com/attachments/414178689664942081/414770189989838851/images.jpg',
  'https://cdn.discordapp.com/attachments/414178689664942081/414773625095323650/images.jpg',
  'https://cdn.discordapp.com/attachments/414178689664942081/414773670196543498/images.jpg',
  'https://cdn.discordapp.com/attachments/414178689664942081/414773706112499712/images.jpg',
  'https://cdn.discordapp.com/attachments/414178689664942081/414773751054336001/images.jpg',
  'https://cdn.discordapp.com/attachments/414178689664942081/414773790426529793/images.jpg',
  'https://cdn.discordapp.com/attachments/414691172137697280/415571435558273027/unknown-5.gif'
  ];
embed.setImage(cat[Math.floor(Math.random() * cat.length)])
.setColor('910dc4');
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: 'Primesti o poza random cu o pisica',
  usage: '$cat'
};
