
function hackingTheSystem(){
		var data = [];
		var number = Math.floor((Math.random() * 2) + 1);
		var number2 = Math.floor((Math.random() * 2) + 1);
		// Temp fix come back to fix lil dick nigga
		var first = ['','Cool','0','Ultimate'];
		var second = ['','hacker','leecher','Breaker'];
		var name = first[number] + second[number2];
		// Big ass prbolem
		data.push(name);
		do{
			document.getElementById('name').innerHTML= name
		}
		while(name == data[0]){
			document.getElementById('name').innerHTML= name
			data = [];

	}


	console.log(data)
}
