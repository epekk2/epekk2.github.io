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

  text("Prepare to make difficult choices. Your selected\n " +
      "traits determine the outcomes so be careful!", 200, 200);

  text("Practice entering the stats above, you will need \nto re-enter them on a few pages so \ntry to " +
      "remember them!", 200, 350);


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