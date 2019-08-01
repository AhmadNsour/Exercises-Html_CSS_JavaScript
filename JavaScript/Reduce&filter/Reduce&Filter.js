console.log('Here is : ', 'Reduce & Filter') \

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array
Ex: avgAge(persons) => 41.2
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function avgAge(array1) {
    return array1.reduce((acc, p) => {
        return (acc + p.age / array1.length);
    }, 0);
}
avgAge(persons);
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name
Ex: longestName(persons) => 'Soso Al-Amora'
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function longestName(arr) {
    return arr.reduce((acc, cv) => {
        var cvName = cv.name.first + " " + cv.name.last;
        if (acc.length > cvName.length) {
            return acc;
        }
        return cvName;
    }, "");
}
longestName(persons);
/*
3
Create a function called maxNumber
that accept an array
and return max number
Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(array) {
    return array.reduce((acc, cv) => {
        if (acc > cv) {
            return acc;
        }
        return cv;
    });
}
maxNumber([1, 2, 4, 9]);
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string
Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str, character) {
    str = str.toLowerCase().split("");
    return str.reduce((acc, cv) => {
        if (cv === character) {
            return ++acc;
        }
        return acc;
    }, 0);
}
repeatChar("hello world", "w");
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBetweenUs(num1, num2) {
    arr = new Array(num2 - num1);
    arr.unshift(num1);
    return arr.reduce((acc, cv, index) => {
        if (cv < num2) {
            cv++;
            arr[index + 1] = cv;
            return acc.concat(cv);
        }
        return acc;
    }, [num1]);
}
usAndNumberBetweenUs(2, 5);
//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(array) {
    return array.filter(element => element % 2 == 0);
}
evenOnly([1, 8, 6, 4]);
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4
Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
    return arr.filter(element => element % 4 == 0);
}
multiFour([1, 8, 6, 4]);
/*
8
**this question not that easy mybe you will need to use two function inside each other
Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(strArray, Character) {
    return strArray.filter(elem => {
        return elem.toLowerCase().indexOf(Character.toLowerCase()) !== -1;
    });
}
containChar(["hello", "world"], "w");
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(strArr) {
    return strArr.filter((element, index) => index % 2 == 0 && element.length % 2 == 1);
}
var strings = ["alexx", "mercer", "madrasa", "rashed2", "Eemad", "hala"];
evenIndexOddLength(strings);
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(numArray, age) {
    return numArray.filter(element => element.age >= age)
}
olderThan(persons, 56);
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(strArr, num) {
    return strArr.filter(element => element.length < num)
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
shorterThan(strings, 5);
// if you finish the exercises review the material of the week and help your classmate
