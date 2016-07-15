// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	
  var resultString = '';

  // Check for Number or Boolean
  if (obj.constructor === Number || obj.constructor === Boolean) {

    return '' + obj;

  } else {
    // Chcek for String
    if (obj.constructor === String) {
      return '"' + obj + '"';

    } else {

    }
  }
};
