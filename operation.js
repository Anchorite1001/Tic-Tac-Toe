//render function
const takeTurn = function () {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => cell.addEventListener('click', function () {
    const choice = Number(this.getAttribute('data-id'));

    if (ttt.turn === true) {
      ttt.player1Move(choice);
      cell.classList.add('player1');
    } else {
      ttt.player2Move(choice);
      cell.classList.add('player2');
    }

  }));
}

takeTurn();
