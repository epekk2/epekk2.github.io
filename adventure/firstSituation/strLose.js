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


    text("You weren't strong enough! Now you've been robbed, and beaten :(", 200, 200);

    text("He beat you pretty bad, lose 40 hp", 200, 350);
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