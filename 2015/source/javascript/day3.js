const fs = require("fs");
const resource = "../../resource/";

fs.readFile(resource+"input-day3.txt", "utf8", (error, input) => {
	if (error)
		throw error;
	console.log(day3p1(input));
});

function day3p1(input) {
	const [min_x, min_y, len_x, len_y] = d3p1_max_xy(input);
	const houses =
		Array.from({ length: len_x },
		() => Array(len_y).fill(false));
	let x = Math.abs(min_x), y = Math.abs(min_y);
	let visited = 1;
	houses[x][y] = true;

	console.log(
		"x: "+x+"\ny: "+y
		+"\nmin_x: "+min_x+"\nmin_y: "+min_y
		+"\nlen_x: "+len_x+"\nlen_y: "+len_y);

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

}

/* Day 3 part 1 */

// I have to calculate the minimum as well

function d3p1_max_xy(input) {
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
