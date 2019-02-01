function isPrime(value) {
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {
			return false;
		}
	}
	return value > 1;
}

function getLargestPrimeFactor(originalTarget) {
	var target = originalTarget;
	var i = 2;
	while (i < target) {
		while (target % i === 0 && !isPrime(target)) {
			(function(newTarget) {
				target = newTarget;
			})(target / i);
		}
		i++;
	}
	return target;
}

exports.getLargestPrimeFactor = getLargestPrimeFactor;
