const { isPrimeNumber, findPrimeFactors, getMaxPrimeFactor } = module.require(
	"./problem3.js"
);

test("Fn isPrimeNumber defined", () => {
	expect(isPrimeNumber).toBeDefined();
});

test("Test prime values: 0,1,2,3,4,5", () => {
	expect(isPrimeNumber(0)).toBeFalsy();
	expect(isPrimeNumber(1)).toBeFalsy();
	expect(isPrimeNumber(2)).toBeTruthy();
	expect(isPrimeNumber(3)).toBeTruthy();
	expect(isPrimeNumber(4)).toBeFalsy();
	expect(isPrimeNumber(5)).toBeTruthy();
	expect(isPrimeNumber(18)).toBeTruthy();
});

test("Test prime with invalid arguments", () => {
	expect(isPrimeNumber()).toBeFalsy();
	expect(isPrimeNumber(null)).toBeFalsy();
	expect(isPrimeNumber("")).toBeFalsy();
	expect(isPrimeNumber({ a: 1 })).toBeFalsy();
	expect(isPrimeNumber(false)).toBeFalsy();
	expect(isPrimeNumber([1, 3])).toBeFalsy();
});

test("Fn findPrimeFactors defined", () => {
	expect(findPrimeFactors).toBeDefined();
});

test("Fn findPrimeFactors: The prime factors of 147 are 3, 7 and 7. ", () => {
	expect(findPrimeFactors(147)).toEqual([3, 7, 7]);
});
