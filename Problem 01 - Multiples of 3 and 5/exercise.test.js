const { sumMultiplesOf3And5 } = module.require("./exercise.js");

test("sumMultiplesOf3And5 is defined", () => {
	expect(sumMultiplesOf3And5).toBeDefined();
});

test("Sum multiples of 3 and 5 in numbers 0 through 10", () => {
	expect(sumMultiplesOf3And5()).toBe(0);
	expect(sumMultiplesOf3And5(null)).toBe(0);
	expect(sumMultiplesOf3And5(-10)).toBe(0);
	expect(sumMultiplesOf3And5(10)).toBe(23);
});
