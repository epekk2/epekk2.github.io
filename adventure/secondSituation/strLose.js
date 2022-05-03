var strength = 0;
var intel = 0;
var char = 0;
function setup() {
    var canvas = createCanvas(1200,500);
    canvas.parent('sketch');
}

function draw() {
    background(255, 153, 153);

    textSize(40);

    setStrength();
    setIntel();
    setCharisma();

    text("You get a running start and JUMP!\n Only not far enough and you fall into the lake", 200, 200);

    text("You landed on some rocks weirdly\n lose 15 health", 200, 350);


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