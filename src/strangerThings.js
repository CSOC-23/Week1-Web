
let ele;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function illuminateLight() {
    let coloured_indices = {
        "green": [1, 4, 9, 19],
        "blue": [2, 5, 8, 11, 16, 21, 23],
        "pink": [3, 7, 10, 14, 15, 17, 22, 25, 26],
        "yellow": [6, 12, 13, 18, 20, 24]
    }
    let next_colours = { "rgb(0, 255, 0)": "rgb(1,92,1)", "rgb(0, 255, 255)": "rgb(0,69,83)", "rgb(255, 0, 255)": "rgb(109,0,109)", "rgb(255, 255, 0)": "rgb(109,109,0)" }
    let b = {};

    for (const key in coloured_indices) {
        // b[coloured_indices[key]] = key;
        coloured_indices[key].forEach(e => {
            b[e] = key;
        });
    }
    console.log(b);
    let colors = {
        "green": "rgb(0,255,0)",
        "blue": "rgb(0,255,255)",
        "pink": "rgb(255,0,255)",
        "yellow": "rgb(255,255,0)"
    }
    let message = document.getElementById("message").value;
    message = message.toLocaleUpperCase();
    message = message.split(" ").join("")
    // window.alert(message)
    console.log(message)
    for (let i = 0; i < message.length; i++) {
        let index = message.charCodeAt(i) - 64;
        console.log(`index-${index}`);
        ele = document.getElementsByClassName(`index-${index}`)[0]
        // let colorValue = getComputedStyle(ele).backgroundColor
        let colorValue = colors[b[index]]
        console.log(colorValue);


        await sleep(750)
        //window.alert(colorValue)
        // ele.style.backgroundColor = next_colours[colorValue];
        // ele.style.boxShadow = '0px 2px 20px 4px  ' + next_colours[colorValue];
        ele.style.backgroundColor = colorValue;
        ele.style.boxShadow = '0px 2px 20px 4px  ' + colorValue;
        await sleep(250)
        ele.style.boxShadow = "";
        // ele.style.backgroundColor = colorValue;
        ele.style.backgroundColor = "";
    }

}