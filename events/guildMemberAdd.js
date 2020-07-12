module.exports = (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'boas-vindas');
  const rulesch = member.guild.channels.cache.find(ch => ch.name === 'regras');
  const loginch = member.guild.channels.cache.find(ch => ch.name === 'matricular');

  

  if (!channel) return;

  let r = Math.floor(Math.random()*4);
  switch(r){
    case 0:
      channel.send(`Vem com o Bode, ${member}, seja bem vindo(a)!`);
    break;
    case 1:
      channel.send(`Olha só quem apareceu, ${member}, seja bem vindo(a)!`);
    break;
    case 2:
      channel.send(`Já fez sua lista de prog, ${member}? Seja bem vindo(a)!`);
    break;
    case 3:
      channel.send(`Devia estar estudando cálculo, ${member}, seja bem vindo(a)!`);
    break;
  }

  channel.send(`Leia as regras em ${rulesch} e habilite-se em ${loginch}`)
};
