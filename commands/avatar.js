exports.run = (client, message, args) => {
    message.channel.send(message.author.displayAvatarURL()).catch(console.error);
}