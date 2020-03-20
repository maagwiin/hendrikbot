module.exports = (client, member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'boas-vindas');
    if (!channel) return;
    
    const command = 'newmember';

    const cmd = client.commands.get(command);
    if (!cmd) return;
    cmd.run(client, member, channel);
  };