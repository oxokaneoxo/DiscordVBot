class Queue {
  constructor(players, teams) {
    this.players = players || 6;
    this.teams = [] || [[], []];
    for(var i = 0; i < teams; i++) {
      this.teams.push([]);
    }

    this.pool = [];
  }

  getTeamLength() {
    return this.teams.length;
  }
}

module.exports = Queue;