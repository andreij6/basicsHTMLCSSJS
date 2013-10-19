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
	
	console.log(color);		
}

showColor(); //green


