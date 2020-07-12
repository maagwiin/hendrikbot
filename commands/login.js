exports.run = (client, message, args) => {
    const matricula = message.content.toUpperCase();
    if(client.ceca.hasOwnProperty(matricula)){
        us = client.ceca[matricula];
        nome = us.name;
        message.channel.send(`${nome} foi regritrado(a)!!`);
        console.log(us)
    } else{
        message.channel.send("Não achei");
    }
}