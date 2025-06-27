const argv = process.argv;

function factorial(a) {
	if (a == NaN) {
		console.log(1);
	}
	else {
		let b = Number(a);
		let result = 1
		for (let i = 2; i <= b; i++) {
			result *= i;
		}
		return result;
	}
}

const answer = factorial(argv[2]);
console.log(answer);
