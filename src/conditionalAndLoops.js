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
		return "FizzBuzz";
	  } else if (num % 3 == 0) {
		return "Fizz";
	  } else if (num % 5 == 0) {
		return "Buzz";
	  } else {
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
	
	let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;

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
	
	if (n1 > n2) {
		// Swap n1 and n2
		const temp = n1;
		n1 = n2;
		n2 = temp;
	  }
	
	  // Initialize the sum variable
	  let sum = 0;
	
	  // Loop through the numbers from n1 to n2, inclusive
	  for (let i = n1; i <= n2; i++) {
		// Add the current number to the sum
		sum += i;
	  }
	
	  // Return the sum
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
	
	if (a < 0 || b < 0 || c < 0) {
		return false;
	  }
	
	  // Check if any of the sides are equal to the sum of the other two sides.
	  if (a + b <= c || a + c <= b || b + c <= a) {
		return false;
	  }
	
	  // Otherwise, the sides can form a triangle.
	  return true;
  
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
	
	var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;

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
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char in "([{<") {
        stack.push(char);
      } else {
        var openingBracket = stack.pop();
        if (openingBracket === undefined || openingBracket != char.match(/^\[[({]$/)[0]) {
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
	
	const difference = endDate.getTime() - startDate.getTime();
  
    // Convert the difference to seconds.
    const seconds = Math.round(difference / 1000);
  
    // If the difference is less than 45 seconds, return "a few seconds ago".
    if (seconds < 45) {
      return "a few seconds ago";
    }
  
    // If the difference is between 45 and 90 seconds, return "a minute ago".
    if (seconds >= 45 && seconds < 90) {
      return "a minute ago";
    }
  
    // If the difference is between 90 seconds and 45 minutes, return the number of minutes ago.
    if (seconds >= 90 && seconds < 21600) {
      const minutes = Math.floor(seconds / 60);
      return minutes + " minutes ago";
    }
  
    // If the difference is between 45 minutes and 90 minutes, return "an hour ago".
    if (seconds >= 21600 && seconds < 54000) {
      return "an hour ago";
    }
	if (seconds >= 54000 && seconds < 792000) {
		const hours = Math.floor(seconds / 3600);
		return hours + " hours ago";
	  }
	
	  // If the difference is between 22 hours and 36 hours, return "a day ago".
	  if (seconds >= 792000 && seconds < 864000) {
		return "a day ago";
	  }
	
	  // If the difference is between 36 hours and 25 days, return the number of days ago.
	  if (seconds >= 864000 && seconds < 9120000) {
		const days = Math.floor(seconds / 86400);
		return days + " days ago";
	  }
	
	  // If the difference is between 25 days and 45 days, return "a month ago".
	  if (seconds >= 9120000 && seconds < 12960000) {
		return "a month ago";
	  }
	
	  // If the difference is between 45 days and 345 days, return the number of months ago.
	  if (seconds >= 12960000 && seconds < 151200000) {
		const months = Math.floor(seconds / 2592000);
		return months + " months ago";
	  }
	
	  // If the difference is between 345 days and 545 days, return "a year ago".
	  if (seconds >= 151200000 && seconds < 211680000) {
		return "a year ago";
	  }
	  return Math.floor(seconds / 31536000) + " years ago";
  
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
	
	if (n <= 1) {
		throw new Error("n must be greater than 1");
	  }
	
	  // Initialize result string
	  let result = "";
	
	  // Convert num to n-ary representation
	  while (num > 0) {
		result = (num % n) + result;
		num = Math.floor(num / n);
	  }
	
	  // Return result string
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
