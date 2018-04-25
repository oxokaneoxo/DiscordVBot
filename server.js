const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  client.user.setActivity("Matching");

  if(message.content === 'ping') {
    message.reply("pong")
  }
})

client.login("NDM4NTYyMTI3NDk4OTY5MDg4.DcGacQ.b6HwUEWgog4pwOo1hFzKM8ejU9M");