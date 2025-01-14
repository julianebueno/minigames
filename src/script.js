const paths = [
  {
    title: "Mario",
    link: "./src/mario/mario.html",
    imgsrc: "./src/previews/previewMario.png",
    alt: "previewMario",
  },
  {
    title: "Rena Virtual",
    link: "./src/rena_virtual/rena_virtual.html",
    imgsrc: "./src/previews/previewRenaVirtual.png",
    alt: "previewRenaVirtual",
  },
  {
    title: "Snake",
    link: "./src/snake/snake.html",
    imgsrc: "./src/previews/previewSnake.png",
    alt: "previewSnake",
  },
  {
    title: "Tetris",
    link: "./src/tetris/tetris.html",
    // imgsrc: './src/previews/previewTetris.png',
    imgsrc: "./src/previews/defaultPreview.png",
    alt: "previewTetris",
  },
  {
    title: "Pong",
    link: "./src/pong/pong.html",
    // imgsrc: './src/previews/previewPong.png',
    imgsrc: "./src/previews/defaultPreview.png",
    alt: "previewPong",
  },
  {
    title: "2048",
    link: "./src/2048/2048.html",
    // imgsrc: './src/previews/preview2048.png',
    imgsrc: "./src/previews/defaultPreview.png",
    alt: "preview2048",
  },
  {
    title: "Flappy Bird",
    link: "./src/flappyBird/flappyBird.html",
    // imgsrc: './src/previews/previewFlappyBird.png',
    imgsrc: "./src/previews/defaultPreview.png",
    alt: "previewFlappyBird",
  },
  {
    title: "Space Invaders",
    link: "./src/spaceInvaders/spaceInvaders.html",
    // imgsrc: './src/previews/previewSpaceInvaders.png',
    imgsrc: "./src/previews/defaultPreview.png",
    alt: "previewSpaceInvaders",
  },
];

const gameList = document.querySelector(".game_list");

paths.forEach((e) => {
  const gameLink = document.createElement("a");
  gameLink.href = e.link;
  gameLink.classList.add("game_item");
  gameLink.innerHTML = `
    <img src="${e.imgsrc}" alt="${e.alt}" class="previewImg">
    <p>${e.title}</p>
  `;
  gameList.appendChild(gameLink);
});
