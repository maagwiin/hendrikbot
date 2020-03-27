exports.run = (client, message, args) => {
    if(!args || args.length < 1) return message.reply("reiniciar qual comando?");             //retorna se a mensagem vier sem argumento
    const commandName = args[0];                                                              //atribui o primeiro argumento a commandName
    if(!client.commands.has(commandName)) {                                                   //verifica no mapeamento se existe o comando
      return message.reply("o comando não existe.");                                          //retorna se não existir
    }
    delete require.cache[require.resolve(`./${commandName}.js`)];                             //deleta o cache do comando
    client.commands.delete(commandName);                                                      //retira o comando do mapeamento
    const props = require(`./${commandName}.js`);                                             //carrega o arquivo de comando
    client.commands.set(commandName, props);                                                  //armazena o conteudo do comando no enmap
    console.log(`${commandName} reiniciado!`);                                                //informa no console
    message.reply(`o comando ${commandName} foi reiniciado.`);                                //responde a mensagem, confirmando o reset
  };