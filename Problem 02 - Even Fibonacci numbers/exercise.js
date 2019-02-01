function computeFibonacciSequence(beforeLast, last, values, max) {
	let next = beforeLast + last;
	if (next >= max) return values;
	values.push(next);
	return computeFibonacciSequence(last, next, values, max);
}

function generateFibonacciSequence(maxValue) {
	return computeFibonacciSequence(1, 2, [1, 2], maxValue);
}

function sumEvenValues(valueArray) {
	if (
		valueArray &&
		valueArray.constructor === Array &&
		valueArray.length > 0
	) {
		let evenValuesArray = valueArray.filter(
			value => !isNaN(value) && value % 2 === 0
		);

		return evenValuesArray.reduce((sum, v) => (sum += v));
	}
	return 0;
}

exports.generateFibonacciSequence = generateFibonacciSequence;
exports.sumEvenValues = sumEvenValues;
