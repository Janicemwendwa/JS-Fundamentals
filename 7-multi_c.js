const argv = process.argv;

if (!Number(argv[2])) {
	console.log('Missing number of occurences');
}
else {
	for (let i = 0; i < argv[2]; i++) {
		console.log("C is fun");
	}
}
