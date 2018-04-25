const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  client.user.setActivity("Matching");

  if(message.content === 'ping') {
    message.reply("pong")
  }
})

client.login("NDM3ODEzMzM4Mjk1MjM4NjU2.Db7kpg.lwHfaM-2mK_yyJVPGUvUBeqfI_s");