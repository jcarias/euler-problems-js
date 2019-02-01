function reverseString(string) {
	if (typeof string !== "string") {
		return "";
	}

	let reversed = [];
	for (let i = string.length - 1; i >= 0; i--) {
		reversed.push(string[i]);
	}
	return reversed.join("");
}

function isPalindrome(number) {
	let original = number + "";
	let reverse = reverseString(original);
	return original === reverse;
}

function findLargestPalindrome() {
	let largest = 0,
		max = 999;
	for (let i = max; i > 100; i--) {
		for (let j = max; j > 100; j--) {
			let product = i * j;
			if (isPalindrome(product)) {
				if (product > largest) {
					largest = product;
				}
			}
		}
	}
	return largest;
}

exports.reverseString = reverseString;
exports.isPalindrome = isPalindrome;
exports.findLargestPalindrome = findLargestPalindrome;
