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
	Make Object Properties Private
*/


/*

*/


/*

*/