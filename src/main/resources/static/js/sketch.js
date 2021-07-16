
let points = { pointsarr: [] }
let timerID = setInterval(() => checkPoints(), 5000);

function checkPoints() {
	fetch("/points?payload=" + JSON.stringify(points))
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result);
			},

		)
}

function setup() {
	createCanvas(640, 480);
}
// Esta función se ejecuta repetidas veces indefinidamente.
function draw() {
	if (mouseIsPressed === true) {
		fill(0, 0, 0);
		ellipse(mouseX, mouseY, 20, 20);
		points.pointsarr.push([mouseX, mouseY]);
	}
	if (mouseIsPressed === false) {
		fill(255, 255, 255);
	}

}