// the changes we made were slightly comedic as 
// we think that adding kanye into shakespear is 
// inherintly funny. we made the text color change 
// when the text is replaced so it is easily visible that
// changes have been made

//Declare vars
let source_text = `Than I to Hercules: within a month:
Ere yet the salt of most unrighteous tears
Had left the flushing in her galled eyes,
She married. O, most wicked speed, to post
With such dexterity to incestuous sheets!
It is not nor it cannot come to good:
But break, my heart; for I must hold my tongue. My father’s brother, but no more like my father
Than I to Hercules. Within a month,
Ere yet the salt of most unrighteous tears
Had left the flushing in her gallèd eyes, 160 She married. O, most wicked speed, to post
With such dexterity to incestuous sheets!
It is not, nor it cannot come to good.
But break, my heart, for I must hold my tongue.
`;

// declares word to find and what to replace it with
let search_word = 'I ';
let replace_word = "Kanye ";
let altered_text;

function setup() {
  createCanvas(400, 400);
  
  //replaces words
  altered_text = source_text.replaceAll(search_word, replace_word);
}

function draw() {
  //Draw text
  background(255);
  textAlign(CENTER);
  textFont("Futura");
  textSize(17);
  
  let show_text;
  
  // makes the changes hapen while mouse is held down
  if(mouseIsPressed){
    stroke('RED');
    show_text = altered_text;
  }
  else{
    show_text = source_text;
    stroke('BLACK');
  }
  
  //displays text
  text(show_text, 10, 10, width * 0.9);
}