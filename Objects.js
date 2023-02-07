const players = [
  { id: 1, name: 'Ivan', scorePoints: 100 },
  { id: 2, name: 'Petr', scorePoints: 3600 },
  { id: 3, name: 'Vadim', scorePoints: 3433 },
  { id: 4, name: 'Olga', scorePoints: 5000 },
];

let highScore = [];
let bestScore = 0;
let bestPlayer;

for (let player of players) {
  highScore.push(player.scorePoints);

  console.log(highScore);

  bestScore = Math.max(...highScore);

  if (bestScore == player.scorePoints) {
    bestPlayer = player.name;
  }
}
console.log(bestPlayer);
console.log(bestScore);
