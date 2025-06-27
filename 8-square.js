const argv = process.argv;

if (!Number(argv[2])) {
	console.log('Missing size');
}
else {
	for (let i = 1; i <= argv[2]; i++) {
		for (let j = 1; j <= argv[2]; j++) {
			process.stdout.write('X');
		}
		console.log();
	}
}
