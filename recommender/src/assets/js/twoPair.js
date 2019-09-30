class TwoPair {
  // count all movie frequency
  static count = arrays => {
    let temp = {};
    for (let array in arrays) {
      temp = countMovies(arrays[array], temp);
    }
    return temp;
  };

  // retrieve movies faved by >= 5 customers

  static favedMovies = temp => {
    let max = {};
    for (let movie in temp) {
      if (temp[movie] >= 5) {
        max[movie] = temp[movie];
      }
    }
    return max;
  };

  static pairings = max => {
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
    return bruteforce;
  };

  //place bruteforce array of arrays in a hash
  // let movies = {};
  // for (let movie of bruteforce) {
  //   if (movies[movie]) {
  //     movies[movie]++;
  //   } else {
  //     movies[movie] = 1;
  //   }
  // }

  // compare pairings vs viewers watching

  static pairingsVs = (arrays, pairings) => {
    let temp = {};
    let movies = countMovies(pairings, temp);
    let resources = {};
    for (let i = 0; i < arrays.length; i++) {
      resources = comparePairingsVsViewers(resources, arrays, movies, i);
    }
    console.log("resources", resources);
    return resources;
  };

  // sort and return top two max pairings
  static sortResults = resources => {
    let newMax = [];
    newMax = Object.keys(resources).sort(function(a, b) {
      return resources[a] - resources[b];
    });
    console.log(newMax.slice(-4));
    return newMax.slice(-5);
  };
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

export default TwoPair;
