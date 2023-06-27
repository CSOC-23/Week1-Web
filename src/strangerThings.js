let text="";
let keys;
let lights;
/*
A simple function which is used to wait for a particular time (in miliseconds)
*/
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
TODO:
This function should return a list of all the distinct characters in UPPERCASE that have been typed in the textbox with the id "message"
*/
function getCharacters() {
	let field = document.getElementById("message");
	text= field.value
}

/* 
Sets the CSS properties of the DOM elements to create a nice visual effect
TODO: Play with the colour codes provided to create a theme which has more resemblance to Netflix's Stranger Things
*/
async function setCSS(character) {
	let index = character.charCodeAt(0) - 65;
	let colorValue = "";
	keys = document.getElementsByClassName("key");
	lights = document.getElementsByClassName("light");
	if (index % 2 == 0) {
		//PINK
		lights[index].style.backgroundColor = "rgba(255, 105, 180, 0.9)";
		keys[index].style.backgroundColor = "rgba(255, 105, 180, 0.9)"
		keys[index].style.boxShadow = "0px 2px 20px 4px rgba(255, 105, 180, 0.9)"
		colorValue = "rgba(255,105,180,0.4)";
		lights[index].style.boxShadow = "0px 2px 20px 4px rgba(255, 105, 180, 0.9)";
	} else {
		//BLUE
		lights[index].style.backgroundColor = "rgba(0, 153, 255, 0.9)";
		keys[index].style.backgroundColor = "rgba(0, 153, 255, 0.9)"
		keys[index].style.boxShadow = "0px 2px 20px 4px rgba(0, 153, 255, 0.8)"
		colorValue = "rgba(0,153,255,0.4)";
		lights[index].style.boxShadow = "0px 2px 20px 4px rgba(0, 153, 255, 0.8)";
	}

	await sleep(1000);

	lights[index].style.backgroundColor = colorValue;
	lights[index].style.boxShadow = "none";
	keys[index].style.backgroundColor = "black";
	keys[index].style.boxShadow = "0.25rem 0.25rem 0.5rem 0.75rem rgba(255, 255, 255, 0.2)";

	await sleep(500);
}

async function illuminateLight() {
	getCharacters();
	 text =text.toUpperCase();
	for (let i in  text) {
		await setCSS(text[i])
	}
	/*
    TODO: Call the setCSS function asynchronously for each character present in the message array
    */
}
