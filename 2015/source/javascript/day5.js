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
	let sum = 0;
	const lines = input.split(/\r?\n/);
	for (let i = 0; i < lines.length-1; ++i) {
		sum += day5p2_is_string_nice(lines[i].trim());
	}
	return sum;
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

function day5p2_is_string_nice(str) {
	let pair_of_two_letter = false;
	let repeat_with_letter_between = false;

	for (let i = 1; i < str.length-1; ++i) {
		if (str.split(str.substring(i-1, i+1)).length != 2) {
			pair_of_two_letter = true;
			/*console.log(
				 "str.substring(i-1, i+1):"
				+ str.substring(i-1, i+1)
				+"str.split(str.substring(i-1, i+1)):"
				+ str.split(str.substring(i-1, i+1)).length);*/
		}
		if (str[i-1] === str[i+1])
			repeat_with_letter_between = true;
	}

	if (str.split(str.substring(str.length-2, str.length)).length != 2) {
		pair_of_two_letter = true;
		/*console.log("str.substring(str.length-2, str.length): "
			+str.substring(str.length-2, str.length));*/
	}

	return pair_of_two_letter && repeat_with_letter_between;
}
