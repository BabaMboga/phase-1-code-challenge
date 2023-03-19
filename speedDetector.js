const speed = prompt("Enter the speed of the car in km/h");

if (speed < 70){
    message = console.log('OK');
} else {
    let points = ((speed - 70)/5);
    if (points > 12){
       
        message = console.log('License Suspended');
        
    } else {
        message = console.log(`Points : ${points}`);
    }

    return message
}

