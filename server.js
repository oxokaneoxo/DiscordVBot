const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

// added some dummy players, removing them later
var queue = ["memester69#3333", "chokemedaddy#4444"]; 

// on client load, run this event
client.on('ready', function() {
  console.log("Bot has started, with " + client.users.size + " users, in "
              + client.channels.size + " channels of " + client.guilds.size 
              + " guilds.");
  client.user.setActivity("Super Seducer: How to Talk to Girls");
});

// every time a user sends a message, run this event
client.on('message', function(message) {
  // make sure the bot ignores other bots + itself
  if(message.author.bot) return;

  if(message.content === "ping") {
    message.reply("Hey, I'm a reply!")
    .then(console.log("Sent a reply to " + message.author.tag))
    .catch(console.error);
  }
  
  // if user message is equal to !joinqueue (not case sensitive)
  if(message.content.toLowerCase() === "!joinqueue") {
    joinQueue(message);
  }
});

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
// also we probably shouldn't upload this to github now that I think about it
<<<<<<< HEAD
// Yeah I was thinking the same thing, can we make it call for a file that has the token that we dont upload to github?
client.login("NDM4NTYyMTI3NDk4OTY5MDg4.DcGacQ.b6HwUEWgog4pwOo1hFzKM8ejU9M");
=======
// Yeah I was thinking the same thing, can we make it call for a pile that has the token that we dont upload to github?
client.login(config.token);
>>>>>>> 448d4ef063b40e789a805d8bac05516469382662
