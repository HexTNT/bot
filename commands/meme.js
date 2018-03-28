const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const meme = [
    "https://cdn.discordapp.com/attachments/353984896282132482/408976041147760651/Screenshot_2017-12-16-14-54-17-1.png",
    "https://cdn.discordapp.com/attachments/353984896282132482/408976041944547338/Screenshot_2018-01-11-22-14-31-1.png",
    "https://cdn.discordapp.com/attachments/353984896282132482/408976042406182913/Screenshot_2017-12-16-14-58-17-1.png",
    "https://cdn.discordapp.com/attachments/353984896282132482/408976042963894282/Screenshot_2017-12-04-12-11-52-1.png",
    "https://cdn.discordapp.com/attachments/353984896282132482/408976043689377793/Screenshot_2017-12-04-12-16-55-1.png",
    "https://cdn.discordapp.com/attachments/353984896282132482/408976044218122249/Screenshot_2018-01-11-22-06-19-1.png",
    "https://i.redditmedia.com/ISXepYqoljveNjLsAJD33ZwsXxYtfQTQUI9MXlhnyWE.png?s=0280daa97e877973d0f6dae16885f2ce",
    "https://i.redditmedia.com/7bAHI6H8rIwuDc7OrwlD-b7etvGgrQCtmP2B2CI2jds.jpg?s=d33b3dc414de6f7233fa4011fc012767",
    "http://memecrunch.com/meme/AVBN0/junimea/image.jpg?w=625&c=1",
    "https://akphoto3.ask.fm/187/265/785/-169997000-1tkogns-6n39gk29sq5a5gk/original/10176017_917616051661345_1509605232783000810_n.jpg",
    "http://akphoto4.ask.fm/217/878/906/-219996973-1td0of3-epbsm6q14pmen1k/original/avatar.jpg",
    "http://4.bp.blogspot.com/-wP2wHVaM_AU/Vg5PaIAz3MI/AAAAAAAAABE/-JL-QtI5H6Q/s320/12049599_1636368449961027_7172881022902448105_n.jpg",
    "http://akphoto2.ask.fm/654/793/016/-39996987-1t1841s-5ae6b0mebj808a/original/2.jpg",
    "https://akphoto2.ask.fm/707/993/801/-19996989-1thnalb-4qhbfpla31etg3a/original/Screenshot_201510281629481.png",
    "https://d2k38mlngdbkay.cloudfront.net/S1IR3N8.jpg",
    "http://akphoto3.ask.fm/987/397/194/-199996991-1tl8nge-46cfp45cfai8ia0/original/avatar.jpg",
    "https://d.wattpad.com/story_parts/215008333/images/142e9e777cc5d6fe.jpg",
    "http://www.cespun.eu/wp-content/uploads/2016/09/_d_improd_/imagini-amuzante-scoala2_f_improf_640x555.jpg",
    "https://cdn.discordapp.com/attachments/414691172137697280/414771768079679489/25592047_123316278462183_2280670031966662799_n.png"
  ];

  const embed = new Discord.RichEmbed()
  .setColor('00d2ff')
  .setImage(meme[Math.floor(Math.random() * meme.length)])
  message.channel.send({embed});
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'meme',
 description: 'Primesti un meme',
 usage: ' $meme '
};
