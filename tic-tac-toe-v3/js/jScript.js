
const playerContainer = document.querySelector('ul');
const activePlayer = playerContainer.querySelectorAll('li');
const box = document.querySelector('.boxes');
const board = box.querySelectorAll('li');
let boxes = [...board];
let tie = 0;

const elements = (a) => {
  return document.createElement(`${a}`);
}

function winnerScreen(playerNumber, state){
  const body = document.querySelector('body');
  const board = document.querySelectorAll('div');
  const div = elements('div');
  const button = elements('a');
  const p = elements('p');
  const h1 = elements('h1')
  const header = elements('header')

  button.className = 'button'
  div.className = `screen screen-win screen-win-${playerNumber}`
  p.className = 'screen-win'
  body.appendChild(div)
  div.appendChild(header)
  header.appendChild(h1)
  h1.appendChild(p)
  header.appendChild(p)
  header.appendChild(button)
  h1.innerHTML = 'Tic Tac Toe'
  button.innerHTML = 'New Game'
  p.innerHTML = `${state}`

  button.addEventListener('click', function(){
    div.style.display = 'none'
    board[0].style.display = 'block'
  })

}

(function(){
    const div = elements('div');
    div.id = 'start';
    div.className = 'screen screen-start';

  const header = elements('header');

  const h1 = elements('h1');
    h1.innerHTML = 'Tic Tac Toe';

  const a = elements('a');
    a.className = 'button';
    a.href = '#';
    a.innerHTML = 'Start Game';

  div.appendChild(header);
  header.appendChild(h1);
  header.appendChild(a);

  const body = document.querySelector('body');
  body.children[0].style.display = 'none';
  body.appendChild(div)
})()

const startPage = () => {
  const body = document.querySelector('body');
  const button = document.querySelector('a');
  button.addEventListener('click', function(){
    body.children[0].style.display = 'block';
    body.children[2].style.display = 'none'
  })
}
startPage();

const Player = {
  name: '',
  color: activePlayer,
  myTurn: function(turn){
    if(turn){
      this.color.className = 'players active'
    }
    else{
      this.color.className = 'players'
    }
  }
}

const playerO = Object.create(Player);
playerO.name = 'box box-filled-1';
playerO.color = activePlayer[0];

const playerX = Object.create(Player);
playerX.name = 'box box-filled-2';
playerX.color = activePlayer[1];

const gameBoard = () => {
  let turn = true;
  playerO.myTurn(true)

  box.addEventListener('mouseover', function(e){
      if(e.target.className === 'box')
      if(turn){
      e.target.style.backgroundImage = "url('img/o.svg')"
      } else {
      e.target.style.backgroundImage = "url('img/x.svg')"
    }
  })

  box.addEventListener('mouseout', function(e){
    if(e.target.className === 'box'){
    e.target.style.backgroundImage = "none"
    }
  })

  box.addEventListener('click', function(e){
    if(e.target.className === 'box'){
      playerO.myTurn(!turn);
      playerX.myTurn(turn);
      tie++
      console.log(e.target)

      if(turn){
        e.target.className = playerO.name;
        turn = false;
      }

      else {
        e.target.className = playerX.name;
        turn = true;
      }
      if(winner(boxes, playerO.name)){
        let div = document.querySelector('div');
        div.style.display = 'none'
        winnerScreen('one', 'Winner')
        tie = 0
      }
      else if(winner(boxes, playerX.name)){
        let div = document.querySelector('div');
        div.style.display = 'none'
        winnerScreen('two', 'Winner')
        tie = 0
      }
      else if(tie > 8){
        tie = 0;
        let div = document.querySelector('div');
        div.style.display = 'none';
        boxes.map(c => {
          c.className = 'box'
          c.style.backgroundImage = 'none'
        });
        winnerScreen('tie', `It's a draw`);
      }
    }
  })
}
gameBoard()

function winner(board, player){
  if(
  board[0].className === player && board[1].className === player && board[2].className === player ||
  board[3].className === player && board[4].className === player && board[5].className === player ||
  board[6].className === player && board[7].className === player && board[8].className === player ||
  board[0].className === player && board[3].className === player && board[6].className === player ||
  board[1].className === player && board[4].className === player && board[7].className === player ||
  board[2].className === player && board[5].className === player && board[8].className === player ||
  board[0].className === player && board[4].className === player && board[8].className === player ||
  board[6].className === player && board[4].className === player && board[2].className === player
  ){
    board.map(c => {
      c.className = 'box'
      c.style.backgroundImage = 'none'
    })
    return true
  }
  else {
    return false
  }
}
