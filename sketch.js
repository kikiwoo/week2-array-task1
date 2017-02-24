var words = ["Hello", "This", "is", "Kiki", ":)", "I", "am", "now", "doing", "a", "array", "task"];

//(gpA)(gpB) index is the words from line 1
var index = 0;

function setup() {
 createCanvas(400, 400);
}
 
function draw() {
 background(248,182,45);
 
 fill(255);
 textSize(50);
 text(words[index], 140, 210)

}

//(gpA)(gpB) index is the words from line 1
function mousePressed() {
 index = index + 1;
 
 //(gpB)reloop the words code, 12 is the quality of words in line 1
 if (index == words.length) {
  index = 0;
  //can also write "if (index == 12) {         index = 0;
  
 }
}