const Discord = require('discord.js');
const client = new Discord.Client();

// Added some dummy players, removing them later
var queue = ["memester69#3333", "chokemedaddy#4444"]; 

/*
// wait for client to finish loading then throw the 'message' event
// every time a user sends a message, store that message in the message var
*/
client.on('message', message => {
  client.user.setActivity("Super Seducer: How to Talk to Girls");

  if(message.content === "ping") {
    message.reply("Hey, I'm a reply!")
    .then(console.log("Sent a reply to " + message.author.tag))
    .catch(console.error);
  }
  
  // if user message is equal to !joinqueue (not case sensitive)
  if(message.content.toLowerCase() === "!joinqueue") {
    joinQueue(message);
  }
})

function joinQueue(message) {
  // only check if player is in queue if there are players in the queue
  if(queue.length > 0) {
    for(var i = 0, n = queue.length; i < n; i++) {
      if(queue[i] === message.author.tag) {
        // message.channel.send lets us send without replying to a user
        message.channel.send(message.author.tag + " is already in the queue.");

        // return 0 to break out of the function if player is in queue already
        return 0;
      }
    }
  }
  // add player to the queue
  queue.push(message.author.tag);
  message.reply("you have been added to the queue. " + queue.length + " players are in queue.");
}

// Log in to the discord bot with the token
client.login("NDM4NTYyMTI3NDk4OTY5MDg4.DcGacQ.b6HwUEWgog4pwOo1hFzKM8ejU9M");