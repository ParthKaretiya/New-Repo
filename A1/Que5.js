// Que 5 

var num1 = 45;
var num2 = 78;
var num3 = 32;


var largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}


console.log("Numbers are: " + num1 + ", " + num2 + ", " + num3);
console.log("The largest number is: " + largest);

