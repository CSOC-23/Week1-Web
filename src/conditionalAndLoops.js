/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
	if (num % 3 == 0 && num % 5 == 0) {
		return 'FizzBuzz'
	} else if (num % 3 == 0) {
		return 'Fizz'
	} else if (num % 5 == 0) {
		return 'Buzz'
	} else {
		return num
	}
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
	if (n <= 1) {
		return 1
	} else {
		return (n * getFactorial(n - 1))
	}
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
	var sum = 0
	for (let i = n1; i <= n2; i++) {
		sum += i
	}
	return sum
}

/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
	if ((a + b > c) && (b + c > a) && (c + a > b)) {
		return true
	} else {
		return false
	}
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
	new_str = ""
	for (let i = str.length - 1; i >= 0; i--) {
		new_str += str[i]
	}
	return new_str
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
	var stack = [];
	var openingBrackets = ['[', '{', '(', '<'];
	var closingBrackets = [']', '}', ')', '>'];

	for (var i = 0; i < str.length; i++) {
		var currentChar = str[i];

		if (openingBrackets.includes(currentChar)) {
			stack.push(currentChar);
		} else if (closingBrackets.includes(currentChar)) {
			var expectedBracket = openingBrackets[closingBrackets.indexOf(currentChar)];

			if (stack.length === 0 || stack.pop() !== expectedBracket) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
	const start = new Date(startDate);
	const end = new Date(endDate);
	const milliseconds = end.getTime() - start.getTime();
	const seconds = Math.floor(milliseconds / 1000)
	const minutes = Math.floor(milliseconds / 60000)
	const hours = Math.floor(milliseconds / 3600000)


	if (milliseconds >= 0 && milliseconds <= 45000) {
		return 'a few seconds ago';
	}

	else if (milliseconds > 45000 && milliseconds <= 90000) {
		return 'a minute ago';
	}

	else if (milliseconds > 90000 && milliseconds <= 120000) {
		return '2 minutes ago';
	} else if (seconds > 120 && seconds <= 2700) {
		const ans = Math.floor(seconds / 60000);
		return `${ans} minutes ago`;
	}

	else if (seconds > 2700 && seconds <= 5400) {
		return 'an hour ago';
	}
	else if (minutes > 90 && minutes <= 120) {
		return '2 hours ago';
	} else if (minutes > 120 && minutes <= 1320) {
		const ans = Math.floor(minutes / 60);
		return `${ans} hours ago`;
	}

	else if (minutes > 1320 && minutes <= 2160) {
		return 'a day ago';
	}

	else if (hours > 36 && hours <= 48) {
		return '2 days ago';
	} else if (hours > 48 && hours <= 600) {
		const ans = Math.floor(hours / 24);
		return `${ans} days ago`;
	}

	else if (hours > 600 && hours <= 1080) {
		return 'a month ago';
	}

	else if (hours > 1080 && hours <= 1440) {
		return '2 months ago';
	} else if (hours > 1440 && hours <= 8280) {
		const ans = Math.floor(hours / 720);
		return `${ans} months ago`;
	}

	else if (hours > 8280 && hours <= 13080) {
		return 'a year ago';
	}

	else if (hours > 13080 && hours <= 17424) {
		return '2 years ago';
	} else {
		const ans = Math.floor(hours / 8640);
		return `${ans} years ago`;
	}
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
	if (n <= 1 || n > 10) {
		throw new Error("Invalid base. Base should be between 2 and 10.");
	}

	let result = "";
	while (num > 0) {
		result = (num % n) + result;
		num = Math.floor(num / n);
	}
	return result;
}

module.exports = {
	getFizzBuzz,
	getFactorial,
	getSumBetweenNumbers,
	isTriangle,
	reverseString,
	isBracketsBalanced,
	timespanToHumanString,
	toNaryString,
};
