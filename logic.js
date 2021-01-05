const checkWin = function (arr) {
  let winOccasion = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
  let win = 0;
  for (i = 0; i < winOccasion.length; i++) {
    if (winOccasion[i].every (n => arr.includes(n))) {
      console.log('Win!');
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

const ttt = {
  choices: [1, 2, 3, 4, 5, 6, 7, 8, 9],//make every element only be selected once
  player1: [],
  player2: [],

  currentChoiceP1: function(choice) {
    this.player1.push(choice);
    checkWin(this.player1);
  },

  currentChoiceP2: function(choice) {
    this.player2.push(choice);
    checkWin(this.player2);
  },

}
