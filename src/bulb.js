const BULB_ON_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";

/*
TODO:
Fetch the status of the 'flexSwitchCheckChecked' checkbox and call the appropiate function to turn the bulb on or off
*/
function lightSwitch() {
    let flag = document.getElementById(flexSwitchCheckChecked);
    if(flag)return BULB_ON_URL;
    else return BULB_OFF_URL;
}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_on() {}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_OFF_URL
*/
function bulb_off() {}
