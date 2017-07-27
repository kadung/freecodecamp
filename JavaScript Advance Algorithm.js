/*
	Validate US Telephone Numbers
	Regex explain: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
				   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
	(x)		Group matching
	^ 		Start check at begining of the string, ^n Matches any string with n at the beginning of it
	x?		Matches any string that contains zero or one occurrences of n
	
	(1\s?)? checks allows for a "1" or a "1 " or none of them at the beginning.
	\d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that are allowed to be between parenthesis.
	[\s\-]? checks for spaces or dashes between the groups of digits.
	$ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").
*/
function telephoneCheck(str) {
  var spaceRegex = /\s/g;    
  var phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/g;
  
  // Test and return str match with regex
  //return str.match(phoneRegex);
  
  // Verify and output true or false -
  return phoneRegex.test(str);
  }

telephoneCheck("(555)555-5555");



	
/*
	Record Collection
*/

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // value isn't empty ("") then update
  if (value !== ""){
    // prop is track
    if (prop === "tracks"){
      // but the album doesn't have a "tracks" property, add new array
      if (!collection[id].hasOwnProperty(prop)){
        collection[id][prop] = [];
      }
      // then push newtrack to array
      collection[id][prop].push(value);
    }
    // prop isn't "tracks", update or set the value for album's property
    else {
      collection[id][prop] = value;
    }
  }
  // value is empty (""), delete the given prop
  else {
    delete collection[id][prop];
  }
  return collection;
}

// Alter values below to test your code
//updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");



/*
	Symmetric Difference
*/
function sym(args) {
  // Change all arguments to contain in an array
  var argvToArray = Array.from(arguments);
  
  return argvToArray.reduce( function (accumulator, currentValue){
    // Make seach array is unique
	// Array.from(new Set(currentValue))
    
    // Merge next array to 1 array
    var tempArr = accumulator.concat(Array.from(new Set(currentValue)));
    
    // Count the appearance of each number
    var seen = {};
    var out = [];
    for (var i in tempArr){
      var item = tempArr[i];
      if (seen[item] !== 1){
        seen[item] = 1;
      }
      else {
        out.push(item);
      }
    }
    
    // Delete all item which is duplicated
    for (var j in out){
      while (tempArr.indexOf(out[j]) !== -1){
        tempArr.splice(tempArr.indexOf(out[j]),1);
      }
    }
    
    return tempArr;
  },[] );
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);


	
/*
	Exact Change
*/
// Create an object which hold the denominations and their values
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  // Here is your change, ma'am.
  return change_arr;
}



/*
	Inventory Update
*/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for (var i in arr2){
      var noExist = true;
      for (var j in arr1){
        if (arr2[i][1] === arr1[j][1]){
          arr1[j][0] += arr2[i][0];
          noExist = false;
        } 
      }
      if (noExist){
        arr1.push(arr2[i]);
      }
    }
    
    //Sort the result
    return arr1.sort(function(a, b){
      var nameA = a[1];
      var nameB = b[1];
      if (nameA < nameB){
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
      });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


	
/*
	No repeats please
*/



/*
	Make a Person
*/


	
/*
	Map the Debris
*/



/*
	Pairwise
*/


