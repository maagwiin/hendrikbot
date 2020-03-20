const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.channel.send(new Discord.MessageAttachment('./arquivos/calendario2020.pdf', 'CALENDARIO.pdf')).catch(console.error);
}