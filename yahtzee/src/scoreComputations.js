function countAndSumInteger(num, array){
  return array.reduce((accumulator, currentValue) => {
    if(currentValue === num){
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);
}

// Regexp ideas
// 3 of a kind => /(.)\1{2}/
// 4 of a kind => /(.)\1{2}/
function numOfKind(number, array){
  let score = 0;
  let numOfKind = false;
  array.reduce((acc, num) => {
    score += num;
    acc[num] = (acc[num] || 0) + 1;
    (acc[num] === number) && (numOfKind = true);
    return acc;
  }, {});
  return (numOfKind) ? score : 0;
}

function findUnique(array){
  let cache = {};
  let score = 0;
  let newArray = [];
  array.forEach(number => {
    if(!cache[number]){
      cache[number] = true;
      newArray.push(number);
    }
    score += number;
  })
  return [newArray, score];
}

// /(.)\1{2}(.)\2|(.)\3(.)\4{2}/
function fullHouse(array){
  let sortedArray = [ ...array].sort();
  let sortedString = sortedArray.join('');
  let result = /(.)\1{2}(.)\2|(.)\3(.)\4{2}/.test(sortedString);
  return (result) ? sum(array) : 0;
}

function straight(num, array){
  let straightPattern;
  (num === 4) ? straightPattern = /1234|2345|3456/ : straightPattern = /12345|23456/;
  let [ uniqueArray, score] = findUnique(array);
  let sortedArray = uniqueArray.sort();
  let sortedString = sortedArray.join('');
  let result = sortedString.match(straightPattern);
  return (result) ? score : 0;
}

function sum(array){
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

function yahtzee(array){
  let score = 0;
  let result = array.every(num => {
    score += num;
    return (num === array[0]);
  });
  return (result) ? score : 0;
}

export { countAndSumInteger, fullHouse, numOfKind, straight, sum, yahtzee };

