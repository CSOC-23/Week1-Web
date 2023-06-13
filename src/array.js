/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
	let a = arr.length;
	let b =0;
	let i
	for(i = 0;i<a;i++)
	{
		if(arr[i] === value)
		{
			b++;
			break;
		}
	}
	if( b == 1)
	return i;
	else
		return -1;

}

/**
 * Returns the doubled array - elements of the specified array are repeated twice
 * using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
	let a = [];
	let b = arr.length;
	for(let i = 0;i<b;i++)
	{
		a[i] = arr[i];
	}
	for(let i = b;i<2*b;i++)
	{
		a[i] = arr[i-b];
	}
	return a;
}

/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
	let a = [];
	let b = arr.length;
	let c =0;
	for(let i = 0;i<b;i++)
	{
		if(arr[i]>0)
		{
		a[c]= arr[i];
		c++;
		}
}
return a;
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
	let a = [];
	let b = arr.length;
	let c =0;
	for(let i = 0;i<b;i++)
	{
		if(arr[i])
		{a[c] = arr[i];
			c++;}
	}
	return a;
}

/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
	let a = [];
	let b = arr.length;
	for(let i = 0;i<b;i++)
	{
		a[i] = arr[i].length;
	}
	return a;
}

/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
	let b = arr.length;
	let sum =0;
	for(let i = 0;i<b;i++)
	{
sum = sum + arr[i];
	}
	return sum;
}

module.exports = {
	findElement,
	doubleArray,
	getArrayOfPositives,
	removeFalsyValues,
	getStringsLength,
	getItemsSum,
};
