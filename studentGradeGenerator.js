// The user is first prompted to enter a valid marks between 0-100
let marks = prompt("Please enter the student's marks between 0 and 100:");

// The marks are then validated using an if statement to check the category it belongs in
if (marks >= 80){
grade = console.log("Grade A");
} else if (marks >= 60 && marks <= 79){
    grade = console.log("Grade B");
} else if (marks >= 50 && marks <= 59){
    grade = console.log("Grade C");
} else if (marks >= 40 && marks <= 49){
    grade = console.log("Grade D");
}else {
    grade = console.log("Grade E");
}

// The correct grade is finally returned for the user to consume.
return grade