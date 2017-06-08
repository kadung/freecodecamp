/*
	Reverse a String
*/
	function reverseString(str) {
		return str.split('').reverse().join('');
	}
	reverseString("hello");

	
/*
	Factorialize a Number: 
*/
	function factorialize(num) {
		var result = 1;
		for (var i=1; i<=num ; i++){
			result *= i;
		}
		return result;
	}
	factorialize(5);

/*
	Check for Palindromes
*/
Solution 1:
	function palindrome(str) {
		var lowerAndRemove = str.toLowerCase().replace(/[^a-z0-9]/g,'');	// only select a to z or 0 to 9 character, others are removed
		var splitStr = lowerAndRemove.split('');							// change to array 
		var loop = Math.floor(lowerAndRemove.length/2);
		for (var i=0 ; i<loop ; i++) {
			if (splitStr[i] != splitStr[lowerAndRemove.length-(i+1)]) {
			return false;
			}
		}
		return true;
	}
	palindrome(" eye for of 1 eye.");
	
Solution 2:
	function palindrome(str) {
		var originStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');			// only select a to z or 0 to 9 character, others are removed
		var reverseStr = originStr.split('').reverse().join('');			// reverse the text
		if (originStr == reverseStr) {
			return true;
		}
		return false;
	}

/*
	Find the Longest Word in a String
*/
	function findLongestWord(str) {
		var splitStr = str.split(" ");
		var max = splitStr[0].length;
		for (var i=1 ; i<splitStr.length ; i++) {
			if (splitStr[i].length > max ){
				max = splitStr[i].length; 
			}
		}
		return max;
	}
	findLongestWord("The quick brown fox jumped over the lazy dog");

/*
	Title Case a Sentence
*/


/*
	
*/


/*
	
*/


/*
	
*/


/*
	
*/


/*
	
*/
