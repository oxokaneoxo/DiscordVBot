const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

// **TODO** add multiple queue functionality

// added some dummy players, removing them later
var queue = ["memester69#3333", "chokemedaddy#4444", "memester69#3334", "chokemedaddy#4443"];
var queueFlag = false;
var players = 0;
var teams = [];

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
  
  // make sure the bot ignores everything without our prefix
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ping") {
    message.reply("Hey, I'm a reply!")
    .then(console.log("Sent a reply to " + message.author.tag))
    .catch(console.error);
  }
  
  // if user message is equal to joinqueue (not case sensitive)
  if(command === "startqueue") startQueue(message, args[0], args[1]);
  if(command === "joinqueue"  && queueFlag ===  true) joinQueue(message);
  if(command === "viewqueue"  && queueFlag ===  true) viewQueue(message);
  if(command === "clearqueue") clearQueue(message);
  if(command === "help") help(message);
});

function help(message) {
  message.channel.send(
    "**!startqueue**: Create a new queue. To create a queue for 4 people and that has 2 teams you would type !joinqueue 4 2." +
    "\n**!joinqueue**: Join a currently running queue" +
    "\n**!viewqueue**: View all players in a currently running queue" +
    "\n**!clearqueue**: Clear a currently running queue"
  );
}

function startQueue(message, _players, _teams) {
  if(queueFlag === true) {
    message.channel.send("There is already an active queue.\nRun !viewqueue to see active queue\nor run !clearqueue to clear active queue");
    return;
  }
  _players = parseInt(_players,10);
  // parseInt returns NaN if it isnt passed an number. It gets rid of letters if added after a Number. 
  if(!isNaN(_players)) {
    players = _players;
    for(var i = 0; i < _teams; i++) {
      teams.push([]);
    }
    queueFlag = true;
    message.channel.send("Starting a queue with " + players + " players and " + teams.length + " teams.");
  }
  else {
    startQueueNotInt(message);
  }
}

function joinQueue(message) {
  // only check if player is in queue if there are players in the queue
  if(queue.length > 0) {
    for(var i = 0, n = queue.length; i < n; i++) {
      if(queue[i] === message.author.tag) {
        // message.channel.send lets us send without replying to a user. Changed to message.reply, I think it looks better. 
        message.reply("you are already in the queue.");

        // return 0 to break out of the function if player is in queue already
        return;
      }
    }
  }
  // add player to the queue
  queue.push(message.author.tag);
  message.reply("you have been added to the queue. " + queue.length + " players are in queue.");

  if(queue.length >= players) {
    message.channel.send("queue is now full");
    divideTeams(message);
    return;
  }
}

function clearQueue(message) {
  if(queue.length > 0) queue = [];
  players = 0;
  teams = [];
  queueFlag = false;
  message.channel.send("Queue has been cleared");
}

function viewQueue(message) {
  message.channel.send(queue.toString());
}

function divideTeams(message) {
  //var leftSide = queue.splice(0, Math.floor(arrayName.length / teams.length));
  var localQueue = queue;
  var queueLength = localQueue.length
  for(var i = 0; i < teams.length; i++) {
    teams[i].push(localQueue.splice(0, Math.floor(queueLength / teams.length)));
  }

  for(var i = 0; i < teams.length; i++) {
    message.channel.send(teams[i].toString() + '\n');
  }
}

function startQueueNotInt(message) {
  message.reply("Please use numbers for total teams and player count. \n Example: !startqueue 6 2. Player count would be 6 and team size would be 2");
  return;
}

// Log in to the discord bot with the token
// also we probably shouldn't upload this to github now that I think about it
// Yeah I was thinking the same thing, can we make it call for a pile that has the token that we dont upload to github?
client.login(config.token);