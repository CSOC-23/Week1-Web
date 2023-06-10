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
	if (num % 5 === 0 && num % 3 === 0) 
	{
	  return 'FizzBuzz';
	} 
	else if (num % 3 === 0) {
	  return 'Fizz';
	} 
	else if (num % 5 === 0) {
	  return 'Buzz';
	} 
	else {
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
	if (n === 0 || n === 1) {
	  return 1;
	}
  
	let ans = 1;
	for (let i = 2; i <= n; i++) {
	  ans *= i;
	}
  
	return ans;
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
	let sum = 0;
	for (let i = n1; i <= n2; i++) {
	  sum += i;
	}
	return sum;
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
	if(a + b > c && a + c > b && b + c > a)
	{
         return true;
	}
	else false;
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
	let s=0;
	let e=str.length-1;
	while(s<e)
	{
		swap(str[s++],str[e--]);
	}
	return str;
	
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
	const stack = [];
  
	for (let i = 0; i < str.length; i++) {
	  const bracket = str[i];
	  if (isOpeningBracket(bracket)) {
		stack.push(bracket);
	  } else if (isClosingBracket(bracket)) {
		if (stack.length === 0) {
		  return false;
		}
  
		const openingBracket = stack.pop();
		if (!isMatchingBracket(openingBracket, bracket)) {
		  return false;
		}
	  }
	}
  
	return stack.length === 0;
  }
  
  function isOpeningBracket(bracket) {
	return bracket === '[' || bracket === '(' || bracket === '{' || bracket === '<';
  }
  
  function isClosingBracket(bracket) {
	return bracket === ']' || bracket === ')' || bracket === '}' || bracket === '>';
  }
  
  function isMatchingBracket(openingBracket, closingBracket) {
	return (
	  (openingBracket === '[' && closingBracket === ']') ||
	  (openingBracket === '(' && closingBracket === ')') ||
	  (openingBracket === '{' && closingBracket === '}') ||
	  (openingBracket === '<' && closingBracket === '>')
	);
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
	const timeDifference = endDate.getTime() - startDate.getTime();
	const seconds = Math.floor(timeDifference / 1000);
  
	if (seconds >= 0 && seconds <= 45) {
	  return 'a few seconds ago';
	} else if (seconds > 45 && seconds <= 90) {
	  return 'a minute ago';
	} else if (seconds > 90 && seconds <= 45 * 60) {
	  const minutes = Math.round(seconds / 60);
	  return `${minutes} minutes ago`;
	} else if (seconds > 45 * 60 && seconds <= 90 * 60) {
	  return 'an hour ago';
	} else if (seconds > 90 * 60 && seconds <= 22 * 60 * 60) {
	  const hours = Math.round(seconds / (60 * 60));
	  return `${hours} hours ago`;
	} else if (seconds > 22 * 60 * 60 && seconds <= 36 * 60 * 60) {
	  return 'a day ago';
	} else if (seconds > 36 * 60 * 60 && seconds <= 25 * 24 * 60 * 60) {
	  const days = Math.round(seconds / (24 * 60 * 60));
	  return `${days} days ago`;
	} else if (seconds > 25 * 24 * 60 * 60 && seconds <= 45 * 24 * 60 * 60) {
	  return 'a month ago';
	} else if (seconds > 45 * 24 * 60 * 60 && seconds <= 345 * 24 * 60 * 60) {
	  const months = Math.floor(seconds / (30 * 24 * 60 * 60));
	  return `${months} months ago`;
	} else if (seconds > 345 * 24 * 60 * 60 && seconds <= 545 * 24 * 60 * 60) {
	  return 'a year ago';
	} else if (seconds > 545 * 24 * 60 * 60) {
	  const years = Math.floor(seconds / (365 * 24 * 60 * 60));
	  return `${years} years ago`;
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
	let result = '';
  
	while (num > 0) {
	  const remainder = num % n;
	  result = remainder + result;
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
