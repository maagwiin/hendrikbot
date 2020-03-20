const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.channel.send(new Discord.MessageAttachment('./arquivos/organtigo.png', '')).catch(console.error);
}