function setup() {
  // CREATE TOP FEATURE BAR
  let bar = createDiv().size(windowWidth, windowHeight * 0.046);
  bar.position(0, 0)
  let col = color(0, 0, 0,100)

  // CHANGE FEATURE BAR STYLE
  bar.style("background-color", col);
  bar.style("display", "flex");
  bar.style("justify-content", "start");
  bar.style("align-items", "center");

  // CREATE TOP BAR BUTTONS
  let button1 = createButton("HELP");
  let button2 = createButton("HELP");

  // CHANGE PADDING OF BUTTONS
  changeButtonPadding(button1);
  changeButtonPadding(button2);

  button1.parent(bar);
  button2.parent(bar);
  
  // CREATE COURT CANVAS
  let court = createCanvas(windowWidth, windowHeight);
  court.position(0, 0);
  console.log(windowWidth);

  // button = createImg('mod.png');
  // button.position(19, 19);
  // button.mousePressed(changeBG);
  console.log(windowHeight * 0.075);

  img = loadImage("./CodebaseCourtWhite.jpg");
}

function draw() {
  // put drawing code here
  background(250, 250, 100);
  image(img, 0, 0);
  img.resize(windowWidth, windowHeight);
}

function changeButtonPadding(butt) {
  butt.style("margin-left", windowWidth * 0.005 + "px");
  butt.style("margin-right", windowWidth * 0.005 + "px");
}