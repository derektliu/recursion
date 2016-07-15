// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = [];

  var grabElements = function (currentNode) {

    // If classList in current node contains the className...
    if (_.contains(currentNode.classList, className)) {

      // ...store node into Elements list
      elements.push(currentNode);
    }

    // Check every node's child nodes
    for (var key in currentNode.childNodes) {
      // by using the recursive method
      grabElements(currentNode.childNodes[key]);
    }
  };
  
  // use the current document body
  grabElements(document.body);

  return elements;
};
