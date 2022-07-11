const fighters = [
  '🐉',
  '🐥',
  '🐊',
  '💩',
  '🦍',
  '🐢',
  '🐩',
  '🦭',
  '🦀',
  '🐝',
  '🤖',
  '🐘',
  '🐸',
  '🕷',
  '🐆',
  '🦕',
  '🦁',
];
const stageEl = document.getElementById('stage');
const fightButton = document.getElementById('fightButton');
fightButton.addEventListener('click', function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button,
  // pick two random emoji fighters and display them
  // i.e. "🦀 vs 🐢" in the "stage" <div>.
  let randomEmoji = Math.floor(Math.random() * 17);
  let secondRandomEmoji = Math.floor(Math.random() * 17);
  stageEl.textContent =
    fighters[randomEmoji] + ' VS ' + fighters[secondRandomEmoji];
  // Scrimba answer
  // const randomIndexOne = Math.floor(Math.random() * fighters.length);
  // const randomIndexTwo = Math.floor(Math.random() * fighters.length);
  // stageEl.textContent = `${fighters[randomIndexOne]} vs ${fighters[randomIndexTwo]}`;
});
