//render function
const render = function () {
  const result = document.querySelector('#result');
  result.innerHTML = game.result;
}

render();

const takeTurn = function () {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => cell.addEventListener('click', function () {
    const choice = Number(this.getAttribute('data-id'));

    if (game.turn === true) {
      game.player1Move(choice);
      cell.classList.add('player1');
      render();
    } else {
      game.player2Move(choice);
      cell.classList.add('player2');
      render();
    }

  }));
}

takeTurn();
