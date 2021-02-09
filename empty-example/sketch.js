function setup() {
  // CREATE TOP FEATURE BAR
  let page = createDiv().size(windowWidth, windowHeight * 0.075);
  page.position(0, 0)
  let col = color(25, 23, 200, 50)

  // CHANGE FEATURE BAR STYLE
  page.style("background-color", col);
  page.style("display", "flex");
  page.style("justify-content", "start");
  page.style("align-items", "center");

  // CREATE TOP BAR BUTTONS
  let button1 = createButton("HELP");
  let button2 = createButton("HELP");

  // CHANGE PADDING OF BUTTONS
  changeButtonPadding(button1);
  changeButtonPadding(button2);

  button1.parent(page);
  button2.parent(page);
  
  // CREATE COURT CANVAS
  let court = createCanvas(windowWidth, windowHeight- windowHeight * 0.075);
  court.position(0, windowHeight * 0.075);

  // button = createImg('mod.png');
  // button.position(19, 19);
  // button.mousePressed(changeBG);
  console.log(windowHeight * 0.075);
}

function draw() {
  // put drawing code here
  background(250, 250, 100);
}

function changeButtonPadding(butt) {
  butt.style("margin-left", windowWidth * 0.005 + "px");
  butt.style("margin-right", windowWidth * 0.005 + "px");
}