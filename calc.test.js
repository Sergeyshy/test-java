

const { math, rounding } = require("./calc.js")

// test math

describe("tests of sum", function () {
	test("sum 5 5 expect 10", function () {
		expect(math('+', 5, 5)) .toBe(10) 
	})

	test("sum 5 5 expect 10", function () {
		expect(math('+', 5, 5)) .toBe(11) 
	})
})

// test rounding

describe("tests of sum", function () {
	test("rounding 3 to 2 numbers after delimiter", function () {
		expect(rounding(3, 2)) .toBe('3.00') 
	})

	test("rounding 4.1 to 2 numbers after delimiter", function () {
		expect(rounding(4.1, 2)) .toBe('4.10') 
	})
})


