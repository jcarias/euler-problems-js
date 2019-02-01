const { generateFibonacciSequence, sumEvenValues } = module.require(
	"./exercise.js"
);

test("generateFibonacciSequence is defined", () => {
	expect(generateFibonacciSequence).toBeDefined();
});

test("generateFibonacciSequence", () => {
	expect(generateFibonacciSequence(10)).toEqual([1, 2, 3, 5, 8]);
});

test("sumEvenValues is defined", () => {
	expect(sumEvenValues).toBeDefined();
});

test("sumEvenValues of undefined, null or empty is always 0", () => {
	expect(sumEvenValues()).toBe(0);
	expect(sumEvenValues(null)).toBe(0);
	expect(sumEvenValues([])).toBe(0);
});

test("sumEvenValues of [1,2,3,5,8] is 10", () => {
	expect(sumEvenValues([1, 2, 3, 5, 8])).toBe(10);
});

test("sumEvenValues of Fibonacci sequence below 4M is 4613732", () => {
	expect(sumEvenValues(generateFibonacciSequence(4000000))).toBe(4613732);
});
