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
let gameboard = [one, two, three, four, five, six, seven, eight, nine];

let player = '';
let ai = '';
// const gameboard = ['', '', '', '', '', '', '', '', ''];

//iife
(function chooseWeapon() {
  tic.addEventListener(
    'click',
    (weaponTic = () => {
      console.log('tic');
      showHide();
      player = /*html*/ `<i class='fas fa-times'></i>`;
      ai = /*html */ `<i class='far fa-circle'></i>`;
    })
  );
  tac.addEventListener(
    'click',
    (weaponTac = () => {
      console.log('tac');
      showHide();
      player = /*html */ `<i class='far fa-circle'></i>`;
      ai = /*html */ `<i class='fas fa-times'></i>`;
    })
  );
})();

function showHide() {
  container.classList.add('show');
  header.style.display = 'none';
  document.body.style.placeItems = 'center';
}

gameboard.forEach((cell) => {
  cell.addEventListener('click', stepHere);
});
function stepHere(e) {
  let gridCell = e.currentTarget;
  gridCell.childElementCount === 0
    ? (gridCell.innerHTML = /*html*/ `<span class='sign'>${player}</span>`)
    : null;
  console.log(gridCell);
  aiPlay();
}

function restart() {
  console.log('restart');
}

function aiPlay() {
  gameboard = gameboard.filter((cell) => cell.childElementCount === 0);
  let randomNum = Math.floor(Math.random() * gameboard.length);
  // console.log(gameboard.length);
  if (gameboard.length === 0) {
    return;
  }
  // console.log(gameboard[randomNum]);
  gameboard[randomNum].innerHTML = /*html*/ `<span class='sign'>${ai}</span>`;
}

//!!!bug player moze da brise unos kompa ako klikne na polje sa O!!! - popravljen
// bug2: eventlistener na gridcell u global player nastavlja da slusa i kad nema praznih polja
