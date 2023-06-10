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
	if(num%5==0 && num%3==0){
		return 'FizzBuzz';
	}
	if(num%3==0 && num%5!=0)
		return 'Fizz';
	if(num%5==0 && num%3!=0){
		return 'Buzz';
	}
	else
		return num;
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
	if (n <= 1){
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
	var max=Math.max(a,b,c);
	if(max<a+b+c-max){
		return true;
	}
	else{
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
	let reverse="";
	for(let i=str.length-1;i>=0;i--)
	{
		reverse+=str.charAt(i);
	}
	return reverse;
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
let mapping = {
	']': '[',
	'}': '{',
	')': '(',
	'>': '<'
}
let closedBracket = ["]", "}", ")", ">"];
let openBracket = ["[", "{", "(", "<"];

function isBracketsBalanced(str) {
	let n = str.length;
	if (str == "") {
		return true;
	}
	let stack = [];
	for (let i = 0; i < n; i++) {
		if (openBracket.includes(str[i])) {
			stack.push(str[i]);
		}
		if (closedBracket.includes(str[i])) {
			if (stack[stack.length - 1] == mapping[str[i]]) {
				stack = stack.slice(0, stack.length - 1);
				continue;
			}
			else {
				return false;
			}
		}
	}
	if (stack.length == 0) {
		return true;
	}
	return false;
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
function app(dif){
	if ((dif - (dif >> 0)) <= 0.5){ 
	return (dif >> 0);
    }
	else{
	return (dif >> 0) + 1;
    }
}
function timespanToHumanString(startDate, endDate) {
	const dif_mili = endDate.getTime() - startDate.getTime() ;
	const sec = dif_mili / 1000;
	const min = sec / 60;
	const hour = min / 60;
	const day = hour / 24;
	const month = day / 30;
	const year = day / 365 ; 
	let s = "";
	if (sec <= 45){
	s = "a few seconds ago";
    }
	else if (sec <= 90){
	s = "a minute ago";
    }
	else if (min <= 45){
	s = `${ app(min  )} minutes ago`;
    }
	else if (min <= 90){
	s = "an hour ago";
    }
	else if (hour <= 22){
	s = `${app(hour)} hours ago`;
    }
	else if (hour <= 36){
	 s = "a day ago";
	}
	else if (day <= 25){ 
	s = `${app(day)} days ago`;
    }
	else if (day <= 45){ 
	s = "a month ago";
    }
	else if (day <= 345){
	s = `${app(month)} months ago`;
    }
	else if (day <= 545){
	s = "a year ago";
    }
	else{
	s = `${app(year)} years ago`;
    }
	return s;
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
function DToB(n,B){
	if(n==0)
	return "";
	else{
	return DToB(Math.floor(n/B),B)+""+fath(n%B);
	}
}
function fath(num){
	if(num<10)
	return num;
	else
	return String.fromCharCode(55+num);
}
function toNaryString(num, n){
	return ""+DToB(num,n)
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
