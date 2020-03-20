const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
 
        .setTitle('REGRAS')
        .setColor(0xff0000)
        .setDescription('Leia atentamente!');

      message.channel.send(embed).catch(console.error);
}


  
  
  