class Queue {
  constructor(name, players, teams) {
    this.name = name;
    this.players = players || 6;
    this.teams = [];

    for(var i = 0; i < teams; i++) {
      this.teams.push([]);
    }

    this.open = false; // is the queue open or closed?
    this.pool = [];
    this.winner = [];
  }

  get teamSize() {
    return this.teams.length;
  }

  // add a player to the pool and return true, return false if they were already in the pool
  addPlayer(playerTag) {
    if(this.pool.length > 0) {
      for(var i = 0, n = this.pool.length; i < n; i++) {
        if(this.pool[i] === playerTag) {
          console.log("Player is already in queue")
          return false;
        }
      }
    }
    console.log("Adding player: " + playerTag);
    this.pool.push(playerTag);
    if(this.queueIsFull()) this.makeTeams();
    return true;
  }

  // remove a player from the pool, return true if they were removed, false if they were not.
  removePlayer(playerTag) {
    if(this.pool.length > 0) {
      for(var i = 0, n = this.pool.length; i < n; i++) {
        if(this.pool[i] === playerTag) {
          this.pool.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
  
  openQueue() {
    this.open = true;
  }

  queueIsFull() {
    if(this.pool.length >= this.players) {
      return true;
    }
  }

  shufflePool() {
    for (var i = this.pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.pool[i];
      this.pool[i] = this.pool[j];
      this.pool[j] = temp;
    }
  }

  makeTeams() {
    this.shufflePool();
    console.log("queue is done queueing");
    console.log("Making teams...");
    var tmpPool = this.pool.slice();
    for(var i = 0; i < this.teams.length; i++) {
      var stuff = this.pool.length/this.teams.length
      this.teams[i].push(tmpPool.splice(0, Math.floor(stuff)));
    }
  
    for(var i = 0; i < this.teams.length; i++) {
      console.log("Team " + (i+1) + " : " + this.teams[i].toString());
    }
  }

  defineWinner(team) {
    this.winner = team;
    console.log("\n" + this.winner + " has won")
  }
}

module.exports = Queue;