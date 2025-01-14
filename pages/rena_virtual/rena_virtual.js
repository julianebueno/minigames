const elementoTreno = document.getElementById('treno');
const gameBoard = document.querySelector('.game-board');

window.addEventListener('mousemove', moverTreno);

function moverTreno(event) {
  // Posição da gameBoard
  var gameBoardRect = gameBoard.getBoundingClientRect();

  // Calcular as novas coordenadas
  var coordY = event.clientY - 50;
  var coordX = event.clientX - 150;

  // Impedir que o treno saia da área da game-board
  var trenoWidth = elementoTreno.offsetWidth;
  var trenoHeight = elementoTreno.offsetHeight;

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
  elementoTreno.style.top = coordY - gameBoardRect.top + "px";
  elementoTreno.style.left = coordX - gameBoardRect.left + "px";
}
