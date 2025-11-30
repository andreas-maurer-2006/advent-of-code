const fs = require("fs");
const resource = "../../resource/";

fs.readFile(resource+"input-day7.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day7p1(input));
	/*console.log(day7p1(
		"x AND y -> d\n"+
		"x OR y -> e\n"+
		"x LSHIFT 2 -> f\n"+
		"y RSHIFT 2 -> g\n"+
		"NOT x -> h\n"+
		"NOT y -> i\n"+
		"123 -> x\n"+
		"456 -> y\n"
	));*/
	console.log(day7p2(input));
});

function day7p1(input) {
	const commands = input.split(/\r?\n/);
	const state = new Map();

	for (let i = 0; i < commands.length-1; ++i) {
		const [left, identifier] = commands[i].split(" -> ");
		state[identifier] = left.split(" ");
	}

	return day7p1_determine(state, "a");

	console.log(day7p1_determine(state, 'd'));
	console.log(day7p1_determine(state, 'e'));
	console.log(day7p1_determine(state, 'f'));
	console.log(day7p1_determine(state, 'g'));
	console.log(day7p1_determine(state, 'h'));
	console.log(day7p1_determine(state, 'i'));
	console.log(day7p1_determine(state, 'x'));
	console.log(day7p1_determine(state, 'y'));
}

function day7p2(input) {
	
}

function day7p1_determine(state, command) {
	let lhs, op, rhs;

	console.log(command);

	if (!isNaN(command)) {
		console.log(Number(command));
		return Number(command);
	}
	switch (state[command].length) {
	case 1:
	console.log("1");
		[lhs] = // it has something to do with this
		return day7p1_determine(state, state[command]);
		break;
	case 2:
	console.log("2");
		[op, rhs] = state[command];
		return (~day7p1_determine(state, rhs)) & 0xFFFF;
		break;
	case 3:
	console.log("3");
		[lhs, op, rhs] = state[command];
		switch (op) {
		case "AND":
			return (
				day7p1_determine(state, lhs)
				& day7p1_determine(state, rhs)
			) & 0xFFFF;
		case "OR":
			return (
				day7p1_determine(state, lhs)
				| day7p1_determine(state, rhs)
			) & 0xFFFF;
		case "LSHIFT":
			return (
				day7p1_determine(state, lhs)
				<< day7p1_determine(state, rhs)
			) & 0xFFFF;
		case "RSHIFT":
			return (
				day7p1_determine(state, lhs)
				>> day7p1_determine(state, rhs)
			) & 0xFFFF;
		default:
			throw new Error("error: unreachable code reached");
		}
	default:
		throw new Error("error: unreachable code reached"); }
}
