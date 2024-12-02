let players = [];

// Function to add a new player
function addPlayer(name, score) {
  players.push({
     name: name,
     score: score
     });
  console.log(`${name} added to the leaderboard with a score of ${score}.`);
}

// Function to display the leaderboard sorted by score
function displayLeaderboard() {
  const sortedPlayers = players.sort((a, b) => b.score - a.score); 
  console.log("Leaderboard:");
  sortedPlayers.forEach((player, index) => {
    console.log(`${index + 1}. ${player.name} - ${player.score}`);
  });
}

// Function to update a player's score
function updateScore(name, newScore) {
  const player = players.find(player => player.name === name);
  if (player) {
    player.score = newScore;
    console.log(`${name}'s score updated to ${newScore}.`);
  } else {
    console.log(`${name} not found in the leaderboard.`);
  }
}

// Function to highlight the top scorer
function highlightTopScorer() {
  if (players.length === 0) {
    console.log("No players in the leaderboard.");
    return;
  }
  const topScorer = players.reduce((max, player) => (player.score > max.score ? player : max));
  console.log(`Top Scorer: ${topScorer.name} with a score of ${topScorer.score}`);
}

addPlayer("Ali", 150);
addPlayer("Babar", 120);
addPlayer("Rizwan", 180);
displayLeaderboard(); 
updateScore("Babar", 200);
displayLeaderboard(); 
highlightTopScorer();
