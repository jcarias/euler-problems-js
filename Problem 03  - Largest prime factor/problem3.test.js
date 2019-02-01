const { getLargestPrimeFactor } = module.require("./problem3.js");

test("Fn getLargestPrimeFactor defined", () => {
	expect(getLargestPrimeFactor).toBeDefined();
});

test("Fn getLargestPrimeFactor: The prime factors of 147, 13195 and 600851475143", () => {
	expect(getLargestPrimeFactor(147)).toBe(7);
	expect(getLargestPrimeFactor(13195)).toBe(29);
	expect(getLargestPrimeFactor(600851475143)).toBe(6857);
	expect(getLargestPrimeFactor(6857)).toBe(6857);
});
