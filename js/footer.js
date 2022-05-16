
// modifiable target array 
const codingLanguages = ["HTML", "CSS", "JS", "Python"];

// pop the last element and save it to a variable to join at the end
let lastElement = codingLanguages.pop();

//reverse the order so HTML/CSS/JS is always first
codingLanguages.reverse();

// the number of elements remaining in the array for determination -1
//let arrayCount = codingLanguages.length-1;
// if i dont include the minus one i get an 'undefined' in my return

// variable for stringlist
let listString = "";

while (arrayCount >= 0) {
  listString += codingLanguages[arrayCount] + ", ";
  arrayCount--;
}

// set up empty final string for the footer message
let footerMessage = "This page was created with: "+listString+" and "+lastElement;

// write message to footer
function writeFooter(msg) {
  var elem = document.getElementById("footermsg");
  elem.textContent = msg;
};

// write final txt output
writeFooter(footerMessage); 
