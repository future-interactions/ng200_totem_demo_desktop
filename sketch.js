var vSize = 10;
var stepper = 100;
let bgImagesL = [];
let textImagesL = [];
let bgImagesR = [];
let textImagesR = [];
let frame;
let words = [];
let myFont;
var scalerPerc = .60;
let logo;
var bgCounterL = 1;
var bgCounterR = 0;
var vKey = 0;
var swingAmount = 4;
var overhang = 0;
function preload() {
	bgImagesL[0] = loadImage('assets/error_img.png');
	bgImagesL[1] = loadImage('assets/hodler.png');
	bgImagesL[2] = loadImage('assets/sunflowers_L.png');
	bgImagesL[3] = loadImage('assets/duchess_L.png');
	bgImagesL[4] = loadImage('assets/eyck.png');
	bgImagesL[5] = loadImage('assets/francesca.png');
	bgImagesL[6] = loadImage('assets/rouseau_L.png');
	bgImagesL[7] = loadImage('assets/entrance_closed_img_L.png');
	bgImagesL[8] = loadImage('assets/closed_img_L.png');



	bgImagesR[0] = loadImage('assets/error_img.png');
	bgImagesR[1] = loadImage('assets/bellini.png');
	bgImagesR[2] = loadImage('assets/haywain.png');
	bgImagesR[3] = loadImage('assets/pechstein.png');
	bgImagesR[4] = loadImage('assets/titian.png');
	bgImagesR[5] = loadImage('assets/whistlejacket_L.png');
	bgImagesR[6] = loadImage('assets/rouseau_R.png');
	bgImagesR[7] = loadImage('assets/entrance_closed_img_R.png');
	bgImagesR[8] = loadImage('assets/closed_img_R.png');


	textImagesL[0] = loadImage('assets/error_text.png');
	textImagesL[1] = loadImage('assets/opening_soon_text_L.png');
	textImagesL[2] = loadImage('assets/open_L.png');
	textImagesL[3] = loadImage('assets/open_late_L.png');
	textImagesL[4] = loadImage('assets/closing_soon_L.png');
	textImagesL[5] = loadImage('assets/closed_L.png');
	textImagesL[6] = loadImage('assets/closed_L.png');
	textImagesL[7] = loadImage('assets/entrance_closed.png');
	textImagesL[8] = loadImage('assets/gallery_closed.png');


	textImagesR[0] = loadImage('assets/error_text.png');
	textImagesR[1] = loadImage('assets/on_today_R.png');
	textImagesR[2] = loadImage('assets/on_today_R.png');
	textImagesR[3] = loadImage('assets/on_today_R.png');
	textImagesR[4] = loadImage('assets/on_tomorrow_R.png');
	textImagesR[5] = loadImage('assets/on_tomorrow_R.png');
	textImagesR[6] = loadImage('assets/on_tomorrow_R.png');
	textImagesR[7] = loadImage('assets/entrance_closed.png');
	textImagesR[8] = loadImage('assets/gallery_closed.png');



	myFont = loadFont('assets/DMSans-Medium.ttf');
	logo = loadImage('assets/logo.png');
	frame = loadImage('assets/screen_frame.png');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
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
	//drawMask();
	drawTextLayerL();
	//drawGuides();
	drawFrameL();

	drawBgR();
	drawTextLayerR();
	drawFrameR();
}

function drawBgL() {
	//console.log(key);

	//background(255);
	let sinSize = 400;
	bgCounterL += 0.002;
	//let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2;
	let x = windowWidth / 4 - (bgImagesL[vKey].width * scalerPerc) / 2 + (sin(bgCounterL) * (bgImagesL[vKey].width * scalerPerc) / swingAmount);
	let y = windowHeight / 2 - (bgImagesL[vKey].height * scalerPerc) / 2;
	let w = bgImagesL[vKey].width * scalerPerc;
	let h = bgImagesL[vKey].height * scalerPerc;
	image(bgImagesL[vKey], x, y, w, h);
	overhang = (bgImagesL[vKey].width * scalerPerc) / swingAmount;
	stroke(255);
}

function drawBgR() {
	//console.log(key);

	//background(255);
	let sinSize = 400;
	bgCounterR += 0.002;
	//let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2;
	let x = windowWidth / 4 * 3 - (bgImagesL[vKey].width * scalerPerc) / 2 + (sin(bgCounterR) * (bgImagesL[vKey].width * scalerPerc) / swingAmount);
	let y = windowHeight / 2 - (bgImagesL[vKey].height * scalerPerc) / 2;
	let w = bgImagesR[vKey].width * scalerPerc;
	let h = bgImagesR[vKey].height * scalerPerc;
	image(bgImagesR[vKey], x, y, w, h);
	overhang = (bgImagesR[vKey].width * scalerPerc) / swingAmount;
	stroke(255);
}

function drawTextL() {
	fill(255);
	let x = windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2;
	let y = windowHeight / 2 - (bgImagesL[vKey].height * scalerPerc) / 2.2;
	let w = logo.width * scalerPerc;
	let h = logo.height * scalerPerc;

	text(words[vKey], windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2.2 + overhang, windowHeight / 2 - (bgImagesL[vKey].height * scalerPerc) / 6, bgImagesL[vKey].width * scalerPerc / 1.5, bgImagesL[vKey].height * scalerPerc / 1.5);
	image(logo, windowWidth / 2 - (logo.width * scalerPerc) / 2, y, w, h);
}

function drawMask() {
	noStroke();
	fill(200);
	rect(0, 0, windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + overhang, height);
	rect(windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + bgImagesL[vKey].width * scalerPerc - overhang, 0, width, height);

}

function drawGuides() {
	//lines inc overhang
	line(windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2, 0, windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2, height)
	line(windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + bgImagesL[vKey].width * scalerPerc, 0, windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + bgImagesL[vKey].width * scalerPerc, height);
	//lines less overhang
	line(windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + overhang, 0, windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + overhang, height);
	line(windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + bgImagesL[vKey].width * scalerPerc - overhang, 0, windowWidth / 2 - (bgImagesL[vKey].width * scalerPerc) / 2 + bgImagesL[vKey].width * scalerPerc - overhang, height);

}

function drawTextLayerL() {
	let x = windowWidth / 4 - (textImagesL[vKey].width * scalerPerc) / 2;
	let y = windowHeight / 2 - (textImagesL[vKey].height * scalerPerc) / 2;
	let w = textImagesL[vKey].width * scalerPerc;
	let h = textImagesL[vKey].height * scalerPerc;

	image(textImagesL[vKey], x, y, w, h);
	image(logo, windowWidth / 4 - (logo.width * scalerPerc) / 3, windowHeight / 2 - textImagesL[0].height * scalerPerc / 3 - logo.height / 1.8, logo.width * scalerPerc / 1.5, logo.height * scalerPerc / 1.5);

}

function drawTextLayerR() {
	let x = windowWidth / 4*3 - (textImagesL[vKey].width * scalerPerc) / 2;
	let y = windowHeight / 2 - (textImagesL[vKey].height * scalerPerc) / 2;
	let w = textImagesL[vKey].width * scalerPerc;
	let h = textImagesL[vKey].height * scalerPerc;

	image(textImagesR[vKey], x, y, w, h);
	image(logo, windowWidth / 4*3 - (logo.width * scalerPerc) / 3, windowHeight / 2 - textImagesL[0].height * scalerPerc / 3 - logo.height / 1.8, logo.width * scalerPerc / 1.5, logo.height * scalerPerc / 1.5);

}

function drawFrameL() {
	let x = windowWidth / 4 - (frame.width * scalerPerc) / 2;
	let y = windowHeight / 2 - (frame.height * scalerPerc) / 2.4;
	let w = frame.width * scalerPerc;
	let h = frame.height * scalerPerc;

	image(frame, x, y, w, h);
}

function drawFrameR() {
	let x = windowWidth / 4 * 3 - (frame.width * scalerPerc) / 2;
	let y = windowHeight / 2 - (frame.height * scalerPerc) / 2.4;
	let w = frame.width * scalerPerc;
	let h = frame.height * scalerPerc;

	image(frame, x, y, w, h);
}

function keyTyped() {
	if (key >= 0 & key <= 8 & keyCode !== 32) {
		vKey = key;
	}
	//drawBgL(key);
	return false; // prevent any default behaviour
}

function touchStarted() {
	if (vKey < 8) {
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


