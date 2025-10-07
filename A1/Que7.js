// Que 7


var marks = 82;          
var familyIncome = 280000;


var scholarship;

if (marks >= 85 && familyIncome < 300000) {
    scholarship = "Full Scholarship";
} else if (marks >= 70 && familyIncome < 500000) {
    scholarship = "Half Scholarship";
} else {
    scholarship = "Not eligible for scholarship";
}


console.log("Marks: " + marks + "%");
console.log("Family Income: ₹" + familyIncome);
console.log("Scholarship Eligibility: " + scholarship);
