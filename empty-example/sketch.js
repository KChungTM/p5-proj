
function setup() {
  // Initalize Variables (NE)
  let divHeight = windowHeight * 0.046;
  let divWidth = windowWidth;
  // GLOBAL img VARIABLE
  img = loadImage("./CodebaseCourt.jpg")

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
  let canvasButtons = createDiv();
  canvasButtons.parent(bar);
  canvasButtons.style("justify-content", "start");
  setDivStyle(canvasButtons);

  let titleDiv = createDiv();
  titleDiv.html("Play Creator");
  titleDiv.parent(bar);
  titleDiv.style("color", "white");
  titleDiv.style("font-size", "200%");
  titleDiv.style("font-family", "Jersey M54");
  titleDiv.style("justify-content", "center");
  setDivStyle(titleDiv);

  let otherFunctions = createDiv();
  otherFunctions.parent(bar);
  setDivStyle(otherFunctions);

  /* CREATE TOP BAR BUTTONS */

  // Eraser Button
  let eraserButton = createImg("./graphics/eraserIcon.jpg");
  eraserButton.parent(canvasButtons);
  eraserButton.mousePressed(eraser);
  eraserButton.style("cursor", "pointer");
  eraserButton.size(divHeight * 0.75, divHeight * 0.75);
  changeButtonPadding(eraserButton);

  // Pen Button
  let penButton = createImg("./graphics/penIcon.jpg");
  penButton.parent(canvasButtons);
  penButton.mousePressed(pencil);
  penButton.style("cursor", "pointer");
  penButton.size(divHeight * 0.75, divHeight * 0.75);
  changeButtonPadding(penButton);

  // Dotted Pen Button
  let dottedButton = createImg("./graphics/dottedPenIcon.jpg");
  dottedButton.parent(canvasButtons);
  dottedButton.mousePressed(dotted);
  dottedButton.style("cursor", "pointer");
  dottedButton.size(divHeight * 0.75, divHeight * 0.75);
  changeButtonPadding(dottedButton);
    
  // CREATE COURT CANVAS
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("position", "fixed");
  console.log(windowWidth);

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
  let player1 = createImg("./graphics/player1.png");
  player1.size(playerDimension, playerDimension);
  player1.mousePressed(player1Move);
  player1x = windowWidth * 0.05;
  player1y = windowHeight * 0.05;
  player1.position(player1x, player1y);
  players.push(player1)

  // Player 2
  let player2 = createImg("./graphics/player2.png");
  player2.size(playerDimension, playerDimension);
  player2.mousePressed(player2Move);
  player2x = windowWidth * 0.05;
  player2y = windowHeight * 0.225;
  player2.position(player2x, player2y);
  players.push(player2)

  // Player 3
  let player3 = createImg("./graphics/player3.png");
  player3.size(playerDimension, playerDimension);
  player3.mousePressed(player3Move);
  player3x = windowWidth * 0.05;
  player3y = windowHeight * 0.4;
  player3.position(player3x, player3y);
  players.push(player3)

  // Player 4
  let player4 = createImg("./graphics/player4.png");
  player4.size(playerDimension, playerDimension);
  player4.mousePressed(player4Move);
  player4x = windowWidth * 0.05;
  player4y = windowHeight * 0.575;
  player4.position(player4x, player4y);
  players.push(player4)
  
  // Player 5
  let player5 = createImg("./graphics/player5.png");
  player5.size(playerDimension, playerDimension);
  player5.mousePressed(player5Move);
  player5x = windowWidth * 0.05;
  player5y = windowHeight * 0.75;
  player5.position(player5x, player5y);
  players.push(player5)

  /* OTHER BUTTONS */

  // Other 1
  let other1 = createImg("./graphics/other1.png");
  other1.size(playerDimension, playerDimension);
  other1.mousePressed(other1Move);
  other1x = windowWidth * 0.85;
  other1y = windowHeight * 0.05;
  other1.position(other1x, other1y);
  players.push(other1)

  // Other 2
  let other2 = createImg("./graphics/other2.png");
  other2.size(playerDimension, playerDimension);
  other2.mousePressed(other2Move);
  other2x = windowWidth * 0.85;
  other2y = windowHeight * 0.225;
  other2.position(other2x, other2y);
  players.push(other2)

  // Other 3
  let other3 = createImg("./graphics/other3.png");
  other3.size(playerDimension, playerDimension);
  other3.mousePressed(other3Move);
  other3x = windowWidth * 0.85;
  other3y = windowHeight * 0.4;
  other3.position(other3x, other3y);
  players.push(other3)

  // Other 4
  let other4 = createImg("./graphics/other4.png");
  other4.size(playerDimension, playerDimension);
  other4.mousePressed(other4Move);
  other4x = windowWidth * 0.85;
  other4y = windowHeight * 0.575;
  other4.position(other4x, other4y);
  players.push(other4)

  // Other 5
  let other5 = createImg("./graphics/other5.png");
  other5.size(playerDimension, playerDimension);
  other5.mousePressed(other5Move);
  other5x = windowWidth * 0.85;
  other5y = windowHeight * 0.75;
  other5.position(other5x, other5y);
  players.push(other5)

  


  console.log(windowHeight * 0.075);
  console.log("joe")

  
}

function draw() {
  // IMAGE 
  image(img, 0, 0);
  img.resize(windowWidth, windowHeight);

  if(mouseIsPressed) {
    let playerIndex = playerIndexReturn();
    if(playerIndex >= 0) {
      players[playerIndex].position(mouseX - 100, mouseY - 100);
    } else {
      ellipse(mouseX, mouseY, 2, 2);
    }
  }
}

function mouseReleased(){
  for(let i = 0; i < playerClicked.length; i++) {
    playerClicked[i] = false;
  }
  cursor("default");
  console.log("All Players Set To False!");
}

function changeButtonPadding(butt) {
  butt.style("margin-left", windowWidth * 0.005 + "px");
  butt.style("margin-right", windowWidth * 0.005 + "px");
}

function eraser() {
  console.log("Eraser Button Pressed!");
}

function pencil() {
  console.log("Pencil Button Pressed!");
}

function dotted() {
  console.log("Dotted Pencil Button Pressed!");
}

function setDivStyle(div) {
  div.style("display", "flex");
  
  div.style("align-items", "center");
  div.style("width", "33.33%");
}

function windowResized() {
  img = loadImage("./CodebaseCourt.jpg");
  image(img, 0, 0);
  img.resize(windowWidth, windowHeight);
  console.log("Resized Window!");
}

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

