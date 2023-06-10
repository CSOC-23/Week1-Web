const BULB_ON_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";

/*
Fetch the status of the 'flexSwitchCheckChecked' checkbox and call the appropriate function to turn the bulb on or off
*/
function lightSwitch() {
  const box = document.getElementById("flexSwitchCheckChecked");
  if (box.checked) {
    bulb_on();
  } else {
    bulb_off();
  }
}

/*
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_on() {
  const bulbElement = document.getElementById("bulb");
  bulbElement.src = BULB_ON_URL;
}

/*
Set the "bulb" element's Image src to be the image specified by BULB_OFF_URL
*/
function bulb_off() {
  const bulbElement = document.getElementById("bulb");
  bulbElement.src = BULB_OFF_URL;
}
