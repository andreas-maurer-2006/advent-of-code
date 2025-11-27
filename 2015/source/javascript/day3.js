const fs = require("fs");
const resource = "../../resource/";

fs.readFile(resource+"input-day3.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day3p1(input));
	console.log(day3p2(input));
});

function day3p1(input) {
	const [min_x, min_y, len_x, len_y] = day3p1_max_xy(input);
	const houses =
		Array.from({ length: len_x },
		() => Array(len_y).fill(false));
	let x = Math.abs(min_x), y = Math.abs(min_y);
	let visited = 1;
	houses[x][y] = true;

	for (let i = 0; i < input.length; ++i) {
		switch (input[i]) {
		case '^':
			y++;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		case '>':
			x++;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		case 'v':
			y--;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		case '<':
			x--;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		}
	}

	return visited;
}

function day3p2(input) {
	/*
		We could make the array size dynamic by calculating santas minimum
		and length and robots minimum and length. The way this works can
		be found on day3p1_max_xy function, however making a rectangle of
		500; 500 will do the trick as well.
	*/
	const houses =
		Array.from({ length: 500 },
		() => Array(500).fill(false));
	let x = 250, y = 250;
	let santa_x = x, santa_y = y;
	let robot_x = x, robot_y = y;
	let visited = 1;
	houses[x][y] = true;

	for (let i = 0; i < input.length; ++i) {
		if (i % 2) {
			x = santa_x;
			y = santa_y;
		} else {
			x = robot_x;
			y = robot_y;
		}
		switch (input[i]) {
		case '^':
			y++;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		case '>':
			x++;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		case 'v':
			y--;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		case '<':
			x--;
			if (!houses[x][y]) {
				houses[x][y] = true;
				visited++;
			}
			break;
		}
		if (i % 2) {
			santa_x = x;
			santa_y = y;
		} else {
			robot_x = x;
			robot_y = y;
		}
	}

	return visited;
	
	return 67;
}

/* Day 3 part 1 */

// I have to calculate the minimum as well

function day3p1_max_xy(input) {
	let x, y, min_x, min_y, max_x, max_y;
	x = y = min_x = min_y = max_x = max_y = 0;
	for (let i = 0; i < input.length; ++i) {
		switch(input[i]) {
		case '^': y++;
			if (max_y < Math.abs(y))
				max_y = Math.abs(y);
			break;
		case '>': x++;
			if (max_x < Math.abs(x))
				max_x = Math.abs(x);
			break;
		case 'v':
			y--;
			if (y < min_y)
				min_y = y;
			break;
		case '<':
			x--;
			if (x < min_x)
				min_x = x;
			break;;
		}
	}
	return [
		min_x, min_y,
		Math.abs(min_x) + max_x + 1,
		Math.abs(min_y) + max_y + 1
	];
}

/* Day 3 part 2 */
