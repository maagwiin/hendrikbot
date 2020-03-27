if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

const Discord = require("discord.js");                          //requisição da api do discord
const Enmap = require("enmap");                                 //requisição de database
const fs = require("fs");                                       //requisição do file system
const express = require('express');                             //requisição do modulo express
const expressLayouts = require('express-ejs-layouts');          //requisição do modulo de leyouts ejs
const bodyParser = require('body-parser');                      //requisição body parser
const path = require('path');                                   //requisição do modulo path

const config = require("./config.json");                        //importa o JSON de configuração

const client = new Discord.Client();                            //cria o bot com o nome client
client.commands = new Enmap();                                  //mapeia os comandos do bot
client.config = config;                                         //atribui a configuração ao bot

const app = express();                                          //cria a aplicação web
                                
const PORT = process.env.PORT || 5000;                          //define a porta para a aplicação
                                    
app.use(express.static(path.join(__dirname, 'public')));        //inicio das configurações e rotas web
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', (req, res) => res.render('pages/index'));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));     //fim das configurações e rotas web


fs.readdir("./events/", (err, files) => {                       //lê a pasta events e anexa cada arquivo ao evento apropriado
  if(err) return console.error(err);                            //retorna um possível erro ao console
  files.forEach(file => {                                       //para cada arquivo encontrado
    if(!file.endsWith(".js")) return;                           //ignorar arquivos que não sejam .js
    const event = require(`./events/${file}`);                  //carrega o arquivo de evento
    let eventName = file.split(".")[0];                         //obtem o nome do evento pelo nome do arquivo
    client.on(eventName, event.bind(null, client));             //chama o evento passando todos os argumentos através de client
    delete require.cache[require.resolve(`./events/${file}`)];  //limpa o cache
  });
});


fs.readdir("./commands/", (err, files) => {                     //le a pasta commands e anexa cada arquivo ao comando apropriado
  if (err) return console.error(err);                           //retorna um possível erro ao console
  files.forEach(file => {                                       //para cada arquivo encontrado
    if (!file.endsWith(".js")) return;                          //ignorar arquivos que não sejam .js
    let props = require(`./commands/${file}`);                  //carrega o arquivo de evento
    let commandName = file.split(".")[0];                       //obtem o nome do evento pelo nome do arquivo
    console.log(`Attempting to load command ${commandName}`);   //mostra que o comando foi carregado
    client.commands.set(commandName, props);                    //armazena o conteudo dos comandos no enmap, mas não executa
  });
});


var http = require('https');                                    //loop de requisição web para manter o bot online
setInterval(() => {                                             //define um intervalo
    http.get('https://hendrikbode.herokuapp.com/');             //requisição
}, 1000*60*5);                                                  //a cada 5 minutos


client.login(config.token);                                     //faz o login do bot usando o token