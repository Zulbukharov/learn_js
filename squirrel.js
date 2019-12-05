const journal = require('./journal.js');

function hasEvent(event, entry) {
	// true if exist
	return entry.events.indexOf(event) != -1;
}

// parse all data from diary
function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	/*
	 * table[0] = no event, no transform
	 * table[1] = no event, transform
	 * table[2] = event, no tranform
	 * table[3] = event, tranform
	 */
	for (let i = 0; i < journal.length; i++) {
		let has = hasEvent(event, journal[i]);
		let transformation = journal[i].squirrel;
		if (transformation) {
			if (has)
				table[3]++;
			else
				table[2]++;
		} else {
			if (has)
				table[1]++;
			else
				table[0]++;
		}
	}
	//console.log(table);
	return table;
}

// phi
function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) *
		(table[0] + table[1]) *
		(table[1] + table[3]) *
		(table[0] + table[2]));
}

function findCorrelation() {
	let map = {};

	for (let i = 0; i < journal.length; i++) {
		for (let j = 0; j < journal[i].events.length; j++) {
			if (!(journal[i].events[j] in map))
				map[journal[i].events[j]] = phi(tableFor(journal[i].events[j], journal));		
		}
	}
	console.log(map);
}

findCorrelation();
