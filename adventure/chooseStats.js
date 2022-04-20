var inp;
var button;
var inp1;
var inp2;
var button1;
var button2;

function setup() {
  createCanvas(400, 400);
  
  inp = createInput('Enter 1-10');
  inp.position(180, 135);
  inp.size(100);
  button = createButton("submit");
  button.position(280, 135);
  button.mousePressed(setStrength);
  
  inp1 = createInput('Enter 1-10');
  inp1.position(190, 235);
  inp1.size(100);
  button1 = createButton("submit");
  button1.position(280, 235);
  button1.mousePressed(setIntel);
  
  inp2 = createInput('Enter 1-10');
  inp2.position(180, 335);
  inp2.size(100);
  button2 = createButton("submit");
  button2.position(280, 335);
  button2.mousePressed(setCharisma);
  
}

function draw() {
  background(220);
  
  textSize(20);
  text("Choose your stats", 100, 50);
  
  text("Strength:", 75, 150);
  text("Intelligence:", 75, 250);
  text("Charisma:", 75, 350);
  
  setStrength();
  setIntel();
  setCharisma();

}

var strength = 0;
let intel = 0;
let char = 0;

function setStrength() {
  strength = inp.value();
}

function setIntel() {
  intel = inp1.value();
}

function setCharisma() {
  char = inp2.value();
}