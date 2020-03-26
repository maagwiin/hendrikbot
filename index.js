const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'viwes'))
  .set('view wngine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))


client.on('ready', () => {
  client.user.setActivity('pedra em quem tá na rua');
  console.log(`Logged in as ${client.user.tag}!`);
});



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


var http = require('https');
setInterval(() => {
    http.get('https://hendrikbode.herokuapp.com/');
    const life = Math.floor(Math.random()*3);
    switch (life){
      case 0:
        client.channels.cache.find(ch => ch.name === 'testes-do-magnu').send('To vivo');
        break;
      case 1:
        client.channels.cache.find(ch => ch.name === 'testes-do-magnu').send('To vivo 2');
        break;
      case 2:
        client.channels.cache.find(ch => ch.name === 'testes-do-magnu').send('To vivo 3');
        break;
    }
}, 1000*60*5);


client.login(config.token);