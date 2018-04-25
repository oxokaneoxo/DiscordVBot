const Discord = require('discord.js');
const client = new Discord.Client();
var queuers = []; 

client.on('message', message => {
  client.user.setActivity(" Super Seducer : How to Talk to Girls");

  if(message.content === 'ping') {
    message.reply('Hey, I\'m a reply!')
    .then(console.log("Sent a reply to " + message.author.tag))
    .catch(console.error);
  }
  
  if(message.content === '!JoinQueue') {
    for(var i = 0 , n = queuers.length; i > n; i++) {
      if((queuers[i]) === (message.author.tag)) {
        message.reply(message.author.tag + ' is already in queue.');
        break;
      }
    }
    queuers.push(message.author.tag);
    message.reply('\n' + queuers.toString());
  }
}

client.login("NDM4NTYyMTI3NDk4OTY5MDg4.DcGacQ.b6HwUEWgog4pwOo1hFzKM8ejU9M");