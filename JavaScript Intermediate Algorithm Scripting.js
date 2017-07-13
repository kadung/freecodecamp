/*
	Sum All Numbers in a Range
*/
	function sumAll(arr) {
		var maxNum = Math.max.apply(null, arr);
		var minNum = Math.min.apply(null, arr);
		var sum = 0;
		for (var i = minNum; i<= maxNum ; i++) {
			sum += i;
		}
		return sum;
	}

sumAll([1, 4]);

	
/*
	Diff Two Arrays 
*/
	function diffArray(arr1, arr2) {
		var newArr = [];
		// Same, same; but different.
		var mergeArr = arr1.concat(arr2);
		var seen = {};
		var len = mergeArr.length;
		for(var i = 0; i < len; i++) {
			var item = mergeArr[i];
			if(seen[item] != 1) {
				if (seen[item] > 1 ) {
					//do nothing
				}
				else {
					seen[item] = 1;
					newArr.push(item);  
				}
			}
			else if (seen[item] == 1) {
			  var idx = newArr.indexOf(item);
			  newArr.splice(idx,1);
			  seen[item] = 2;
			}
		}
		return newArr;
	}
diffArray([1, 2, 3, 5, 1, 2], [1, 2, 3, 4, 5,1,2]);

	
/*
	Roman Numeral Converter
*/
	function convertToRoman(num) {
		var roman = {0:"", 1:"I",2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX" };
		var romanTen = {0:"", 1:"X",2:"XX", 3:"XXX", 4:"XL", 5:"L", 6:"LX", 7:"LXX", 8:"LXXX", 9:"XC" };
		var romanHundred = {0:"", 1:"C",2:"CC", 3:"CCC", 4:"CD", 5:"D", 6:"DC", 7:"DCC", 8:"DCCC", 9:"CM" };
  
		var chars = num.toString().split("");
		switch (chars.length) {
			case 1:
				return roman[chars[0]];
			case 2:
				return romanTen[chars[0]] + roman[chars[1]];
			case 3:
				return romanHundred[chars[0]] + romanTen[chars[1]] + roman[chars[2]];
			case 4:
				return "M".repeat(chars[0]) + romanHundred[chars[1]] + romanTen[chars[2]] + roman[chars[3]];
        }
	}
convertToRoman(1000);


/*
	Wherefore art thou
*/
	function whatIsInAName(collection, source) {
		// What's in a name?
		var arr = [];
		// Only change code below this line
		var searchKey = Object.keys(source);
  
		return collection.filter(function (data){
			for (var i=0; i<searchKey.length; i++){
				if(!data.hasOwnProperty(searchKey[i])){
					return false;
				}
				else {
					if(data[searchKey[i]] !== source[searchKey[i]]){
						return false;
					}
				}
			}
		return true;
		});
	}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });	


/*
	Search and Replace
*/
	function myReplace(str, before, after) {
		var chars = str.split(' ');
		for (var i=0; i< chars.length; i++){
			if (chars[i] == before){
				if(before[0].toUpperCase() == before[0]){
					var split = after.split('');
					split[0] = split[0].toUpperCase();
					chars[i] = split.join('');
				}
				else{
					chars[i] = after;
				}
			}
		}
	return chars.join(' ');
	}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

	
/*
	Pig Latin
*/
	function translatePigLatin(str) {
		if (/[ueoai]/.test(str[0])){
			return str + "way";
		}
		else {
			for (var i=0; i< str.length; i++){
				if (/[ueoai]/.test(str[i])){
					var firstChar = str.substr(0,i);
					var splitStr = str.substr(i);
					break;
				}
			}
			return splitStr + firstChar + "ay";
		}
	}

translatePigLatin("Consonant");


/*
	DNA Pairing
*/
	function pairElement(str) {
		var newArr = [];
		var splitStr = str.split('');
		for (var i=0; i< splitStr.length; i++){
			switch (splitStr[i]){
				case "A":
					newArr.push(["A", "T"]);
					break;
				case "T":
					newArr.push(["T", "A"]);
					break;
				case "G":
					newArr.push(["G", "C"]);
					break;
				case "C":
					newArr.push(["C", "G"]);
					break;
			}
		}
		return newArr;
	}

pairElement("GCG");

	
/*
	Missing letters
*/
	


/*
	Boo who
*/
	


/*
	Sorted Union
*/
	


/*
	Convert HTML Entities
*/



/*
	Spinal Tap Case
*/
	

	
/*
	Sum All Odd Fibonacci Numbers
*/
	


/*
	Sum All Primes
*/
	


/*
	Smallest Common Multiple
*/
	


/*
	Finders Keepers
*/


