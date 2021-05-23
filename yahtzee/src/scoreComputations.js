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
  let newArray = [];
  array.forEach(number => {
    if(!cache[number]){
      cache[number] = true;
      newArray.push(number);
    }
  })
  return newArray;
}

// /(.)\1{2}(.)\2|(.)\3(.)\4{2}/
function fullHouse(array){
  const sortedArray = [ ...array].sort();
  const sortedString = sortedArray.join('');
  const result = /(.)\1{2}(.)\2|(.)\3(.)\4{2}/.test(sortedString);
  return (result) ? 25 : 0;
}

function straight(num, array){
  let straightPattern, score;
  (num === 4) ? straightPattern = /1234|2345|3456/ : straightPattern = /12345|23456/;
  (num === 4) ? score = 30 : score = 40;
  const uniqueArray = findUnique(array);
  const sortedArray = uniqueArray.sort();
  const sortedString = sortedArray.join('');
  const result = sortedString.match(straightPattern);
  return (result) ? score : 0;
}

function sum(array){
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

function yahtzee(array){
  const result = array.every(num => num === array[0]);
  return (result && array.length) ? 50 : 0;
}

export { countAndSumInteger, fullHouse, numOfKind, straight, sum, yahtzee };

