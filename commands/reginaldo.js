exports.run = (client, message, args) => {
    message.channel.send("Testando").catch(console.error);
}