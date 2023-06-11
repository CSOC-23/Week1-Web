const BULB_ON_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";

/*
TODO:
Fetch the status of the 'flexSwitchCheckChecked' checkbox and call the appropiate function to turn the bulb on or off
*/
function lightSwitch() {
var checkbox = document.getElementById("flexSwitchCheckChecked");
if(checkbox.checked)
bulb_on();
else
bulb_off();
}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_on() {
    document.getElementById("bulb").src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_OFF_URL
*/
function bulb_off() {
    document.getElementById("bulb").src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
}


