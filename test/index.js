//task 1

var arr = [0, 2, 3, 3, 3, 4, 5, 6, 6];

function occurencesCount(number) {
  let newArr = arr.join().split(",");
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == number) {
      count++;
    }
  }
  return console.log(count);
}

occurencesCount(0);
occurencesCount(2);
occurencesCount(3);
occurencesCount(4);
occurencesCount(5);
occurencesCount(6);

//task 2

function getYears(capital, interestRate, tax, desiredAmount) {
  for (i = 0; capital < desiredAmount; i++) {
    const interestСalc = capital + capital * interestRate;
    const taxСalc = (interestСalc - capital) * tax;
    capital = interestСalc - taxСalc;
  }
  return console.log(i);
}

getYears(1000, 0.05, 0.18, 1100);
getYears(1000, 0.01625, 0.18, 1200);

//task 3

function sortString(string) {
  const words = string.split(" ");
  const sorted = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      const parsed = parseInt(word[j]);
      if (!isNaN(parsed)) {
        sorted[parsed - 1] = word;
      }
    }
  }
  return sorted.join(" ");
}

const string = "g5et ski3lls on6 use1 your2 to4 7top";
console.log(sortString(string));

//task 4

if (!Array.prototype.occurencesCount) {
  Array.prototype.occurencesCount = function (element) {
    var counter = 0;

    for (var i = 0; i < this.length; i++) {
      if (this[i] == element) {
        counter++;
      }
    }

    return counter;
  };
}

function occupyPaydesk(peoples, queue, paydeskPosition) {
  var man = peoples.shift();

  if (typeof man === "undefined") {
    return false;
  }

  queue[paydeskPosition] = man;

  return true;
}

function queueTime(peoples, paydeskCount) {
  var counter = 0,
    queue = [];

  if (peoples.length == 0) {
    return counter;
  }

  if (paydeskCount == 1) {
    return peoples.reduce(function (x, y) {
      return x + y;
    });
  }

  do {
    if (counter == 0) {
      for (var i = 0; i < paydeskCount; i++) {
        if (!occupyPaydesk(peoples, queue, i)) {
          break;
        }
      }
    }

    for (var i = 0; i < paydeskCount; i++) {
      if (queue[i] == 0 && !occupyPaydesk(peoples, queue, i)) {
        continue;
      }

      queue[i]--;
    }

    counter++;
    console.log(queue);
  } while (queue.occurencesCount(0) != paydeskCount);

  return counter;
}

const res = queueTime([19, 1, 27, 35, 16, 4, 45, 49, 41, 25], 5);

console.log(res);

//task 5

// get biggest number
function biggestNumber(number) {
  return +number
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// get bigger number
function biggerNumber(number) {
  if (number === biggestNumber(number)) {
    return -1;
  } else {
    for (var result = number + 1; result <= biggestNumber(number); result++) {
      if (biggestNumber(result) === biggestNumber(number)) {
        return result;
      }
    }
  }
}

console.log(biggerNumber(23)); // 32;
console.log(biggerNumber(624)); // 642;
console.log(biggerNumber(2018)); // 2081;
