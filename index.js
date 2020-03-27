if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

const Discord = require("discord.js");                          //requisição da api do discord
const Enmap = require("enmap");                                 //requisição de database
const fs = require("fs");                                       //requisição do file system

const client = new Discord.Client();                            //cria o bot com o nome client
const config = require("./config.json");                        //importa o JSON de configuração

client.config = config;                                         //atribui a configuração ao client

const express = require('express');                             //requisição da estrutura para o app
const path = require('path');                                   //requisição do modulo path
const PORT = process.env.PORT || 5000;                          //define a porta para a aplicação

express()                                                       //configuração para manter on no heroku
  .use(express.static(path.join(__dirname, '/public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
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