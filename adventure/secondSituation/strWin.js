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

    setStrength();
    setIntel();
    setCharisma();

    text("You get a running start and JUMP!\n You easily clear the river and\n encourage your friend to do the same", 200, 200);

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