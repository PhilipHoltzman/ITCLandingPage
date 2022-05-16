
// target array 
const codingLanguages = ["HTML", "CSS", "JS", "CPP", "Python", "C#"];
let langLength = codingLanguages.length;
// grab the last element of the array for us in footer text
let lastElement = codingLanguages[codingLanguages.length - 1];

//pop it
codingLanguages.pop();

// final string
let footerMessage = "";

// reverse + get length of array -1
codingLanguages.reverse();
let pre = codingLanguages.length - 1;

// if pre == 0 then print out simple solution
// if pre == 1 then print out simple and solution
// if pre >= 2 then diverge
if (pre == 0) {
  footerMessage = "This page was built using:  " + codingLanguages[0] + ".";
}

if (pre == 1) {
  footerMessage =
    "This page was built using:  " +
    codingLanguages[0] +
    " and " +
    codingLanguages[1] +
    ".";
}

if (pre >= 2) {
  // setup the text variables
  let preText = "This page was built using: ";
  let midText = "";
  let endText = "";

  // iterate through the midtext adding the array
  while (pre >= 0) {
    midText += codingLanguages[pre] + ", ";
    pre--;
  }
  // bring it all together
  endText = "and " + lastElement;
  footerMessage = preText + midText + endText;
}

// write message to footer
function writeFooter(msg) {
  var elem = document.getElementById("footermsg");
  elem.textContent = msg;
}

writeFooter(footerMessage); // final txt output
