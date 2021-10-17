const twoSum = function (array, target) {
  let result = [];
  let addends = {};
  for (let i = 0; i < array.length; i++) {
    console.log(addends[array[i]])
      if (addends[array[i]] !== undefined) {
          result = [addends[ array[i] ], i];
          break;
      } else {
        addends[target - array[i]] = i;
      }
  }
  return result;
}

console.log(twoSum([2,7,11,15], 9));