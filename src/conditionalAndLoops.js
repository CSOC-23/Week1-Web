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
	// throw new Error("Not implemented");
	if(num%3==0&&num%5==0){
		return 'FizzBuzz';
	}
	else if(num%5==0){
		return 'Buzz';
	}
	else if(num%3==0){
		return 'Fizz';
	}
	else{
		return num;
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
	// throw new Error("Not implemented");
	if (n < 2) {
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
	// throw new Error("Not implemented");
	let c=0;
	for(let i=n1;i<=n2;i++){
c+=i;
	}
	return c;
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
	// throw new Error("Not implemented");
	if ((a + b > c) && (b + c > a) && (c + a > b)) {
		return true;
	} else {
		return false;
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
	throw new Error("Not implemented");
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced meresult that is, whether it consists entirely of pairs of opening/closing brackets
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
	// throw new Error("Not implemented");
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

	return stack.length===0;
}

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 sec           |  a few sec ago
 *   45 to 90 sec           |  a minute ago
 *   90 sec to 45 min   |  2 min ago ... 45 min ago
 *   45 to 90 min           |  an hour ago
 *  90 min to 22 hrs      |  2 hrs ago ... 22 hrs ago
 *  22 to 36 hrs              |  a day ago
 *  36 hrs to 25 days         |  2 days ago ... 25 days ago
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
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few sec ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 min ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumresulttring(startDate, endDate) {
	// throw new Error("Not implemented");
	const start = new Date(startDate);
	const end = new Date(endDate);
	const ms = end.getTime() - start.getTime();
	const sec = Math.floor(ms / 1000)
	const min = Math.floor(ms / 60000)
	const hrs = Math.floor(ms / 3600000)


	if (ms >= 0 && ms <= 45000) {
		return 'a few sec ago';
	}

	else if (ms > 45000 && ms <= 90000) {
		return 'a minute ago';
	}

	else if (ms > 90000 && ms <= 120000) {
		return '2 min ago';
	} else if (sec > 120 && sec <= 2700) {
		const result = Math.floor(sec / 60000);
		return `${result} min ago`;
	}

	else if (sec > 2700 && sec <= 5400) {
		return 'an hour ago';
	}
	else if (min > 90 && min <= 120) {
		return '2 hrs ago';
	} else if (min > 120 && min <= 1320) {
		const result = Math.floor(min / 60);
		return `${result} hrs ago`;
	}

	else if (min > 1320 && min <= 2160) {
		return 'a day ago';
	}

	else if (hrs > 36 && hrs <= 48) {
		return '2 days ago';
	} else if (hrs > 48 && hrs <= 600) {
		const result = Math.floor(hrs / 24);
		return `${result} days ago`;
	}

	else if (hrs > 600 && hrs <= 1080) {
		return 'a month ago';
	}

	else if (hrs > 1080 && hrs <= 1440) {
		return '2 months ago';
	} else if (hrs > 1440 && hrs <= 8280) {
		const result = Math.floor(hrs / 720);
		return `${result} months ago`;
	}

	else if (hrs > 8280 && hrs <= 13080) {
		return 'a year ago';
	}

	else if (hrs > 13080 && hrs <= 17424) {
		return '2 years ago';
	} else {
		const result = Math.floor(hrs / 8640);
		return `${result} years ago`;
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
	// throw new Error("Not implemented");
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
	timespanToHumresulttring,
	toNaryString,
};
