const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {
    const rulesch = message.guild.channels.cache.find(ch => ch.name === 'regras');
    const embed = new MessageEmbed()
 
        .setTitle('REGRAS')
        .setColor(0xff0000)
        .setDescription(`Leia todas as regras em ${rulesch}!`);

      message.channel.send(embed).catch(console.error);
}


  
  
  