/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
	let ans=value1+value2;
	return ans;
}

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
	return value.length;
}

/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
	return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
	while(value[0]=='\t' || value[0]==' '){
		value=value.replace(value[0],'');
	}
	while(value[value.length-1]=='\t' || value[value.length-1]==' '){
		value=value.replace(value[value.length-1],'');
	}
	return value;
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
	let temp=value;
    for(let i=0;i<count-1;i++){
		temp=temp+value;
	}
	return temp;
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
	str=str.replace(value,'');
	return str;
}

/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
	str=str.toUpperCase();
	return str;
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' =>
 *          'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
	let cypher='';
	let newChar,strCode;
	let newCharCode;

	for(let i=0;i<str.length;i++){
		strCode=str.charCodeAt(i);
		if(!(strCode>96 && strCode<123) && !(strCode>64 && strCode<91)){
			cypher+=str.charAt(i);
		}else{
			newCharCode=strCode+13;
			if(strCode>64 && strCode<91){
				if(newCharCode>90){
					newCharCode-=90;
					newCharCode+=64;
					newChar=String.fromCharCode(newCharCode);
					cypher+=newChar;
				}else{
                    newChar=String.fromCharCode(newCharCode);
					cypher+=newChar;
				}
			}
            if(strCode>96 && strCode<123){
				if(newCharCode>122){
					newCharCode-=122;
					newCharCode+=96;
					newChar=String.fromCharCode(newCharCode);
					cypher+=newChar;
				}else{
					newChar=String.fromCharCode(newCharCode);
				    cypher+=newChar;
				}
				
			}
		}
		
		}
	
	return cypher;
}

module.exports = {
	concatenateStrings,
	getStringLength,
	getFirstChar,
	removeLeadingAndTrailingWhitespaces,
	repeatString,
	removeFirstOccurrences,
	convertToUpperCase,
	encodeToRot13,
};
