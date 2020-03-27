module.exports = (client, message) => {
    if (message.author.bot) return;                                                           //ignora todos os bots
    if (message.content.indexOf(client.config.prefix) !== 0) return;                          //ignora as mensagens que não começam com o prefixo

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);      //remove o prefixo, tira espaços no inicio e fim, separa onte há espaços
    const command = args.shift().toLowerCase();                                               //retira o primeiro elemento da array e o retorna, converte para minúscula
    const cmd = client.commands.get(command);                                                 //pega os dados no mapeamento clients.commands
  
    if (!cmd) return;                                                                         //se o comando não existir, ignora
    cmd.run(client, message, args);                                                           //executa o comando
  };