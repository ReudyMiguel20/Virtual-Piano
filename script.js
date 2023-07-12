let buttonTest = document.getElementById("test-button");


document.addEventListener("keydown", function (event) {
    keyboardPresses(event);
});

function keyboardPresses(event) {
    let audio = new Audio();

    switch (event.code) {
        case "KeyA":
            audio.src = "./pianosounds/A.mp3";
            audio.play();
            console.log("Key 'A' is pressed!")
            break;
        case "KeyS":
            audio.src = "./pianosounds/S.mp3";
            audio.play();
            console.log("Key 'S' is pressed!")
            break;
        case "KeyD":
            audio.src = "./pianosounds/D.mp3";
            audio.play();
            console.log("Key 'D' is pressed!")
            break;
        case "KeyF":
            audio.src = "./pianosounds/F.mp3";
            audio.play();
            console.log("Key 'F' is pressed!")
            break;
        case "KeyG":
            audio.src = "./pianosounds/G.mp3";
            audio.play();
            console.log("Key 'G' is pressed!")
            break;
        case "KeyH":
            audio.src = "./pianosounds/H.mp3";
            audio.play();
            console.log("Key 'H' is pressed!")
            break;
        case "KeyJ":
            audio.src = "./pianosounds/J.mp3";
            audio.play();
            console.log("Key 'J' is pressed!")
            break;
        case "KeyW":
            audio.src = "./pianosounds/W.mp3";
            audio.play();
            console.log("Key 'W' is pressed!")
            break;
        case "KeyE":
            audio.src = "./pianosounds/E.mp3";
            audio.play();
            console.log("Key 'E' is pressed!")
            break;
        case "KeyT":
            audio.src = "./pianosounds/T.mp3";
            audio.play();
            console.log("Key 'T' is pressed!")
            break;
        case "KeyY":
            audio.src = "./pianosounds/Y.mp3";
            audio.play();
            console.log("Key 'Y' is pressed!")
            break;
        case "KeyU":
            audio.src = "./pianosounds/U.mp3";
            audio.play();
            console.log("Key 'U' is pressed!")
            break;
        default:
            console.warn("Unknown key is pressed!")
            break;
    }
}
