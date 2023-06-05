var vSize = 10;
var stepper = 100;
let bgImages = [];
let textImages = [];
let words = [];
let myFont;
var scalerPerc = .75;
let logo;
var bgCounter = 0;
var vKey = 0;
var swingAmount = 6;
var overhang = 0;
function preload() {
	bgImages[0] = loadImage('assets/whistlejacket_L.png');
	bgImages[1] = loadImage('assets/whistlejacket_L.png');
	bgImages[2] = loadImage('assets/sunflowers_L.png');
	bgImages[3] = loadImage('assets/duchess_L.png');
	textImages[0] = loadImage('assets/opening_soon_text_L.png');
	textImages[1] = loadImage('assets/opening_soon_text_L.png');
	textImages[2] = loadImage('assets/opening_soon_text_L.png');
	textImages[3] = loadImage('assets/opening_soon_text_L.png');
	myFont = loadFont('assets/DMSans-Medium.ttf');
	logo = loadImage('assets/logo.png');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	fill(255, 0, 0);
	words[0] = 'Welcome';
	words[1] = 'Welcome to \n \nthe National Gallery \n \n Free entry for all \n \nOpen in 23 mins';
	words[2] = 'Welcome to \n \nthe National Gallery \n \n Free entry for all ';
	words[3] = 'Closing soon';
	textFont(myFont);
	textSize(54 * scalerPerc);
	textLeading(62 * scalerPerc);

	fill(255);
	textAlign(LEFT);

}

function draw() {
	drawBgL();
	//drawTextL();
	drawMask();
	drawTextLayerL();
	//drawGuides();
}

function drawBgL() {
	//console.log(key);

	background(0);
	let sinSize = 400;
	bgCounter += 0.003;
	//let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2;
	let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + (sin(bgCounter) * (bgImages[vKey].width * scalerPerc) / swingAmount);
	let y = windowHeight / 2 - (bgImages[vKey].height * scalerPerc) / 2;
	let w = bgImages[vKey].width * scalerPerc;
	let h = bgImages[vKey].height * scalerPerc;
	image(bgImages[vKey], x, y, w, h);
	overhang = (bgImages[vKey].width * scalerPerc) / swingAmount;
	stroke(255);
}

function drawTextL() {
	fill(255);
	let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2;
	let y = windowHeight / 2 - (bgImages[vKey].height * scalerPerc) / 2.2;
	let w = logo.width * scalerPerc;
	let h = logo.height * scalerPerc;

	text(words[vKey], windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2.2 + overhang, windowHeight / 2 - (bgImages[vKey].height * scalerPerc) / 6, bgImages[vKey].width * scalerPerc / 1.5, bgImages[vKey].height * scalerPerc / 1.5);
	image(logo, windowWidth / 2 - (logo.width * scalerPerc) / 2, y, w, h);
}

function drawMask() {
	noStroke();
	fill(0);
	rect(0, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + overhang, height);
	rect(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc - overhang, 0, width, height);

}

function drawGuides() {
	//lines inc overhang
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2, height)
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc, height);
	//lines less overhang
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + overhang, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + overhang, height);
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc - overhang, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc - overhang, height);

}

function drawTextLayerL(){
	let x = windowWidth / 2 - 414/2;
	let y = windowHeight / 2 - 896/2;
	let w = 414;
	let h = 896;
	
image(textImages[0],x,y,w,h);
image(logo, windowWidth / 2 - (logo.width * scalerPerc) / 3,  windowHeight / 2 - textImages[0].height * scalerPerc/3-logo.height/0.9, logo.width*scalerPerc/1.5, logo.height*scalerPerc/1.5);

}

function keyTyped() {
	if (key >= 0 & key <= 3 & keyCode !== 32) {
		vKey = key;
	}
	//drawBgL(key);
	return false; // prevent any default behaviour
}

function touchStarted() {
	if (vKey < 3) {
		vKey++;
	} else {
		vKey = 0;
	}
	var fs = fullscreen();
	if (!fs) {
		fullscreen(true);
	}
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
document.ontouchmove = function (event) {
	event.preventDefault();
};


