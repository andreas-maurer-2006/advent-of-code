const fs = require("fs")
const crypto = require("crypto")
const resource = "../../resource/";

fs.readFile(resource+"input-day4.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	input = input.trim();
	console.log(day4p1(input));
	console.log(day4p2(input));
});

function day4p1(input) {
	for (let i = 0 ;; ++i) {
		if (md5(input+i).slice(0, 5) === "00000")
			return i;
	}
}

function day4p2(input) {
	for (let i = 0 ;; ++i) {
		if (md5(input+i).slice(0, 6) === "000000")
			return i;
	}
}

function md5(text) {
	return crypto.createHash('md5').update(text).digest('hex');
}
