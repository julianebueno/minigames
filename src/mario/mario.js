const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const menu_restart = document.querySelector(".menu_restart");

const jump = (e) => {
  if (e.keyCode === 32) {
    mario.classList.add("jump");
    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
};

const reset = (e) => {
  if (e.keyCode === 82) {
    location.reload();
  }
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudsPosition = clouds.offsetLeft;

  if (pipePosition <= 120 && pipePosition >= 0 && marioPosition <= 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    menu_restart.style.visibility = "visible";
    
    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("keydown", reset);
