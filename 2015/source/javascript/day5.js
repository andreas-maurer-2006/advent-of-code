const fs = require("fs");
const resource = "../../resource/";

fs.readFile(resource+"input-day5.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day5p1(input));
	console.log(day5p2(input));
});

function day5p1(input) {
	let sum = 0;
	const lines = input.split(/\r?\n/);
	for (let i = 0; i < lines.length-1; ++i) {
		sum += day5p1_is_string_nice(lines[i].trim());
	}
	return sum;
}

function day5p2(input) {

}

function day5p1_is_string_nice(str) {
	let vowels = 0;
	let double_letter = false;
	let no_illegal_strings = false;

	for (let i = 0; i < str.length; ++i) {
		if ("aeiou".includes(str[i]))
			vowels++;
		if (i !== 0 && str[i-1] === str[i])
			double_letter = true;
	}

	no_illegal_strings = ! [ "ab", "cd", "pq", "xy" ].some(
		sub => str.includes(sub)
	);

	return vowels >= 3 && double_letter && no_illegal_strings;
}
