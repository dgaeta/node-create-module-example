/*
	-Import your module 
*/
var mymodule = require('./mymodule.js')

/*
	-Get command line args 

	*Keep in mind: 
		process.argv[0] ~> 'node'
		process.argv[1] ~> 'program_name.js'
		process.argv[2] ~> 'first command line arg'
		process.argv[3] ~> 'second command line arg'
*/	
var dir = process.argv[2];
var filterStr = process.argv[3];


/* 
	Since you are exporting a single function in mymodule.js, 
	mymodule is a function you can call!
*/
mymodule(process.argv[2], process.argv[3], function(err, list) {
	
	if(err) {
		console.log(err);
	} else {
		for(var i=0; i<list.length; i+=1) {
			console.log(list[i]);
		}
	}
})
