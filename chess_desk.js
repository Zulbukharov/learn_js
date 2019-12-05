if (isNaN(process.argv[2]) || isNaN(process.argv[3])) {
	console.log("Usage: node <program> <x> <y>");
	return
}

let x = Number(process.argv[2]);
let y = Number(process.argv[3]);

for (let i = 0; i < x; i++) {
	let line = "";
	for (let j = 0; j < y;  j++) {
		if (i % 2 === 0 && j % 2 === 0)
			line += "#";
		else if (i % 2 === 0 && j % 2 === 1)
			line += " ";
		else if (i % 2 === 1 && j % 2 === 1)
			line += "#";
		else
			line += " ";
	}
	console.log(line);
}
