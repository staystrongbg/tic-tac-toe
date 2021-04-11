//math random upis za AI?
//goal: tuck everything in factory or module
//no global code

const container = document.querySelector('.container');
const one = document.getElementById('0');
const two = document.getElementById('1');
const three = document.getElementById('2');
const four = document.getElementById('3');
const five = document.getElementById('4');
const six = document.getElementById('5');
const seven = document.getElementById('6');
const eight = document.getElementById('7');
const nine = document.getElementById('8');
const tic = document.querySelector('.tic');
const tac = document.querySelector('.tac');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const grid = document.querySelectorAll('.grid');
const overlay = document.querySelector('.overlay');

let gameboard = [one, two, three, four, five, six, seven, eight, nine];
let player = '';
let ai = '';

//iife
(function chooseWeapon() {
  tic.addEventListener(
    'click',
    (weaponTic = () => {
      showHide();
      player = 'x';
      ai = 'o';
    })
  );
  tac.addEventListener(
    'click',
    (weaponTac = () => {
      showHide();
      player = 'o';
      ai = 'x';
    })
  );
  gameboard.forEach((cell) => {
    cell.addEventListener('click', stepHere);
  });
  overlay.addEventListener('click', restartGame);
})();

function showHide() {
  container.classList.add('show');
  header.style.display = 'none';
  document.body.style.placeItems = 'center';
}

function stepHere(e) {
  let gridCell = e.currentTarget;
  gridCell.childElementCount === 0
    ? (gridCell.innerHTML = /*html*/ `<span style='color:black' class='sign'>${player}</span>`)
    : null;
  // console.log(gridCell);
  aiPlay();
  checkForWinner();
}

function restartGame() {
  window.location.reload();
}

function checkForWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i <= 7; i++) {
    const winCondition = winConditions[i];
    let a = gameboard[winCondition[0]].textContent;
    let b = gameboard[winCondition[1]].textContent;
    let c = gameboard[winCondition[2]].textContent;
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      if (a === player) {
        overlay.style.visibility = 'visible';
        container.style.filter = 'blur(5px)';
        overlay.innerHTML = `${player} is winner`;
        break;
      } else if (a === ai) {
        overlay.style.visibility = 'visible';
        container.style.filter = 'blur(5px)';
        overlay.innerHTML = `${ai} is winner`;
        break;
      }
    }
  }
}

function aiPlay() {
  emptyCells = gameboard.filter((cell) => cell.childElementCount === 0);
  let randomNum = Math.floor(Math.random() * emptyCells.length);
  if (emptyCells.length === 0) {
    overlay.style.visibility = 'visible';
    container.style.filter = 'blur(5px)';
    overlay.innerHTML = 'click to restart';
    return;
  }
  emptyCells[
    randomNum
  ].innerHTML = /*html*/ `<span style='color:white' class='sign'>${ai}</span>`;
}
