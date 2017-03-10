
function addingUp(x,y){
 var z=(x+y);
 return z;
}

function addingString(word1,word2){
	var f= (word1+" "+word2);
	return f;
}

var flyers=["Giroux","Voracek","Simmonds","Schenn","Couterier"];
var sixers=["Simmons","Embiid","Saric","Okafor"];
var phillyAthletes=[flyers,sixers];
console.log(phillyAthletes[0][1]);
console.log(phillyAthletes[1][3]);

function ifExample(y){
	if(y>100){   
		alert(y+" is greater than 100"); 
	} else{
		alert("Your value is less than 100");
}
}

function myRepeat(pickname){
	console.log("you have entered: "+pickname);
}

function ifElseExample(door){
	if(door==1){   
		alert("Door #1 contains a new car"); 
	}else if(door==2){   
		alert("Door #2 is a trip to Europe"); 
	} else{
		alert("Door #3 is a night out in the city");
}
}