function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(220);
  
  stroke("Black");
  line(0, 150, 600, 150);
  
  fill(215, 237, 242);
  rect(0, 0, 600, 150);
  
  fill("black");
  rect(100, 100, 50);
  rect(250, 100, 50);
  rect(400, 100, 50);
  
  line(0, 200, 50, 200);
  line(50, 200, 50, 225);
  line(50, 225, 80, 225);
  
  
}