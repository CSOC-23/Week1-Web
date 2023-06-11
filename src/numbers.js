/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
	return width*height;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {numder} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
	sum=value1+value2;
	if(sum=== Infinity)
	return Number.MAX_VALUE;
	else
	return sum/2;
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
	// I checked on javascript compiler whats the error and I got -0 when b was 0 so I did this
	if(b!==0)
	return -(b/a);
	else
	return 0;
}

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
	var a = Math.abs(value) % 10;
  return a;
}

/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
	var n = parseFloat(value);
	return n;
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
	if (n<=1) {
		return false;
	  }
	
	  for (var i=2;i<=Math.sqrt(n);i++) {
		if(n%i===0){
		  return false;
		}
	  }
	
	  return true;
}

module.exports = {
	getRectangleArea,
	getAverage,
	getLinearEquationRoot,
	getLastDigit,
	parseNumberFromString,
	isPrime,
};
