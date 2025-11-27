const fs = require("fs")
const resource = "../../resource/";


fs.readFile(resource+"input-day6.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day6p1(input));
	console.log(day6p2(input));
});

function day6p1(input) {
	const lights =
		Array.from({ length: 1000 },
		() => Array(1000).fill(false));
	const commands = input.split(/\r?\n/);
	let sum = 0;

	for (let i = 0; i < commands.length-1; ++i) {
		day6p1_command(commands[i], lights);
	}

	for (let i = 0; i < lights.length; ++i) {
		for (let j = 0; j < lights[0].length; ++j) {
			sum += lights[i][j];
		}
	}

	return sum;
}

function day6p2(input) {
	const lights =
		Array.from({ length: 1000 },
		() => Array(1000).fill(0));
	const commands = input.split(/\r?\n/);
	let sum = 0;

	for (let i = 0; i < commands.length-1; ++i) {
		day6p2_command(commands[i], lights);
	}

	for (let i = 0; i < lights.length; ++i) {
		for (let j = 0; j < lights[0].length; ++j) {
			sum += lights[i][j];
		}
	}

	return sum;

}

function day6p1_command(command, lights) {
	const [x1, y1, x2, y2] = command.match(/\d+/g).map(Number);

	switch(true) {
	case command.startsWith("turn on"):
		for (let i = x1; i <= x2; ++i) {
			for (let j = y1; j <= y2; ++j) {
				lights[i][j] = true;
			}
		}
		break;
	case command.startsWith("turn off"):
		for (let i = x1; i <= x2; ++i) {
			for (let j = y1; j <= y2; ++j) {
				lights[i][j] = false;
			}
		}
		break;
	case command.startsWith("toggle"):
		for (let i = x1; i <= x2; ++i) {
			for (let j = y1; j <= y2; ++j) {
				lights[i][j] = !lights[i][j];
			}
		}
		break;
	}
}

function day6p2_command(command, lights) {
	const [x1, y1, x2, y2] = command.match(/\d+/g).map(Number);

	switch(true) {
	case command.startsWith("turn on"):
		for (let i = x1; i <= x2; ++i) {
			for (let j = y1; j <= y2; ++j) {
				lights[i][j] += 1;
			}
		}
		break;
	case command.startsWith("turn off"):
		for (let i = x1; i <= x2; ++i) {
			for (let j = y1; j <= y2; ++j) {
				lights[i][j] = Math.max(lights[i][j] - 1, 0);
			}
		}
		break;
	case command.startsWith("toggle"):
		for (let i = x1; i <= x2; ++i) {
			for (let j = y1; j <= y2; ++j) {
				lights[i][j] += 2;
			}
		}
		break;
	}
}
