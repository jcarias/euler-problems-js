function sumMultiplesOf3And5(value) {
	if (!value || isNaN(value)) {
		return 0;
	}

	let valueNumber = new Number(value);
	let total = 0;
	for (let i = 1; i < valueNumber; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			total += i;
		}
	}

	return total;
}
exports.sumMultiplesOf3And5 = sumMultiplesOf3And5;
