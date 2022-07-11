let fruit = ['🍎', '🍊', '🍎', '🍎', '🍊'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property
// if (fruit === '🍎') {
//   appleShelf.textContent = 'working!';
// } else if (fruit === '🍊') {
//   orangeShelf.textContent = 'testing!';
// }
// function apples() {
//   for (i = 0; i < fruit.length; i++) {}
// }
// apples();
// Scrimba answer
function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === '🍎') {
      appleShelf.textContent += '🍎';
    } else if (fruit[i] === '🍊') {
      orangeShelf.textContent += '🍊';
    }
  }
}
sortFruit();
