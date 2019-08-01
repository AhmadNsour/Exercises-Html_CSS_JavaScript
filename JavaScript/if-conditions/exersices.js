/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
function fun (num,num2) {
	if (!isNaN(num)){
	if (num >= num2){
		return num 
	}
	else{ 
		return "is not larger than "
	}
}else{
	output ="you have entered a string";
}
return output;
}
document.write(fun(18,15));
  
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
function fun (num,num2,num3) {
	if (!isNaN(num)){
	if (num >=0,num2 >=0,
		num3 >=0){
		return "number are +";
	}
	else{ 
		return "one of the number is - ";
	}
}else{
	output ="you have entered a string";
}
return output;
}
document.write(fun(18,15,-5));
-----------------------------------------------------
function fun (num,num1,num2){
	if (!isNaN(num,num1,num2)){
		if (num >=0){
			if (num1 >=0){
				if (num2 >=0){


				}else return"the 3st number is negative"
				 ;


			}else return"the 2st number is negative"

		}else return "the 1st number is negative"

	}return "you have input a string"
}
document.write(fun(-1,15,15));
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
var x= 25;
var y= 91;
var z= 18;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
} 
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function sortNumber(num1, num2, num3)
{
	var firstBig = higher(num1, num2);
	var secondBig = higher(firstBig[0], num3);
	var thirdBigger = higher(firstBig[1], secondBig[1]);
	var sorted = [secondBig[0], thirdBigger[0], thirdBigger[1]];
	return sorted;
}
var num1 = 1;
var num2 = 2;
var num3 = 3;
var resToShow = sortNumber(num1, num2, num3);
console.log(resToShow);
alert(resToShow);
 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
var x = 2;
var y = 9;
if(x >= y)
{
	console.log("Hello World");
}
else
{
	alert("Goodbye");
}
 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
var x = 2;
var y = 9;
if(x >= y)
{
	console.log("Hello World");
/******* End Your Code ********* */


