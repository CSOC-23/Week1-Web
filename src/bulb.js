const BULB_ON_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";

/*
TODO:
Fetch the status of the 'flexSwitchCheckChecked' checkbox and call the appropiate function to turn the bulb on or off
*/

function lightSwitch() {
    const checkbox = document.getElementById('flexSwitchCheckChecked');
    const bulbImage = document.getElementById('bulb');
  
    if (checkbox.checked) {
      bulb_on(bulbImage);
    } else {
      bulb_off(bulbImage);
    }
  }

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_on(bulbImage) {
    bulbImage.src = BULB_ON_URL;
  }

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_OFF_URL
*/
function bulb_off(bulbImage) {
    bulbImage.src = BULB_OFF_URL;
  }
