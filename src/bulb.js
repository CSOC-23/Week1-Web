const BULB_ON_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";

/*
TODO:
Fetch the status of the 'flexSwitchCheckChecked' checkbox and call the appropiate function to turn the bulb on or off
*/

function lightSwitch() {
   var check= document.getElementById('flexSwitchCheckChecked');
    
    if(check.checked){
       
        return bulb_on();

    }
    if(!check.checked){
       
        return bulb_off();

    }
    console.log(count);
}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_on() {
   var bulbimg=document.getElementById('bulb')
   bulbimg.src=BULB_ON_URL;

}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_OFF_URL
*/
function bulb_off() {
    var bulbimg=document.getElementById('bulb')
    bulbimg.src=BULB_OFF_URL;
}
