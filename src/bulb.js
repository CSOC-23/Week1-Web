const BULB_ON_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";

/*
TODO:
Fetch the status of the 'flexSwitchCheckChecked' checkbox and call the appropiate function to turn the bulb on or off
*/
function lightSwitch() {
  let FlexSwitch = document.getElementById("FlexSwitch");
  if (FlexSwitch.checked = true ) 
      bulb_on();
  else {
      bulb_off();
  }    

//   if (isChecked) {
//     bulb_on();
//   } else {
//     bulb_off();
//   }
}
/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_on() {
    bulb_on = new Image() 
    bulb_on.href = "https://i.postimg.cc/6QyTynzr/bulb-on.png"
}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_OFF_URL
*/
function bulb_off() {
    bulb_off = new Image() 
    bulb_off.href = "https://i.postimg.cc/KjK1wL3c/bulb-off.png"

}

