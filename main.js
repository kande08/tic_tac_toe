var playerOneName = prompt('What is your Name Player 1?');
var playerTwoName = prompt('What is your Name Player 2?');
document.getElementById('player_one_name').innerHTML = playerOneName;
document.getElementById('player_two_name').innerHTML = playerTwoName;

var boxes = document.getElementsByClassName('tic-tac-toe-box');
var clickCount = 0

// place alternating x's and o's onclick, don't allow user to click boxes more than once
for(var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  box.addEventListener('click', function() {
    if(clickCount%2==0 && this.innerHTML != 'X' && this.innerHTML != 'O'){
      this.innerHTML = 'X';
      clickCount++;
      checkWins(boxes);
    } else if(this.innerHTML != 'X' && this.innerHTML != 'O') {
      this.innerHTML = 'O';
      clickCount++;
      checkWins(boxes);
    } else {
      alert('This box is taken!');
    }
  });
}

// don't judge this code. i know it's wet.
function checkWins(box) {
  if((box[0].innerHTML=='X' || box[0].innerHTML == 'O') && box[0].innerHTML==box[1].innerHTML && box[1].innerHTML==box[2].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  if((box[3].innerHTML=='X' || box[3].innerHTML == 'O') && box[3].innerHTML==box[4].innerHTML && box[4].innerHTML==box[5].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  if((box[6].innerHTML=='X' || box[6].innerHTML == 'O') && box[6].innerHTML==box[7].innerHTML && box[7].innerHTML==box[8].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  if((box[6].innerHTML=='X' || box[6].innerHTML == 'O') && box[6].innerHTML==box[4].innerHTML && box[4].innerHTML==box[2].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  if((box[0].innerHTML=='X' || box[0].innerHTML == 'O') && box[0].innerHTML==box[4].innerHTML && box[4].innerHTML==box[8].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  if((box[0].innerHTML=='X' || box[0].innerHTML == 'O') && box[0].innerHTML==box[3].innerHTML && box[3].innerHTML==box[6].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  if((box[1].innerHTML=='X' || box[1].innerHTML == 'O') && box[1].innerHTML==box[4].innerHTML && box[4].innerHTML==box[7].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  if((box[2].innerHTML=='X' || box[2].innerHTML == 'O') && box[2].innerHTML==box[5].innerHTML && box[5].innerHTML==box[8].innerHTML){
    alert('Winner!');
    clearBoard(boxes);
  }
  // do an else game over for if clickCount == 9
  if(clickCount==9){
    alert('Game Over! Cats Game!');
    clearBoard(boxes);
  }
}

function clearBoard(box) {
  for(var i = 0; i < boxes.length; i++) {
    box[i].innerHTML = '';
    clickCount = 0;
  }
}
