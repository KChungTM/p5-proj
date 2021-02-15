/* LOADS IMAGES AND VARIABLES */
/* ========================== */
function preload() {
  // LOADING COURT IMAGE
  img = loadImage("./CodebaseCourt.jpg");
  
  // TOP DIV BAR DIMENSIONS
  divHeight = windowHeight * 0.046;
  divWidth = windowWidth;  
  
  // CREATING PLAYER GRAPHICS
  player1 = createImg("./graphics/player1.png");
  player2 = createImg("./graphics/player2.png");
  player3 = createImg("./graphics/player3.png");
  player4 = createImg("./graphics/player4.png");
  player5 = createImg("./graphics/player5.png");

  other1 = createImg("./graphics/other1.png");
  other2 = createImg("./graphics/other2.png");
  other3 = createImg("./graphics/other3.png");
  other4 = createImg("./graphics/other4.png");
  other5 = createImg("./graphics/other5.png");

  console.log(divHeight);

  // INITALIZING PENCIL VARIABLES
  drawn = [];
  dottedLine = false;
  dottedCounter = 0;

  // INITIALIZING PEN STROKE VARIABLES
  inputColor = "#E5DB23";
  strokeColor = "black";
  strokeSize = 5;
}

/* SETS UP CANVAS AND SCREEN */
/* ========================= */
function setup() {
  /* CREATE TOP BAR */
  /* ============== */

  /* CREATE DIVS */
  // CREATE OUTER DIV
  let bar = createDiv().size(divWidth, divHeight);
  let col = color(53,110,226,255);
  bar.style("background-color", col);
  bar.style("display", "flex");
  bar.style("align-items", "center");
  bar.style("position", "fixed");
  bar.position(0, 0)
  
  // CREATE THREE EQUAL DIVS
  let canvasButtonsDiv = createDiv();
  canvasButtonsDiv.parent(bar);
  canvasButtonsDiv.style("justify-content", "start");
  setDivStyle(canvasButtonsDiv);

  let titleDiv = createDiv();
  titleDiv.html("Play Creator");
  titleDiv.parent(bar);
  titleDiv.style("color", "white");
  titleDiv.style("font-size", "200%");
  titleDiv.style("font-family", "Jersey M54, Helvetica, sans-serif");
  titleDiv.style("justify-content", "center");
  setDivStyle(titleDiv);

  let otherFeaturesDiv = createDiv();
  otherFeaturesDiv.style("display", "flex");
  otherFeaturesDiv.style("justify-content", "flex-end");
  otherFeaturesDiv.parent(bar);
  setDivStyle(otherFeaturesDiv);

  /* CREATE TOP BAR BUTTONS */
  // Info Button
  let infoButton = createImg("./graphics/infoIcon.jpg", "Info");
  setButtonValues(infoButton, canvasButtonsDiv, infoAlert);

  // Eraser Button
  let eraserButton = createImg("./graphics/eraserIcon.jpg", "Eraser");
  setButtonValues(eraserButton, canvasButtonsDiv, eraser);

  // Pen Button
  let penButton = createImg("./graphics/penIcon.jpg", "Pencil");
  setButtonValues(penButton, canvasButtonsDiv, pencil);

  // Dotted Pen Button
  let dottedButton = createImg("./graphics/dottedPenIcon.jpg", "Dotted");
  setButtonValues(dottedButton, canvasButtonsDiv, dotted);

  let plusButton = createImg("./graphics/plusIcon.jpg", "Plus");
  setButtonValues(plusButton, canvasButtonsDiv, increaseStroke);

  let minusButton = createImg("./graphics/minusIcon.jpg", "Minus");
  setButtonValues(minusButton, canvasButtonsDiv, decreaseStroke);

  let blackButton = createDiv();
  blackButton.style("background-color", "#1A1A1A");
  setButtonValues(blackButton, otherFeaturesDiv, setBlack);

  let redButton = createDiv();
  redButton.style("background-color", "#D81E2C")
  setButtonValues(redButton, otherFeaturesDiv, setRed);

  input = createInput("#E5DB23", "Hex Code");
  input.size(divWidth * 0.05, divHeight * 0.65);
  input.input(changeColor);
  input.parent(otherFeaturesDiv);

  customButton = createDiv();
  customButton.style("background-color", inputColor);
  setButtonValues(customButton, otherFeaturesDiv, setYellow);

  let resetButton = createImg("./graphics/resetIcon.jpg", "Reset");
  setButtonValues(resetButton, otherFeaturesDiv,reset);

  playName = createInput("Play Name", "Play Name");
  playName.size(divWidth * 0.05, divHeight * 0.65);
  playName.parent(otherFeaturesDiv);

  let saveButton = createImg("./graphics/saveIcon.jpg", "Save");
  setButtonValues(saveButton, otherFeaturesDiv, savePlay);

  /* CREATE COURT CANVAS */
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("position", "fixed");

  /* CREATE PLAYER BUTTONS */
  /* ===================== */

  /* PLAYER / PLAYER CLICKED ARRAY */
  players = [];
  playerClicked = [];
  for(let i = 0; i < 10; i++) {
    playerClicked.push(false);
  }
  playerDimension = windowWidth * 0.1;

  /* PLAYER BUTTONS */
  // Player 1
  player1.size(playerDimension, playerDimension);
  player1.mousePressed(player1Move);
  player1.position(windowWidth * 0.05, windowHeight * 0.05);
  makeUnselectable(player1);
  console.log("fdfdsfdsaf")
  players.push(player1)

  // Player 2
  player2.size(playerDimension, playerDimension);
  player2.mousePressed(player2Move);
  player2.position(windowWidth * 0.05, windowHeight * 0.225);
  makeUnselectable(player2);
  players.push(player2)

  // Player 3
  player3.size(playerDimension, playerDimension);
  player3.mousePressed(player3Move);
  player3.position(windowWidth * 0.05, windowHeight * 0.4);
  makeUnselectable(player3);
  players.push(player3)

  // Player 4
  player4.size(playerDimension, playerDimension);
  player4.mousePressed(player4Move);
  player4.position(windowWidth * 0.05, windowHeight * 0.575);
  makeUnselectable(player4);
  players.push(player4)
  
  // Player 5
  player5.size(playerDimension, playerDimension);
  player5.mousePressed(player5Move);
  player5.position(windowWidth * 0.05, windowHeight * 0.75);
  makeUnselectable(player5);
  players.push(player5)

  // Other 1
  other1.size(playerDimension, playerDimension);
  other1.mousePressed(other1Move);
  other1.position(windowWidth * 0.85, windowHeight * 0.075);
  makeUnselectable(other1);
  players.push(other1)

  // Other 2
  other2.size(playerDimension, playerDimension);
  other2.mousePressed(other2Move);
  other2.position(windowWidth * 0.85, windowHeight * 0.25);
  makeUnselectable(other2);
  players.push(other2)

  // Other 3
  other3.size(playerDimension, playerDimension);
  other3.mousePressed(other3Move);
  other3.position(windowWidth * 0.85, windowHeight * 0.425);
  makeUnselectable(other3);
  players.push(other3)

  // Other 4
  other4.size(playerDimension, playerDimension);
  other4.mousePressed(other4Move);
  other4.position(windowWidth * 0.85, windowHeight * 0.6);
  makeUnselectable(other4);
  players.push(other4)

  // Other 5
  other5.size(playerDimension, playerDimension);
  other5.mousePressed(other5Move);
  other5.position(windowWidth * 0.85, windowHeight * 0.775);
  makeUnselectable(other5);
  players.push(other5)
}

/* P.5 FUNCTIONS */
/* ============= */

/**
 * Draws and refresh the canvas.
 * Also detects mouse input for strokes.
 */
function draw() {
  // IMAGE 
  image(img, 0, 0);
  img.resize(windowWidth, windowHeight);

  drawn.forEach((lineDim) => {
    stroke(lineDim[4]);
    strokeWeight(lineDim[5]);
    line(lineDim[0],lineDim[1],lineDim[2],lineDim[3])
  });

  if(mouseIsPressed && mouseY > divHeight) {
    let playerIndex = playerIndexReturn();
    if(playerIndex >= 0) {
      players[playerIndex].position(mouseX - 100, mouseY - 100);
    } else if (dottedLine) {
      if (dottedCounter % 3 == 0) { 
        drawLine();
      }
      dottedCounter += 1;
    } else {
      drawLine();
    }
  }
  
}

/**
 * Resets player click variables once
 * users are down clicking and dragging.
 */
function mouseReleased(){
  for(let i = 0; i < playerClicked.length; i++) {
    playerClicked[i] = false;
  }
  console.log("All Players Set To False!");
}

/**
 * Draws a line from previous mouse location
 * to the current mouse location.
 */
function drawLine() {
  stroke(strokeColor);
  strokeWeight(strokeSize);  
  let lineDim = [];
  lineDim.push(mouseX);
  lineDim.push(mouseY);
  lineDim.push(pmouseX);
  lineDim.push(pmouseY);
  lineDim.push(strokeColor);
  lineDim.push(strokeSize);
  drawn.push(lineDim);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

/* BUTTON FUNCTIONS */
/* ================ */

/* Information popup. */
function infoAlert() {
  let instruction = "Hello and welcome to my p5 project for Codebase! For the project, I chose to create" +
                    "a play making program for basketball! Click and hold to draw lines and move players around." +
                    "Here are some additional instructions to get you started...\n\n" +
                    "(Eraser) : Removes all lines drawn on the canvas\n" +
                    "(Pen) : Switches pen to all solid strokes\n" +
                    "(Dotted Pen) : Switches pen to dotted strokes\n" +
                    "(+) : Increases stroke size\n" +
                    "(-) : Decreases stroke size\n" +
                    "(Colors) : Switch to change pen color\n" +
                    "(Color Input) : Add a custom color with HEX value\n" +
                    "(Reset) : Resets board to original postion\n" +
                    "(Play Name Input) : Name your play to change save name\n" +
                    "(Save) : Saves current current as a JPEG";
  alert(instruction);
}

/* Erases all lines drawn. */
function eraser() {
  console.log("Eraser Button Pressed!");
  drawn = [];
}

/* Sets pen to solid lines. */
function pencil() {
  console.log("Pencil Button Pressed!");
  dottedLine = false;
}

/* Sets pen to dotted lines. */
function dotted() {
  console.log("Dotted Pencil Button Pressed!");
  dottedLine = true;
}

/* Increases stroke size. */
function increaseStroke() {
  if(strokeSize < 10) {
    strokeSize += 1;
  }
}

/* Decreases stroke size. */
function decreaseStroke() {
  if(strokeSize > 1) {
    strokeSize -= 1;
  } 
}

/* Sets stroke color to black. */
function setBlack() {
  strokeColor = color(26, 26, 26);
}

/* Sets stroke color to red. */
function setRed() {
  strokeColor = color(216, 30, 44);
}

/* Sets stroke color to yellow. */
function setYellow() {
  strokeColor = color(inputColor);
}

function changeColor() {
  if (this.value()[0] == "#" && this.value().length == 7) {
    inputColor = this.value();
    customButton.style("background-color", inputColor);
    console.log("Changed Custom Color!");
  }
}

/**
 * Resets all canvas components to
 * their original position. 
 */
function reset() {
  player1.position(windowWidth * 0.05, windowHeight * 0.05);
  player2.position(windowWidth * 0.05, windowHeight * 0.225);
  player3.position(windowWidth * 0.05, windowHeight * 0.4);
  player4.position(windowWidth * 0.05, windowHeight * 0.575);
  player5.position(windowWidth * 0.05, windowHeight * 0.75);
  other1.position(windowWidth * 0.85, windowHeight * 0.075);
  other2.position(windowWidth * 0.85, windowHeight * 0.25);
  other3.position(windowWidth * 0.85, windowHeight * 0.425);
  other4.position(windowWidth * 0.85, windowHeight * 0.6);
  other5.position(windowWidth * 0.85, windowHeight * 0.775);

  drawn = [];
  strokeSize = 5;
  setBlack();

  console.log("Reset all components...");
}

function savePlay() {
  let content = document.body;
  let dataURI;
  html2canvas(content).then((canvas) => {
    dataURI = canvas.toDataURL("image/jpeg", 0.9);
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = dataURI;
    a.download = playName.value() + ".jpeg";
    a.click();
    document.body.removeChild(a);
  });
}

/**
 * Sets corresponding players index to true
 * within the playerClicked array.
 */
function player1Move() {
  console.log("Clicked Player1...")
  playerClicked[0] = true;
}

function player2Move() {
  console.log("Clicked Player2...")
  playerClicked[1] = true;
}

function player3Move() {
  console.log("Clicked Player3...")
  playerClicked[2] = true;
}

function player4Move() {
  console.log("Clicked Player4...")
  playerClicked[3] = true;
}

function player5Move() {
  console.log("Clicked Player5...")
  playerClicked[4] = true;
}

function other1Move() {
  console.log("Clicked Other1...")
  playerClicked[5] = true;
}

function other2Move() {
  console.log("Clicked Other2...")
  playerClicked[6] = true;
}

function other3Move() {
  console.log("Clicked Other3...")
  playerClicked[7] = true;
}

function other4Move() {
  console.log("Clicked Other4...")
  playerClicked[8] = true;
}

function other5Move() {
  console.log("Clicked Other5...")
  playerClicked[9] = true;
}



/* STYLE FUNCTIONS */
/* =============== */

/**
 * Sets the top divs' CSS styles.
 * @param {*} div = Div to style.
 */
function setDivStyle(div) {
  div.style("display", "flex");
  div.style("align-items", "center");
  div.style("width", "33.33%");
}

/**
 * Makes the players undraggable w/o JS.
 * @param {*} player = Player button.
 */
function makeUnselectable(player) {
  player.style("user-drag", "none");
  player.style("user-select", "none");
  player.style("-moz-user-select", "none");
  player.style("-webkit-user-drag", "none");
  player.style("-webkit-user-select", "none");
  player.style("-ms-user-select", "none");
}

/**
 * Sets the padding for top row buttons.
 * @param {*} butt = Button to set padding for.
 */
function changeButtonPadding(butt) {
  butt.style("margin-left", windowWidth * 0.005 + "px");
  butt.style("margin-right", windowWidth * 0.005 + "px");
}

/**
 * Assigns button to parent and sets function.
 * @param {*} button = Button to add to parent.
 * @param {*} parent = HTML parent element.
 * @param {*} func = Function to assign to button press.
 */
function setButtonValues(button, parent, func) {
  button.parent(parent);
  button.mouseClicked(func);
  button.style("cursor", "pointer");
  button.size(divHeight * 0.75, divHeight * 0.75);
  changeButtonPadding(button);
}

/* MISC. FUNCTIONS */
/* =============== */

/**
 * Resizes the image when window is resized.
 */
function windowResized() {
  img = loadImage("./CodebaseCourt.jpg");
  image(img, 0, 0);
  img.resize(windowWidth, windowHeight);
  console.log("Resized Window!");
}

/**
 * Returns player index of player clicked.
 */
function playerIndexReturn() {
  let playerIndex;
  for(let i = 0; i < playerClicked.length; i++) {
    if (playerClicked[i]) {
        playerIndex = i;
    }
  }
  if(playerIndex != null) {
    return playerIndex;
  } else {
    return -1;
  }
}
