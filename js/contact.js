// start with it disbled
document.getElementById("submitBtn").disabled = true; 

// boolean conditions needed to enable the submit button
let firstName = false;
let email = false;
let msg = false;

// first name box check
document.getElementById('fname').addEventListener('keyup', e => {
    if (e.target.value != "") {
      firstName = true;
      check() // run check function after each input to see if the conditional is unlocked
    }
    else {
      firstName = false;
      check()
    }
  });

// email box check
document.getElementById('emailInfo').addEventListener('keyup', e => {
    if (e.target.value != "") {
      email = true;
      check()
    }
    else {
      email = false;
      check()
    }
  });

// mssg box check
document.getElementById('msg').addEventListener('keyup', e => {
    if (e.target.value != "") {
      msg = true;
      check()
    }
    else {
      msg = false;
      check()
    }
  });
  
// check to see if all three required feeds have something in them, if not disabled
function check(){
    if (firstName == true && email == true && msg == true){
        document.getElementById('submitBtn').disabled = false;
      }
      else{
        document.getElementById('submitBtn').disabled = true;
      }

}