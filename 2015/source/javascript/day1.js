const fs = require("fs");
const resource = "../../resource/";

fs.readFile(resource+"input-day1.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day1p1(input));
	console.log(day1p2(input));
});


function day1p1(input) {
	let floor = 0;
	for (let i = 0; i < input.length; ++i) {
		floor += input[i] == '(';
		floor -= input[i] == ')';
	}
	return floor;
}

function day1p2(input) {
	let floor = 0;
	for (let i = 0; i < input.length; ++i) {
		floor += input[i] == '(';
		floor -= input[i] == ')';
		if (floor == -1)
			return i+1;
	}
	return null;
}
