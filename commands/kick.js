exports.run = (client, message, [mention, ...reason]) => {
    if (message.member._roles.indexOf('689743160330813445') < 0)
      return message.reply("você não pode usar esse comando!");
  
    if (message.mentions.members.size === 0)
      return message.reply("expulsar qual usuário?");
  
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply(" ");
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} foi expulso pois ${reason}.`);
    });
};

