'use strict';
function twoSums(array, num) {
  var result = [];
  for(let i = 0; i < array.length; i++) {
    for(let j=0; j<array.length-1; j++){
      if (array[j]+array[j+1] === num){
        let a = array.indexOf(array[j]);
        let b = array.indexOf(array[j+1]);
        result = [a, b];
      }
    }
  }
  return result;
}

module.exports = twoSums;
