const fs = require("fs");
const resource = "../../resource/";

fs.readFile(resource+"input-day7.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day7p1(input));
	/*console.log(day7p1(
		"123 -> x\n"+
		"456 -> y\n"+
		"x AND y -> d\n"+
		"x OR y -> e\n"+
		"x LSHIFT 2 -> f\n"+
		"y RSHIFT 2 -> g\n"+
		"NOT x -> h\n"+
		"NOT y -> i\n"
	));*/
	console.log(day7p2(input));
});

function day7p1(input) {
	const commands = input.split(/\r?\n/);
	const state = new Map();

	for (let i = 0; i < commands.length-1; ++i) {
		day7p1_command(state, commands[i]);
	}

	/*console.log(state['d']);
	console.log(state['e']);
	console.log(state['f']);
	console.log(state['g']);
	console.log(state['h']);
	console.log(state['i']);
	console.log(state['x']);
	console.log(state['y']);*/

	return state['a'];
}

function day7p2(input) {
	
}

function day7p1_command(state, command) {
	const [left, identifier] = command.split(" -> ");
	let lhs, op, rhs;

	switch (left.split(" ").length) {
	case 1:
		state[identifier] = !isNaN(left) ? Number(left) : (state[left] ?? 0);
		break;
	case 2:
		[op, rhs] = left.split(" ");
		rhs = !isNaN(rhs) ? Number(rhs) : (state[rhs] ?? 0);
		state[identifier] = (~rhs) & 0xFFFF;
		break;
	case 3:
		[lhs, op, rhs] = left.split(" ");
		if (isNaN(lhs))
			lhs = state[lhs] ?? 0;
		else
			lhs = Number(lhs)
		if (isNaN(rhs))
			rhs = state[rhs] ?? 0;
		else
			rhs = Number(rhs);
		switch (op) {
		case "AND":
			state[identifier] = (lhs & rhs) & 0xFFFF;
			break;
		case "OR":
			state[identifier] = (lhs | rhs) & 0xFFFF;
			break;
		case "LSHIFT":
			state[identifier] = (lhs << rhs) & 0xFFFF;
			break;
		case "RSHIFT":
			state[identifier] = (lhs >> rhs) & 0xFFFF;
			break;
		}
		console.log(
			"ident: "+identifier+
			"\nlhs: "+lhs+
			"\nop: "+op+
			"\nrhs: "+rhs+
			"\nstate: "+state[identifier]+
			"\n\n");
		break;
	}
}
