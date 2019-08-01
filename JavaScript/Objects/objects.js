console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
var me={name:
{firstName:"Ahmad", lastName:"alNsour"} , 
age:25,
dateOfBirth:"12-8-1993", 
favoriteFood:["mansaf","magloba","kabsa"],
favoriteMovie:["F&F","Saw","The Ring"]}; 
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
function firstName(persons){
	for (i=0;i<persons.length;i++){
		console.log(persons[i].name.first);
	}	
}
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
firstName(persons);
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
function averageAge(persons){
	sum=0;
	for (i=0;i<persons.length;i++){
		sum+=persons[i].age;
	
	}console.log(avg=(sum/i+1));
}
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
averageAge(persons);
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(persons){
	var oldP = persons[0].age;
	for (i=0;i<persons.length;i++){
		if (persons[i].age>oldP){
		oldP = persons[i].age;
		var oldest = persons[i].name;
		}
	}console.log (oldest);
}
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
olderPerson(persons);
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons){
	var max1 = persons[0].name.first.length + persons[0].name.last.length;
	var index=0;
	for (i=1;i<persons.length;i++){
		if (persons[i].name.first.length + persons[i].name.last.length > max1){
		max1 = persons[i].name.first.length + persons[i].name.last.length  ;
		index = i;
		}
	}
return persons[index].name.first + " " + persons[index].name.last;
}
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
longestName(persons);
/*
6=
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons){
	var max1 = persons[0].name.first.length + persons[0].name.last.length;
	var index=0;
	for (i=1;i<persons.length;i++){
		if (persons[i].name.first.length + persons[i].name.last.length > max1){
		max1 = persons[i].name.first.length + persons[i].name.last.length  ;
		index = i;
		}
	}
return persons[index].name.first + " " + persons[index].name.last;
}
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
longestName(persons);
/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(str){
	str = str.toLowerCase();
	var words = str.split(' ');
	var repeats = {};
	for(i=0; i<words.length;i++){
	repeats [words[i]]=0;
	}
		for (key in repeats ){
			for (i in words){
				if ( key == words[i]) {
	repeats[key] +=1;

		}
			}
				}
	return repeats ; 
}
repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO");
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str){
	str = str.toLowerCase();
	var words = str.split('');
	var repeats = {};
	for(i=0; i<words.length;i++){
	repeats [words[i]]=0;
	}
		for (key in repeats ){
			for (i in words){
				if ( key == words[i]) {
	repeats[key] +=1;

		}
			}
				}
	return repeats ; 
}
repeatChar("mamababatetacedo");
/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(object,array){
	var keyInsideTheArray={};
	for(key in object){
		for( i in array){
			if(key==array[i]){
			keyInsideTheArray[key] =object[key];
		}
	}
	}return keyInsideTheArray;	
}
selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']);	 
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(object){
	var array=[];
	for(key in object){
	array.push (key,object[key]);
	}	
	return array;
}
objectToArray({firstName:"Moh",age:24});
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(array){
  	var object = {};
  	for(i=0; i < array.length; i++){
   	 object[array[i]] = array[++i];
  	}
  return object;
}
arrayToObject(["firstName","Moh","age",24]);
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(object){
	var objN = {};
	for (key in object){
		if ( typeof(object[key])== "number"){
		objN[key]=object[key];
		}
	}
	return objN;
}
onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(object){
	var objN = {};
	for (key in object){
		if ( typeof(object[key])== "string"){
		objN[key]=object[key];
		}
	}
	return objN;
}
onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj){
  	var ObjN = {};
  	for(key in obj){
    		if(typeof(obj[key])== "object"){
      			ObjN[key] = obj[key];
   		 }
  	}
  	return ObjN;
}
onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/
function keysArray(obj){
 	 array = [];
  	for(key in obj){
    		array.push(key);
  	}
  	return array;
}
keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/
function valuesArray(obj){
	array = [];
  	for(key in obj){
    		array.push(obj[key]);
  	}
  	return array;
}
valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var obj = {
  a: 1,
  b: 3,
  c: 4,
}

delete obj.b;
obj.a = 4;
obj.c = 66;
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj){
	var num=0;
	for (key in obj ){
	num++;
	}
   return num;
}
keysArray({a:1,b:2,c:3,d:4});
/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj){
	var objN ={};
	for (key in obj){
		if (obj[key]%2==0){
		objN[key] = obj[key];
		}		
	}
	return objN;
}
evenValue({a:1, b:2, c:3, d:4});
/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(obj){
  var keys = Object.keys(obj);
  var long = keys[0].length;
  var result = keys[0];
  for(i in keys){
    if(keys[i].length > long){
      value = keys[i];
    }
  }
  return obj[value];
}
longestKey({car:1, school:2, monster:3, alexMercer:4});
