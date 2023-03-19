// The user is prompted to enter speed of the car
const speed = prompt("Enter the speed of the car in km/h");

// The speed is then take through the if else to verify the correct output to display
if (speed < 70){
    message = console.log('OK');
} else {
    let points = ((speed - 70)/5);
    if (points > 12){
       
        message = console.log('License Suspended');
        
    } else {
        message = console.log(`Points : ${points}`);
    }

}

// The corrct output is displayed 
return message