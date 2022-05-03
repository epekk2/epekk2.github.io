var strength = 0;
var intel = 0;
var charisma = 0;
function setup() {
    var canvas = createCanvas(1200,500);
    canvas.parent('sketch');
}

function draw() {
    background(204, 255, 204);

    textSize(40);



    text("You and your friend walk down either \n direction of the river and call the other when \n a suitable spot is found. You find one in n time!" , 200, 200);

}



function setStrength() {
    strength = document.getElementById("strength").value;
}

function setIntel() {
    intel = document.getElementById("intel").value;
}

function setCharisma() {
    charisma = document.getElementById("char").value;
}