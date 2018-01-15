// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'function' || typeof obj === undefined) {
    return undefined;
  }

  // base case
    // string
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }


  // for numbers
  if(obj !== Object(obj)) {
    return String(obj);
  }

  if(Arrray.isArray(obj)) {
    obj.forEach(function(element){
    
    })  
  }




  
  
  return '' + obj;
};
