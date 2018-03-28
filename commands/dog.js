const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const dog = [
  'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Shake-shiver-and-tremble-Why-dogs-do-it.jpg?itok=yvOUgQeL',
  'https://4.bp.blogspot.com/-ybhlXmhoV1c/VikkNu8FiJI/AAAAAAAABg8/zyjK2A93Le8/s320/8%2BYorkshire%2BTerrier.jpg',
  'https://www.bluecross.org.uk/sites/default/files/assets/images/20311lpr.jpg',
  'https://i.ytimg.com/vi/KY4IzMcjX3Y/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3XlohVnAuq3GgPQaekL176eqBBhQNJ_k7S4CpC1hjeUHJeZ-',
  'https://s-media-cache-ak0.pinimg.com/736x/86/fc/1b/86fc1b5f34d81fb98974bd35567ff4b6--jack-russell-puppies-jack-russell-terrier.jpg',
  'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Introducing-puppy-to-older-dogs.jpg?itok=h7E7CqZK',
  'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/FF6E818D-4828-46DE-A1E4B850D5977C58/thul-571a0332-3d53-51bc-8189-e2a4771f3470.jpg?response-content-disposition=inline',
  'https://t1.ea.ltmcdn.com/pt/images/2/4/6/img_linguagem_do_cachorro_e_os_sinais_de_calma_guia_completo_21642_paso_0_600.jpg',
  'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/DA746CFE-B4A4-43C0-A02F8BAF7BC6CE20/thul-51a71b71-3799-5e48-8a84-5b08c9efa9cf.jpg?response-content-disposition=inline',
  'https://s-media-cache-ak0.pinimg.com/736x/02/d7/01/02d701b77a984a1b6cf970e6eb0468e1--teacup-maltipoo-maltipoo-puppies.jpg',
  'http://cdn3-www.dogtime.com/assets/uploads/2017/03/training-two-dogs.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNhxIS87bhGe5_neXTpZZq-_OVYU6sTgHTitExrOCKA-JrGDX',
  'https://sites.psu.edu/siowfa16/files/2016/10/dog3-17woz29.jpg',
  'http://www.dognotebook.com/wp-content/uploads/2014/02/AmericanPitBullTerrier.jpg.pagespeed.ce.5e01Q6nnbM.jpg',
  'https://jordandogtraining.com.au/wp-content/uploads/2016/02/Cane-Toad-and-Dogs-Jordan-Dog-Training.jpg',
  'https://www.petdrugsonline.co.uk/images/page-headers/dogs-master-header',
  'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/pets_taking_care_of_puppy__slideshow/493x335_pets_taking_care_of_puppy__slideshow.jpg?resize=400px:*&output-quality=50',
  'https://vmirechudes.com/wp-content/uploads/2014/10/1_result35.jpg',
  'https://www.classtools.net/_FAKEBOOK/saved/1226/huWs5B/coverImage.jpg'
  ];
     const embed = new Discord.RichEmbed()
     .setColor('00d2ff')
     .setImage(dog[Math.floor(Math.random() * dog.length)])
     message.channel.send({embed});
   }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'dog',
    description: 'Primesti o poza random cu un caine',
    usage: ' $dog \nHAM'
  };
