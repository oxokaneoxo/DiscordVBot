const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  client.user.setActivity("Matching");

  if(message.content === 'ping') {
    message.reply('Hey, I\'m a reply!')
    .then(console.log("Sent a reply to " + message.author.tag))
    .catch(console.error);
  }
})

client.login("NDM4NTYyMTI3NDk4OTY5MDg4.DcGacQ.b6HwUEWgog4pwOo1hFzKM8ejU9M");