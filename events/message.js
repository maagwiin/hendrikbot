module.exports = (client, message) => {
    if (message.author.bot) return;  

    if (message.channel === client.channels.cache.find(ch => ch.name === 'matricular')){
      const cmd = client.commands.get('login');
      cmd.run(client, message);
      return;
    } 
                                                           //ignora todos os bots
    if (message.content.indexOf(client.config.prefix) !== 0) return;                          //ignora as mensagens que não começam com o prefixo

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);      //remove o prefixo, tira espaços no inicio e fim, separa onte há espaços
    const command = args.shift().toLowerCase();                                               //retira o primeiro elemento da array e o retorna, converte para minúscula
    const cmd = client.commands.get(command);                                                 //pega os dados no mapeamento clients.commands
  
    if (!cmd){
      message.channel.send(`${message.author} o comando "${command}" não existe!`);
      return;
    }

    cmd.run(client, message, args);                                                           //executa o comando
  };