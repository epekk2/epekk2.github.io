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



    text("You both walk for a ways looking for \n a better spot to cross but it never comes.\n Eventually you must give up and go home.", 200, 200);


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