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
