function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  text("bye", 50, 50);

  if (strength > 5) {
    text("cya", 100, 100);
  }
}