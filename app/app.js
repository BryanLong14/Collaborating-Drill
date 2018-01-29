var arr = [
  {
    name: "A dude",
    age: 23
  },
  {
    name: "A girl",
    age: 26
  }
];

var numbers = [0, 1, 2, 3, 4];

function getEvens(nums) {
  var newArr = [];
  for (var i = 0; i < num.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
}

getEvens(numbers);
