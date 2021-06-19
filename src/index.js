const BG_COLOR = "#231f20";
const SNAKE_COLOR = "#c2c2c2";
const FOOD_COLOR = "#e66916";

const socket = io('http://localhost:3000');
socket.on('init', handleInit);


const gameScreen = document.getElementById("gameScreen");

let canvas, context;

const gameState = {
  player: {
    // position
    pos: {
      x: 3,
      y: 10
    },
    // velocity
    vel: {
      x: 1,
      y: 0
    },
    // snake of three segments
    snake: [
      { x: 1, y: 10 },
      { x: 2, y: 10 },
      { x: 3, y: 10 }
    ]
  },
  food: {
    x: 7,
    y: 7
  },
  // game canvas is 20 x 20
  gridsize: 20
};

function init() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  canvas.width = canvas.height = 600;
  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, canvas.width, canvas.height);

  document.addEventListener("keydown", keydown);
}

function keydown(e) {
  console.log(e.keyCode);
}

init();

function paintGame(state) {
  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const food =  state.food;
  const gridsize = state.gridsize;
  const size = canvas.width / gridsize;

  context.fillStyle = FOOD_COLOR;
  context.fillRect(food.x * size, food.y * size, size, size);

  paintPlayer(state.player, size, SNAKE_COLOR);
}

function paintPlayer(playerState, size, color) {
  const snake = playerState.snake;

  // for each segment of the snake, paint it
  context.fillStyle = color;
  for (let cell of snake) {
    context.fillRect(cell.x * size, cell.y * size, size, size);
  }
}

paintGame(gameState);

function handleInit(msg) {
  console.log(msg);
}