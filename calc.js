exports.math = function math(operator, value1, value2) {
    if (operator === '+') {
      return value1 + value2
    }
  	if (operator === '-') {
      return value1 - value2 
    }
  	if (operator === '*') {
      return value1 * value2
    }
  	if (operator === '/') {
      return value1/value2 
    }
}

exports.rounding = function rounding(value, numbers) {
	return value.toFixed(numbers)
}
