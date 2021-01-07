

const render = function () {
  const result = document.querySelector('#result');
  const record1 = document.querySelector('#record1');
  const record2 = document.querySelector('#record2');
  result.innerHTML = game.result;
  record1.innerHTML = `Player1: ${game.player1Win}`;
  record2.innerHTML = `Player2: ${game.player2Win}`;
}

const takeTurn = function () {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => cell.addEventListener('click', function () {
    const choice = Number(this.getAttribute('data-id'));

    if (game.result.length != 0) {
      return
    }

    if (game.turn === true) {
      game.player1Move(choice);
      cell.classList.add('player1');
      render();
      this.style.pointerEvents = 'none';
    } else {
      game.player2Move(choice);
      cell.classList.add('player2');
      render();
      this.style.pointerEvents = 'none';
    }

  }));

}

takeTurn();
