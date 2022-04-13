function setup() {
  createCanvas(800, 400);
  
  
  let cRed = color(255, 129, 120);
  
  let neutralButton = createButton('Neutral');
  neutralButton.position(173, 40);
  neutralButton.style('background-color', cRed);
  neutralButton.mousePressed(neutralPressed);
  //neutralButton.mousePressed(yesPressed);
  
  let trueButton = createButton('True');
  trueButton.position(neutralButton.x + neutralButton.width, 40);
  trueButton.mousePressed(falsePressed);
  
  let vTrueButton = createButton('Very True');
  vTrueButton.position(trueButton.x + trueButton.width, 40);
  vTrueButton.mousePressed(vFalsePressed);
  
  let falseButton = createButton('False');
  falseButton.position(neutralButton.x - neutralButton.width +10, 40);
  falseButton.mousePressed(truePressed);
  
  let vFalseButton = createButton('Very False');
  vFalseButton.position(falseButton.x - falseButton.width - 30, 40);
  vFalseButton.mousePressed(vTruePressed);
  
  let neutralButton1 = createButton('Neutral');
  neutralButton1.position(173, 95);
  neutralButton1.style('background-color', cRed);
  neutralButton1.mousePressed(neutralPressed);
  //neutralButton.mousePressed(yesPressed);
  
  let trueButton1 = createButton('True');
  trueButton1.position(neutralButton.x + neutralButton.width, 95);
  trueButton1.mousePressed(truePressed);
  
  let vTrueButton1 = createButton('Very True');
  vTrueButton1.position(trueButton.x + trueButton.width, 95);
  vTrueButton1.mousePressed(vTruePressed);
  
  let falseButton1 = createButton('False');
  falseButton1.position(neutralButton.x - neutralButton.width +10, 95);
  falseButton1.mousePressed(falsePressed);
  
  let vFalseButton1 = createButton('Very False');
  vFalseButton1.position(falseButton.x - falseButton.width - 30, 95);
  vFalseButton1.mousePressed(vFalsePressed);
  
  let neutralButton2 = createButton('Neutral');
  neutralButton2.position(173, 150);
  neutralButton2.style('background-color', cRed);
  neutralButton2.mousePressed(neutralPressed);
  //neutralButton.mousePressed(yesPressed);
  
  let trueButton2 = createButton('True');
  trueButton2.position(neutralButton.x + neutralButton.width, 150);
  trueButton2.mousePressed(truePressed);
  
  let vTrueButton2 = createButton('Very True');
  vTrueButton2.position(trueButton.x + trueButton.width, 150);
  vTrueButton2.mousePressed(vTruePressed);
  
  let falseButton2 = createButton('False');
  falseButton2.position(neutralButton.x - neutralButton.width +10, 150);
  falseButton2.mousePressed(falsePressed);
  
  let vFalseButton2 = createButton('Very False');
  vFalseButton2.position(falseButton.x - falseButton.width - 30, 150);
  vFalseButton2.mousePressed(vFalsePressed);
  
  let neutralButton3 = createButton('Neutral');
  neutralButton3.position(173, 205);
  neutralButton3.style('background-color', cRed);
  neutralButton3.mousePressed(neutralPressed);
  
  let trueButton3 = createButton('True');
  trueButton3.position(neutralButton.x + neutralButton.width, 205);
  trueButton3.mousePressed(truePressed);
  
  let vTrueButton3 = createButton('Very True');
  vTrueButton3.position(trueButton.x + trueButton.width, 205);
  vTrueButton3.mousePressed(vTruePressed);
  
  let falseButton3 = createButton('False');
  falseButton3.position(neutralButton.x - neutralButton.width +10, 205);
  falseButton3.mousePressed(falsePressed);
  
  let vFalseButton3 = createButton('Very False');
  vFalseButton3.position(falseButton.x - falseButton.width - 30, 205);
  vFalseButton3.mousePressed(vFalsePressed);
  
  let neutralButton4 = createButton('Neutral');
  neutralButton4.position(173, 260);
  neutralButton4.style('background-color', cRed);
  neutralButton4.mousePressed(neutralPressed);
  
  let trueButton4 = createButton('True');
  trueButton4.position(neutralButton.x + neutralButton.width, 260);
  trueButton4.mousePressed(falsePressed);
  
  let vTrueButton4 = createButton('Very True');
  vTrueButton4.position(trueButton.x + trueButton.width, 260);
  vTrueButton4.mousePressed(vFalsePressed);
  
  let falseButton4 = createButton('False');
  falseButton4.position(neutralButton.x - neutralButton.width +10, 260);
  falseButton4.mousePressed(truePressed);
  
  let vFalseButton4 = createButton('Very False');
  vFalseButton4.position(falseButton.x - falseButton.width - 30, 260);
  vFalseButton4.mousePressed(vTruePressed);
  
  let neutralButton5 = createButton('Neutral');
  neutralButton5.position(173, 315);
  neutralButton5.style('background-color', cRed);
  neutralButton5.mousePressed(neutralPressed);
  
  let trueButton5 = createButton('True');
  trueButton5.position(neutralButton.x + neutralButton.width, 315);
  trueButton5.mousePressed(truePressed);
  
  let vTrueButton5 = createButton('Very True');
  vTrueButton5.position(trueButton.x + trueButton.width, 315);
  vTrueButton5.mousePressed(vTruePressed);
  
  let falseButton5 = createButton('False');
  falseButton5.position(neutralButton.x - neutralButton.width +10, 315);
  falseButton5.mousePressed(falsePressed);
  
  let vFalseButton5 = createButton('Very False');
  vFalseButton5.position(falseButton.x - falseButton.width - 30, 315);
  vFalseButton5.mousePressed(vFalsePressed);
  
  let neutralButton6 = createButton('Neutral');
  neutralButton6.position(173, 370);
  neutralButton6.style('background-color', cRed);
  neutralButton6.mousePressed(neutralPressed);
  
  let trueButton6 = createButton('True');
  trueButton6.position(neutralButton.x + neutralButton.width, 370);
  trueButton6.mousePressed(truePressed);
  
  let vTrueButton6 = createButton('Very True');
  vTrueButton6.position(trueButton.x + trueButton.width, 370);
  vTrueButton6.mousePressed(vTruePressed);
  
  let falseButton6 = createButton('False');
  falseButton6.position(neutralButton.x - neutralButton.width +10, 370);
  falseButton6.mousePressed(falsePressed);
  
  let vFalseButton6 = createButton('Very False');
  vFalseButton6.position(falseButton.x - falseButton.width - 30, 370);
  vFalseButton6.mousePressed(vFalsePressed);
  
}  // end of setup()

let score = 15;
let numPressed = 0;
let middle = false;
let less = false;
let more = false;


function truePressed() {
  score += 2;
   if (numPressed < 6) {
    numPressed++;
  } else {
    if (score == 15) {
      middle = true;
    } else if (score > 15) {
      more = true;
    } else if (score < 15) {
      less = true;
    }
  }
}

function vTruePressed() {
  score += 4;
   if (numPressed < 6) {
    numPressed++;
  } else {
    if (score == 15) {
      middle = true;
    } else if (score > 15) {
      more = true;
    } else if (score < 15) {
      less = true;
    }
  }
}

function falsePressed() {
  score -= 2;
   if (numPressed < 6) {
    numPressed++;
  } else {
    if (score == 15) {
      middle = true;
    } else if (score > 15) {
      more = true;
    } else if (score < 15) {
      less = true;
    }
  }
}

function vFalsePressed() {
  score -= 4;
  if (numPressed < 6) {
    numPressed++;
  } else {
    if (score == 15) {
      middle = true;
    } else if (score > 15) {
      more = true;
    } else if (score < 15) {
      less = true;
    }
  }
}

function neutralPressed() {
  if (numPressed < 6) {
    numPressed++;
  } else {
    if (score == 15) {
      middle = true;
    } else if (score > 15) {
      more = true;
    } else if (score < 15) {
      less = true;
    }
  }
}

function draw() {
  background(220);
  
  textSize(20);
  text('I would not cheat on a test', 70, 30);
  text('I help others', 150, 85);
  text('I care about the effect my actions have', 30, 140);
  text('I do not take revenge on people', 70, 195);
  text('I enjoy a seeing a good fight', 65, 250);
  text('I easily place my trust in others', 40, 305);
  text('I have plenty of time for others', 50, 360);
  
  line(400, 0, 400, 400);
  
  
  
  if (middle == true) {
    text('You are right in the middle', 500, 200);
  } else if (more == true) {
    text('You are more likely an agreeable person', 415, 200);
    
  } else if (less == true) {
    text ('You are less likely to be an agreeable person', 400, 200);
  }
  
  
  
  
}