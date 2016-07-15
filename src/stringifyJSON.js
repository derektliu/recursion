// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var resultString = [];

  // Check for Null
  if (obj === null) {
    return 'null';

  // Check for Number or Boolean
  } else if (obj.constructor === Number || obj.constructor === Boolean) {
    return '' + obj;

  // Check for String
  } else if (obj.constructor === String) {
    return '"' + obj + '"';

  // Check for Array
  } else if (obj.constructor === Array) {
    if (obj[0] === undefined) {
      return '[]';
    } else {
      for (var key in obj) {
        resultString.push(stringifyJSON(obj[key]));
      }
      return '[' + resultString + ']';
    }
  }
};