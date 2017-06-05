/*
	Objects have their own attributes, called properties, and their own functions, called methods.
	When a function is called as a method of an object
*/

/*
	- Construct JavaScript Objects with Functions:
	We are also able to create objects using constructor functions. A constructor function is given a capitalized name to make it clear that it is a constructor.
	Here's an example of a constructor function:
		var Car = function() {
		  this.wheels = 4;
		  this.engines = 1;
		  this.seats = 5;
		};
	In a constructor, the "this" variable refers to the new object being created by the constructor. So when we write,
		this.wheels = 4;
	inside of the constructor we are giving the new object it creates a property called wheels with a value of 4. You can think of a constructor as a description for the object it will create.
	
	Note: More infor about this keyword: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this
*/
	var Car = function() {
	this.wheels = 4;
	this.engines = 1;
	this.seats = 5;
	};

/*
	- Make Instances of Objects with a Constructor Function:
	To use a constructor function we call it with the new keyword in front of it.
	Note: that it is important to use the new keyword when calling a constructor. This is how Javascript knows to create a new object and that all the references to this inside the constructor should be referring to this new object.
*/
	var myCar = new Car();					// myCar is now an instance of the Car 
	// once the myCar instance is created, we can access and modify its properties as any normal object
	var numberOfWheels = myCar.wheels;		// get property
	myCar.nickname = "Horse";				// add new property
	
/*
	- Make Unique Objects by Passing Parameters to our Constructor: The constructor we have is great, but what if we don't always want to create the same object?
	To solve this we can add parameters to our constructor
	
*/
	var Car = function(wheels, seats, engines) {
	this.wheels = wheels;
	this.seats = seats;
	this.engines = engines;
	};

	var myCar = new Car(6, 3, 1);	
	// This code will create an object that uses the arguments we passed in and looks like:
	// {
	//    wheels: 6,
	//    seats: 3,
	//    engines: 1
	// }
	

/*
	- Make Object Properties Private:
	In the previous challenges, we used the this keyword to reference public properties of the current object. We can also create private properties and private methods, which aren't accessible from outside the object.
	To do this, we create the variable inside the constructor using the var keyword we're familiar with, instead of creating it as a property of this.
*/
	var Car = function() {						// function
		var speed = 10;							// this is a private variable/property so it cannot access from function
		this.fuel = 100;						// this is a public variable/property so it can access from outside the function

		this.accelerate = function(change) {	// public method
			speed += change;
		};

		stop = function() {						// private method
			speed = 0;
		};
	}
	
	var myCar = new Car();
	console.log(myCar.fuel);				// 100
	console.log(myCar.speed);				// Error occured
	
/*
	- Iterate over Arrays with map: The map method is a convenient way to iterate through arrays
	The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it. Note that it does not modify the original array.
*/
	var oldArray = [1, 2, 3];
	var timesFour = oldArray.map(function(val){
	  return val * 4;
	});
	console.log(timesFour); // returns [4, 8, 12]
	console.log(oldArray);  // returns [1, 2, 3]
	
	var oldArray = [[1,2,3],4,5];
	var newArray = oldArray[0].map(function(val) { return val*4 });
	
/*
	- Condense arrays with reduce: The array method reduce is used to iterate through an array and condense it into one value.
	To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).
	The accumulator is like a total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through.
	reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.
*/
	var singleVal = array.reduce(function(previousVal, currentVal) {
		return previousVal - currentVal;
	}, 0);

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