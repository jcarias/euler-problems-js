function isPrimeNumber(number) {
	if (!number || isNaN(number)) {
		return false;
	}

	let squareRoot = Math.sqrt(new Number(number));
	for (let i = 2; i <= squareRoot; i++)
		if (number % i === 0) {
			return false;
		}

	return number !== 1 && number !== 0;
}

function getPrimeNumbers() {}

function findPrimeFactors(number) {
	if (!number || isNaN(number)) {
		return [];
	}
	let primeFactors = [];

	if (isPrimeNumber(number)) return [number];

	do {
		number;
	} while (condition);

	return primeFactors;
}

function getMaxPrimeFactor(number) {
	return null;
}

exports.isPrimeNumber = isPrimeNumber;
exports.findPrimeFactors = findPrimeFactors;
exports.getMaxPrimeFactor = getMaxPrimeFactor;
