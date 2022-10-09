//Exercise A

let test = "Hello";
console.log("Exercise A", test);

//Exercise B

let sum = 10 + 20;
console.log("\nExercise B", sum);

//EXercise C

let min = 0;
let max = 20;

let random = Math.random() * (max - min) + min;
console.log("\nExercis C", random);

//for integer numbers between 0 and 20:

let random2 = Math.floor(Math.random() * (max - min)) + min;

console.log("\nExercis C", random2);

//Exercise D

const me = {
  name: "Alexandra",
  surname: "Alexandrescu",
  age: 26,
};

console.log("\nExercise D", me);

//Exercise E

delete me.age;
console.log("\nExercise E", me);

//Exercise F

me.skills = ["JS", "HTML", "CSS", "C++"];
//I know that HTML and CSS are not programming languages :)
console.log("\nExercise F", me);

//Exercise G

me.skills.pop();
console.log("\nExercise G", me);

//Exercise 1

function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Exercise 1");
console.log(dice(1, 6));

//Exercise 2

function whoIsBigger(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

console.log("\nExercise 2");
console.log(whoIsBigger(13, 10));

//Exercise 3

function splitMe(str) {
  let arr = [];
  arr = str.split(" ");
  return arr;
}

console.log("\nExercise 3");
console.log(splitMe("I love coding!"));

//Exercise 4

function deleteOne(str, boolean) {
  let strLength = str.length;
  if (boolean) {
    return str.slice(1, strLength);
  } else {
    return str.slice(0, strLength - 1);
  }
}

console.log("\nExercise 4");
console.log(deleteOne("Alexandra", true));
console.log(deleteOne("Alexandrescu", false));

//Exercise 5

function onlyLetter(str) {
  let arr = str.split(" ");
  for (let el of arr) {
    if (!isNaN(el)) {
      let index = arr.indexOf(el);
      arr.splice(index, 1);
    }
  }
  str = arr.join(" ");
  return str;
}

console.log("\nExercise 5");
console.log(onlyLetter("I have 4 dogs and 2 cats"));

//Exercise 6

// function isThisAnEmail(str) {}

//Exercise 7

function whatDayIsIt() {
  let today = new Date();
  console.log(today);
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let theDay = today.getDay();
  console.log("Today is ", weekDays[theDay]);
}

console.log("\nExercise 7");
whatDayIsIt();

//Exercise 8

function rollTheDices(nr) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < nr; i++) {
    let result = dice(1, 6);
    sum += result;
    arr.push(result);
  }
  const obj = {};
  obj.sum = sum;
  obj.values = arr;
  console.log(obj);
}

console.log("\nExercise 8");
rollTheDices(3);

//Exercise 9

function howManyDays(dateArr) {
  let today = new Date();
  let dd = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let diffYear = year - dateArr[2];
  let diffMonth = month - dateArr[1];
  let diffDays = dd - dateArr[0];
  console.log(today, dd, month, year);
  let differentDays = 0;
  let differentMonth = 0;
  if (dateArr[0] > dd) {
    differentDays = 31 - dateArr[0] + dd;
    console.log(differentDays);
    differentMonth = month - dateArr[1] - 1;
    console.log(differentMonth);
  }
  console.log(
    diffYear,
    "years",
    differentMonth,
    "months and ",
    differentDays,
    "days"
  );
}

//The function verifies just the difference between days and months
//The year stays the same as the current one (2022)

console.log("\nExercise 9");
howManyDays([20, 8, 2022]);

//Exercise 10

function isTodayMyBirthday() {
  let today = new Date();
  let dd = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  if (dd === 4 && month === 4 && year === 1996) return true;
  else return false;
}

console.log("\nExercise 10");
console.log(isTodayMyBirthday());

//Exercise 11

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

obj = {
  animal: "lion",
  color: "yellow",
  age: 10,
};

console.log("\nExercise 11");
console.log(deleteProp(obj, "color"));

//Exercise 12

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

function oldestMovie(arr) {
  let length = arr.length;
  let theIndex = 0;
  let minYear = parseInt(arr[0].Year);
  console.log(minYear);
  for (let i = 0; i < length; i++) {
    if (minYear > parseInt(arr[i].Year)) {
      minYear = parseInt(arr[i].Year);
      theIndex = i;
    }
  }
  console.log(
    "The oldest movie of the array is: ",
    arr[theIndex].Title,
    "the year is: ",
    minYear
  );
}

console.log("\nExercise 12");
oldestMovie(movies);

//Exercise 13

function countMovies(arr) {
  return arr.length;
}

console.log("\nExercise 13");
console.log("The movie array has: ", countMovies(movies), " movies");

//Exercise 14

function onlyTheTitles(arr) {
  let titles = [];
  for (let el of arr) {
    titles.push(el.Title);
  }
  return titles;
}

console.log("\nExercise 14");
console.log(onlyTheTitles(movies));

//Exercise 15

function onlyInThisMillennium(arr) {
  let milleniumMovies = [];
  for (let el of arr) {
    if (parseInt(el.Year) >= 2000) {
      milleniumMovies.push(el.Title + " " + el.Year);
    }
  }
  return milleniumMovies;
}

console.log("\nExercise 15");
console.log("This millenium movies are: ", onlyInThisMillennium(movies));

//Exercise 16

function getMovieById(id, arr) {
  for (let el of arr) {
    if (id === el.imdbID) console.log(el.Title);
  }
}

console.log("\nExercise 16");
getMovieById("tt0087365", movies);

//Exercise 17

function sumAllTheYears(arr) {
  let sum = 0;
  for (let el of arr) {
    // console.log(el.Year);
    sum += parseInt(el.Year);
  }
  console.log(sum);
}

console.log("\nExercise 17");
sumAllTheYears(movies);

//Exercise 18

function searchByTitle(titleStr, arr) {
  let size = titleStr.length;
  let check = false;
  let sequence = "";
  let indexMovies = [];
  for (let el of arr) {
    for (let i = 0; i <= el.Title.length - size; i++) {
      sequence = el.Title.slice(i, i + size);
      if (sequence === titleStr) {
        check = true;
        indexMovies.push(arr.indexOf(el));
        console.log("This movie contains the string: ", el.Title);
      }
    }
  }
  console.log(
    "The indexes of the movies containing the string in the title: ",
    indexMovies
  );
  if (check === false)
    console.log("There is no movie containing the string in the title");

  return indexMovies;
}

console.log("\nExercise 18");

searchByTitle("zorro", movies);
searchByTitle("Lord of", movies);

//Exercise 19

function searchAndDivide(str, arr) {
  let obj = {};
  let arrContaining = searchByTitle(str, arr);
  let actualIndex = 0;
  let match = [];
  let unmatch = [];
  let arrNotContaining = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  for (let el of arrContaining) {
    actualIndex = arrNotContaining.indexOf(el);
    arrNotContaining.splice(actualIndex, 1);
  }
  console.log(arrNotContaining);
  for (let el of arrContaining) {
    match.push(arr[el].Title);
  }
  for (let el of arrNotContaining) {
    unmatch.push(arr[el].Title);
  }
  obj.match = match;
  obj.unmatch = unmatch;
  console.log(obj);
}

console.log("\nExercise 19");
searchAndDivide("Flies", movies);

//Exercise 20

function removeIndex(nr, arr) {
  let newArr = arr.slice();

  console.log("this is the removed movie: ", newArr.splice(nr, 1));

  return newArr;
}

console.log("\nExercise 20");
// let array = [1, 2, 3, 4, 5, 6, 7];
console.log(
  "This is the initial array with the removed movie: ",
  removeIndex(4, movies)
);

//Exercise 21

function halfTree(nr) {
  let str = "";
  for (let i = 1; i <= nr; i++) {
    str = str.concat("*");
    console.log(str);
  }
}

console.log("\nExercise 21");
halfTree(3);

//Exercis 22

function tree(nr) {
  let str = "*";
  console.log(str);
  for (let i = 2; i <= nr; i++) {
    str = str.concat("**");
    console.log(str);
  }
}
console.log("\n");
console.log("Exercise 22");
tree(5);

//Exercise 23

function isItPrime(nr) {
  let halfIntiger = Math.floor(nr / 2 + 1);
  let isPrime = true;
  let check = 0;
  if (nr === 2) {
    console.log("The number is prime");
    check = 1;
  }
  if (check === 0) {
    for (let i = 2; i <= halfIntiger; i++) {
      if (nr % i === 0) {
        isPrime = false;
        console.log("The number is not prime");
        break;
      }
    }
  }

  if (isPrime === true && check === 0) console.log("the number is prime");
}

console.log("\nExercise 23");
isItPrime(67);
