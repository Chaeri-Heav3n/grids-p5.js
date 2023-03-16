let gridSize = 20;

let patterns = [
  [pattern1, 10],
  [pattern2, 1],
  [pattern3, 1],
  [pattern4, 1]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background('black');
  
  for (let x=0; x < width; x += gridSize) {
    for (let y=0; y < height; y += gridSize) {
      push();
      translate(x, y);
      drawPattern();
      pop();
    }
  }
  noLoop(); //pause
}

function drawPattern() {
  strokeWeight(gridSize * 0.2);
  stroke('white');
  
  let raffle = [];
  for (let  pattern of patterns) {
    // pattern[0] --> function
    // pattern[1] --> number of tickets! (or probability)
    
    for (let i=0; i < pattern[1]; i++) {
      raffle.push(pattern[0]);
    }
 }
  
  let selectedPattern = random(raffle);
  selectedPattern();
}

function mousePressed() {
  loop(); //unpaused
}

function pattern1() {
  // backward diagonal
    line(0, 0, gridSize, gridSize);
}

function pattern2() {
  // forward diagonal
  line(0, gridSize, gridSize, 0);
}

function pattern3() {
  // half backward diagonal
  line(0, 0, gridSize/2, gridSize/2);
}

function pattern4() {
  // half forward diagonal
  line(0, gridSize, gridSize/2, gridSize/2);
}
