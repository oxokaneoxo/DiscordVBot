const Queue = require("./queue.js")

var queue1 = new Queue("testQueue", 6, 2);

for(var i = 0; i < 6; i++) {
  queue1.addPlayer("Player#" + (i + 1));
}

queue1.defineWinner(queue1.teams[1]);

var queue2 = new Queue("testQueue", 10, 2);

for(var i = 0; i < 10; i++) {
  queue2.addPlayer("Player#" + (i + 1));
}

queue2.defineWinner(queue2.teams[0]);

var arr = [];
arr.push(new Queue("hello", 2, 2));
arr.push(new Queue("olleh", 5, 5));


//console.log(queue1.pool.toString());


/*
var fs = require("fs");
var data = require("./data.json");

// add a new player to the JSON end of array
data.players.push({
  name: "test#1333",
  wins: 5,
  losses: 5
})

// write our entire data object to the file
// can probably find a way to only write the new player, but whatever
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

// print out all of our player data
for(var i = 0; i < data.players.length; i++) {
  console.log("name: " + data.players[i].name);
  console.log("wins: " + data.players[i].wins);
  console.log("losses: " + data.players[i].losses + "\n");
}
*/
