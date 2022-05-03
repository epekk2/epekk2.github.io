var health;
function setup() {
    var canvas = createCanvas(1200,500);
    canvas.parent('sketch');
}

function draw() {
    background(220);

    line(0, 100, 1200, 100);

    textSize(40);
    text("Health: " + health, 500, 65);


    setHealth();

    text("If you have 100 health remaining:\n you have a good understanding of\n your own strengths and weaknesses.\n Try again to improve!", 200, 200);

}


function setHealth() {
    health = document.getElementById("health").value;
}
