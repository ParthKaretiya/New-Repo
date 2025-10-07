
var subject1 = Number(prompt("Enter marks for Subject 1:"));
var subject2 = Number(prompt("Enter marks for Subject 2:"));
var subject3 = Number(prompt("Enter marks for Subject 3:"));
var subject4 = Number(prompt("Enter marks for Subject 4:"));
var subject5 = Number(prompt("Enter marks for Subject 5:"));


var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (totalMarks / 500) * 100;


var grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

console.log("Total Marks: " + totalMarks + " out of 500");
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
