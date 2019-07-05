function greeting (greeting = 'Hello', name = 'friend') {
	console.log(`${greeting} ${name}`);
}

greeting('Hi', 'Bill');
greeting('Hi')
greeting();

function sum(...values) {
	console.log(values);

	let sum = 0;
	values.forEach(function (value) {
		sum += value;
	});

	console.log(sum);
}

sum(5,7,2,10);