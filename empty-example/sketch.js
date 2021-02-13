
function setup() {
  // Initalize Variables (NE)
  let divHeight = windowHeight * 0.046;
  let divWidth = windowWidth;

  // GLOBAL img VARIABLE
  img = loadImage("./CodebaseCourt.jpg")

  // CREATE TOP FEATURE BAR
  let bar = createDiv().size(divWidth, divHeight);
  let col = color(53,110,226,255);
  bar.style("background-color", col);
  bar.style("display", "flex");
  bar.style("align-items", "center");
  bar.style("position", "fixed");
  bar.position(0, 0)
  

  let canvasButtons = createDiv();
  canvasButtons.parent(bar);
  canvasButtons.style("justify-content", "start");
  setDivStyle(canvasButtons);

  let titleDiv = createDiv();
  titleDiv.html("Play Creator");
  titleDiv.parent(bar);
  titleDiv.style("justify-content", "center");
  setDivStyle(titleDiv);

  let otherFunctions = createDiv();
  otherFunctions.parent(bar);
  setDivStyle(otherFunctions);

  // CREATE TOP BAR BUTTONS
  let eraserButton = createImg("./graphics/eraserIcon.jpg");
  eraserButton.parent(canvasButtons);
  eraserButton.mousePressed(eraser);
  eraserButton.style("cursor", "pointer");
  eraserButton.size(divHeight * 0.75, divHeight * 0.75);
  changeButtonPadding(eraserButton);

  let penButton = createImg("./graphics/penIcon.jpg");
  penButton.parent(canvasButtons);
  penButton.mousePressed(pencil);
  penButton.style("cursor", "pointer");
  penButton.size(divHeight * 0.75, divHeight * 0.75);
  changeButtonPadding(penButton);

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

  // CREATE PLAYER BUTTONS
  console.log(windowHeight * 0.075);
  console.log("joe")

  
}

function draw() {
  // IMAGE 
  image(img, 0, 0);
  img.resize(windowWidth, windowHeight);
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

