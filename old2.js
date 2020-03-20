const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
const prefix = config.prefix;

client.on("ready", () => {
  console.log("I am ready!");
});
 

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    switch(command){
        case "ping":
            message.channel.send('Pong!');
        break;
        case "blah":    
            message.channel.send('Meh.');
        break;
        case "reginaldo":
            message.channel.send('Você nunca vai passar!');
        break;
        case "kick": 
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");
            member.kick(reason);
        break;
        case "diga":
            let text = args.join(" ");
            message.delete();
            message.channel.send(text);
        break;
        case "jao":
            message.channel.send('gabs');
        break;
        case "naruto":
            message.channel.send('uzumaki');
        break;
        case "ceolin":
            message.channel.send('Mais 10 minutinhos, só pra terminar');
        break;
    }
});
 
client.login(config.token);

//if(message.author.id !== config.ownerID) return;   restrição