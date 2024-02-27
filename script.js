

// Node.js program to demonstrate the
// console.table() method

// Accessing console module
const console = require('console');

// Calling console.table()
// without construction rule
console.table([
	{ a: 1, b: 2 },
	{ a: 3, b: 7, c: 'y' }
]);

// With construction rule
console.table([
	{ a: 1, b: 2 },
	{ a: 3, b: 7, c: 'y' }],
	["a", "b"]
);

