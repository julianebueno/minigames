var elemento = document.getElementById('treno');
var gameBoard = document.querySelector('.game-board');

elemento.addEventListener('dblclick', function () {
  window.addEventListener('mousemove', moverTreno);
  elemento.addEventListener('dblclick', removeMoverTreno);
});

function removeMoverTreno() {
  window.removeEventListener('mousemove', moverTreno);
  elemento.removeEventListener('dblclick', removeMoverTreno);
}

function moverTreno(event) {
  // Posição da gameBoard
  var gameBoardRect = gameBoard.getBoundingClientRect();

  // Calcular as novas coordenadas
  var coordY = event.clientY - 50;
  var coordX = event.clientX - 150;

  // Impedir que o treno saia da área da game-board
  var trenoWidth = elemento.offsetWidth;
  var trenoHeight = elemento.offsetHeight;

  // Limitar a posição horizontal
  if (coordX < gameBoardRect.left) {
    coordX = gameBoardRect.left;
  } else if (coordX + trenoWidth > gameBoardRect.right) {
    coordX = gameBoardRect.right - trenoWidth;
  }

  // Limitar a posição vertical
  if (coordY < gameBoardRect.top) {
    coordY = gameBoardRect.top;
  } else if (coordY + trenoHeight > gameBoardRect.bottom) {
    coordY = gameBoardRect.bottom - trenoHeight;
  }

  // Atualizar a posição do treno
  elemento.style.top = coordY - gameBoardRect.top + "px";
  elemento.style.left = coordX - gameBoardRect.left + "px";
}
