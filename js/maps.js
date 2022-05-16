const locations = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.271956552207!2d-75.62265958515306!3d6.094022495587164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46842819134275%3A0xffac11585176098d!2sCaldas%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sil!4v1651465237829!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17073726132!2d-122.50763995366974!3d37.75767927565052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sil!4v1651466257365!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87426.01383910266!2d23.546472787552663!3d46.78336428693664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1f916c0b8b%3A0xbbc601c331f148b!2sCluj-Napoca%2C%20Romania!5e0!3m2!1sen!2sil!4v1651466337500!5m2!1sen!2sil"
]

// setup dom elements
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// index for the array
let locList = 0;

// write loc to src of iframe
function writeMapLoc(loc) {
  document.getElementById("map").src = loc;    
}

// NEXT BUTTON
function nextBtn(){
  if(locList == 1){
    next.disabled = true;
    locList += 1;
    writeMapLoc(locations[locList]);    
  }
  else{
    locList += 1;
    writeMapLoc(locations[locList]);
    prev.disabled = false;
  }
}
// PREV BUTTON
function prevBtn(){

  if(locList == 1){
    prev.disabled = true;
    locList -= 1;
    writeMapLoc(locations[locList]);
  } 
  else{
  // if not than cycle back
    locList -= 1;
    writeMapLoc(locations[locList]);
    next.disabled = false;
  }
}
