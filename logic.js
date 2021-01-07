const checkWin = function (arr) {
  let winOccasion = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
  let win = 0;
  for (i = 0; i < winOccasion.length; i++) {
    if (winOccasion[i].every (n => arr.includes(n))) {
      win ++;
      break
    }
  }
  if (win != 0) {
    return true;//end the game when return true
  } else {
    return false;
  }
}

const draw = function () {
  let chosen = game.player1.concat(game.player2);
  if(game.choices.every(num => {return chosen.includes(num)}) && game.result.length === 0) {
    game.result = "It's a draw!"
  }
}//why directly compare player1+player2 with choices cannot work?

const game = {
  choices: [1, 2, 3, 4, 5, 6, 7, 8, 9],//make every element only be selected once
  player1: [],
  player2: [],

  player1Win: 0,
  player2Win: 0,

  turn: true,

  result: "",

  player1Move: function(choice) {
    this.player1.push(choice);
    this.turn = !this.turn;
    if (checkWin(this.player1)) {
      this.result = 'Player1 wins!';
      this.player1Win += 1;
    };
    draw()
  },

  player2Move: function(choice) {
    this.player2.push(choice);
    this.turn = !this.turn;
    if (checkWin(this.player2)) {
      this.result = 'Player2 wins!';
      this.player2Win += 1;
    };
    draw();
  },

}
