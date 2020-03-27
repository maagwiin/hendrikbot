module.exports = (client) => {
        client.user.setActivity('pedra em quem tá na rua');            //define atividade do bot
        console.log(`Logged in as ${client.user.tag}!`);               //cosole log do bot_id
}