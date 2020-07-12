exports.run = (client, message, args) => {
    const matricula = message.content.toUpperCase();
    if(client.ceca.hasOwnProperty(matricula)){
        us = client.ceca[matricula];
        nome = us.name;
        message.channel.send(`${nome} foi registrado(a)!!`);
        console.log(us)
    } else{
        message.channel.send("Nunca nem vi");
    }
}