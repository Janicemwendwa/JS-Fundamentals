const argv = process.argv;

function add(a,b) {
	sum = Number(a) + Number(b);
	console.log(sum);
}

add(argv[2], argv[3]);
