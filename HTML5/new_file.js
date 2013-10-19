/**
 * @author ajones
 * Team Tree House Arguments
 * 
 */

function sayHello(name, greeting){
	if (typeof greeting === 'undefined'){
		greeting = 'Hello';
	}
	console.log(greeting + " World " + name);
	
	return;		//undefined
	//return name.length;
}

sayHello("Jim","Greetings");  //returns 3

// Teamtreehouse Return Values

//	Scope

var color = 'black';

function showColor(){
	var color = 'green';
	shape = 'square'	//global scope
	
	console.log(color);		
}

showColor(); //green


// if you dont use the var keyword it creates a global variable
/*
 * Annonymous Functions
 */

var myFunction = function(){
	
	console.log('myFunction was called');
	
}

var callTwice = function(targetFunction) {
	targetFunction();
	targetFunction();
}

callTwice(myFunction);	//no ();

/*
 * Basic Objects
 */
var jim = {
	name :"Jim",
	skills :"ruby",
	"favorite color": "green"
};

console.log(jim.name)					//jim
console.log(jim["favoriteColor"])		//green
