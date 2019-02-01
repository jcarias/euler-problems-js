const { reverseString, isPalindrome, findLargestPalindrome } = module.require(
	"./problem.04.js"
);

/**
 * reverseString Tests
 */
test("Fn reverseString defined", () => {
	expect(reverseString).toBeDefined();
});

test("Fn reverseString of null or empty string is empty", () => {
	expect(reverseString()).toBe("");
	expect(reverseString(null)).toBe("");
	expect(reverseString("")).toBe("");
	expect(reverseString(123)).toBe("");
});

test("Fn reverseString of null or empty string is empty", () => {
	expect(reverseString("ana")).toBe("ana");
	expect(reverseString("macaco")).toBe("ocacam");
	expect(reverseString("z")).toBe("z");
});

/**
 * isPalindrome Tests
 */
test("Fn isPalindrome defined", () => {
	expect(isPalindrome).toBeDefined();
});

test("Fn isPalindrome of null or undefined string is false", () => {
	expect(isPalindrome()).toBe(false);
	expect(isPalindrome(null)).toBe(false);
	expect(isPalindrome(undefined)).toBe(false);
});

test("Fn isPalindrome of 12121 to be true", () => {
	expect(isPalindrome(12121)).toBe(true);
});

test("Fn isPalindrome of 0 to be true", () => {
	expect(isPalindrome(0)).toBe(true);
});
906609;

/**
 * findLargestPalindrome Tests
 */
test("Fn findLargestPalindrome defined", () => {
	expect(findLargestPalindrome).toBeDefined();
});

test("The findLargestPalindrome is 906609", () => {
	expect(findLargestPalindrome()).toBe(906609);
});
