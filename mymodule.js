/*These four things are the contract that your module must follow.

  * Export a single function that takes exactly the arguments described.
  * Call the callback exactly once with an error or some data as described.
  * Don't change anything else, like global variables or stdout.
  * Handle all the errors that may occur and pass them to the callback.

  -callback should be called using the idiomatic node(err, data)
*/

function filterFn(dirname, fileExt, callback) {
	var fs = require('fs');
	var path = require('path');

	// add a '.' to the ext to match the format of path.extname()
	var ext = '.' + fileExt;
	var returnList = [];

	fs.readdir(dirname, function(err, list) {
		
		if(err) 
			return callback(err, null);
		
		for(var i=0; i<list.length; i+=1) {
			if( ext.toLowerCase() === path.extname(list[i]).toLowerCase()) {
				returnList.push(list[i]);
			}
		}
		return callback(null, returnList);	
	})

}

/*
	To define a single function export, 
	you assign your function to the module.exports object, 
	overwriting what is already there:
*/
module.exports = printExt;