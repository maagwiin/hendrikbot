module.exports = (client) => {
        client.user.setActivity('VOCÊS CHORANDO', { type: 'WATCHING' });            //define atividade do bot
        console.log(`Logged in as ${client.user.tag}!`);               //cosole log do bot_id
}