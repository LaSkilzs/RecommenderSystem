function twoPair(arrays) {
  let temp = {};
  let max = {};

  // count all movie frequency
  for (let array in arrays) {
    temp = countMovies(arrays[array], temp);
  }

  // retrieve movies faved by >= 5 customers
  for (movie in temp) {
    if (temp[movie] >= 5) {
      max[movie] = temp[movie];
    }
  }

  // create all possible pairings
  let bruteforce = [];
  let len = Object.keys(max).length;
  let plays = Object.keys(max);

  for (let i = 0; i < len; i++) {
    // createAllPossiblePairings(bruteforce,plays,i);
    for (let j = i + 1; j < len; j++) {
      bruteforce.push([plays[i], plays[j]]);
    }
  }

  //place bruteforce array of arrays in a hash
  let movies = {};
  for (let movie of bruteforce) {
    if (movies[movie]) {
      movies[movie]++;
    } else {
      movies[movie] = 1;
    }
  }

  // compare pairings vs viewers watching
  let resources = {};
  for (let i = 0; i < arrays.length; i++) {
    // comparePairingsVsViewers(resources,arrays,movies,i);
    for (let movie in movies) {
      let arr = movie.split(",");
      if (
        arrays[i].join(" ").includes(arr[0]) &&
        arrays[i].join(" ").includes(arr[1])
      ) {
        if (resources[movie]) {
          resources[movie]++;
        } else {
          resources[movie] = 1;
        }
      }
    }
  }

  // sort and return top two max pairings
  let newMax = [];
  newMax = Object.keys(resources).sort(function(a, b) {
    return resources[a] - resources[b];
  });
  return newMax.slice(-2);
}

function countMovies(array, temp) {
  for (let movie of array) {
    if (temp[movie]) {
      temp[movie]++;
    } else {
      temp[movie] = 1;
    }
  }
  return temp;
}

function comparePairingsVsViewers(
  resultObject,
  arrayofArrays,
  pairingsArray,
  i
) {
  for (let movie in pairingsArray) {
    let arr = movie.split(",");
    if (
      arrayofArrays[i].join(" ").includes(arr[0]) &&
      arrayofArrays[i].join(" ").includes(arr[1])
    ) {
      if (resultObject[movie]) {
        resultObject[movie]++;
      } else {
        resultObject[movie] = 1;
      }
    }
  }
  return resultObject;
}

function createAllPossiblePairings(resultArray, objectArray, i) {
  for (let j = i + 1; j < objectArray.length; j++) {
    resultArray.push([objectArray[i], objectArray[j]]);
  }
  return resultArray;
}
