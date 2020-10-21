const {MessageEmbed} = require("discord.js");
const rulesch = member.guild.channels.cache.find(ch => ch.name === 'regras');

exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
 
        .setTitle('REGRAS')
        .setColor(0xff0000)
        .setDescription(`Leia todas as regras em ${rulesch}!`);

      message.channel.send(embed).catch(console.error);
}


  
  
  