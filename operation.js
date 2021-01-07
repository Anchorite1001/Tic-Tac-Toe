

const render = function () {
  const result = document.querySelector('#result');
  const record1 = document.querySelector('#record1');
  const record2 = document.querySelector('#record2');
  result.innerHTML = game.result;
  record1.innerHTML = `Player 1: ${game.player1Win}`;
  record2.innerHTML = `Player 2: ${game.player2Win}`;
}

const takeTurn = function () {
  const cells = document.querySelectorAll('.cell');
  const restart = document.querySelector('#restart');

  cells.forEach(cell => cell.addEventListener('click', function () {
    const choice = Number(this.getAttribute('data-id'));

    if (game.result !== "") {
      return
    }

    if (game.turn === true) {
      game.player1Move(choice);
      cell.classList.add('sun');
      render();
      this.style.pointerEvents = 'none';//change it after restart
    } else {
      game.player2Move(choice);
      cell.classList.add('moon');
      render();
      this.style.pointerEvents = 'none';
    }

  }));

  restart.addEventListener('click', function() {
    //clear all the selected cells from logic
    game.player1 = [];
    game.player2 = [];
    game.result = "";
    render();
    //clear all the tokens on gameboard
    cells.forEach(cell => {
      cell.style.pointerEvents = "";
      cell.classList.remove('sun');
      cell.classList.remove('moon');
    });

  })
}

takeTurn();
