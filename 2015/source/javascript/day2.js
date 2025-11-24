const fs = require("fs");
const resource = "../../resource/";

fs.readFile(resource+"input-day2.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day2p1(input));
});

function day2p1(input) {
	const lines = input.split('\n');
	let wrapping_paper = 0;
	for (let i = 0; i < lines.length-1; ++i) {
		const [l, w, h] = lines[i].split('x').map(Number);
		const sorted_sides = [l, w, h].sort((x, y) => x - y);
		wrapping_paper
			+= 2*l*w + 2*w*h + 2*h*l + sorted_sides[0] * sorted_sides[1];
	}
	return wrapping_paper;
}

function day2p2(input) {

}
