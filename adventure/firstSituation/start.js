var strength = 0;
var intel = 0;
var char = 0;
function setup() {
  var canvas = createCanvas(1200,500);
  canvas.parent('sketch');
}

function draw() {
  background(220);

  line(0, 100, 1200, 100);

  textSize(40);
  text("Health: 100", 50, 65);
  text("Strength: " + strength, 290, 65);
  text("Intelligence: " + intel, 550, 65);
  text("Charisma: " + char, 900, 65);

  setStrength();
  setIntel();
  setCharisma();

  text("You are walking home from school and someone stops you and tells you to give them\n  all of your money, what do you do?", 200, 200);

}



function setStrength() {
  strength = document.getElementById("strength").value;
}

function setIntel() {
  intel = document.getElementById("intel").value;
}

function setCharisma() {
  char = document.getElementById("char").value;
}