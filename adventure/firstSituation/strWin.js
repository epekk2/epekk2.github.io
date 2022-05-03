var strength = 0;
var intel = 0;
var char = 0;
function setup() {
    var canvas = createCanvas(1200,500);
    canvas.parent('sketch');
}

function draw() {
    background(204, 255, 204);

    textSize(40);

    text("You were able to hurt him enough that he ran away.\n Lucky he didn't have a weapon.", 200, 200);




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