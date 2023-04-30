           //1. Declare 2 variables a and b, such that a &gt; b, and define values for them. Output their
//a. sum
//b. difference (between a and b)
//c. product
//d. quotient (between a and b)
//e. remainder (between a and b)
                                            
const a = 14
const b = 7
//1
 alert(a+b)
 //2
alert(a - b)
 //3
alert(a*b)
//4
alert(a/b)
//5
alert(a%b)


//2. Print your name and age in the following format: “My name is ____, I am ____
const age = 20 
let Name="Henri"
alert(`My name is ${Name} I am ${age}`)


//3. Declare a variable with defined value. Print the last digit of the number.
let x= 45648948
console.log(x%10)
const y=42
console.log(y%10)
//4 Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.
let x=5
if (x>0)
alert("No")
else if (x<0)
alert("Yes")
//5. For a given three digit number calculate the sum of its digits.
let x = 234
y = String(x)
alert(+y[0]+ +y[1] + +y[2])
//                                 OR
let x = 156;
let sum=0;
for(let i=0;i<3;i++){
    sum += Number(String(x)[i]);
}