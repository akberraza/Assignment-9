// Question # 1

// function power(a, b) {
//     return Math.pow(a,b);
// }

// console.log(power(2, 3));

// Question # 2

// function leapYear(year){

//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     return `${year} is a leap year`
//     }
//     else{
//         return `${year} is a not leap year`
//     }
// }
// var year = prompt("Enter year for check leap year");
// console.log(leapYear(year))

// Question # 3

// function calculateSemiparimeter(a,b,c){
//    return (a+b+c) / 2;
// }

// function traingleArea(a,b,c){
//     var s = calculateSemiparimeter(a,b,c);
//     return Math.sqrt(s * (s-a)*(s-b)*(s-c));
// }

// var a = 7, b = 10, c = 5;
// console.log(traingleArea(a,b,c))

// Question # 4

// function calculateAverage(m1,m2,m3){
//  return  (m1 + m2 + m3) / 3
// }

// function calculatePercentage(m1,m2,m3,totalMarks){
//     var obtainedMarks =  m1 + m2 + m3;
//     var marks =  totalMarks * 3
//     return    (obtainedMarks / marks)* 100
// }

// function mainFunction(){
//     var m1 = 85, m2 = 90, m3 = 70;
//     var totalMarks = 100;

//   var avg = Math.floor(calculateAverage(m1,m2,m3));
//   var per = Math.floor(calculatePercentage(m1,m2,m3,totalMarks));

//   console.log(`Average = ${avg}`);
//   console.log(`percentage = ${per}%`)
// }

// mainFunction()


// Question # 5

// function customIndexOf(str,ind){

//     for(var i =0; i<str.length; i++){
//         if(str[i] === ind){
//             return i;
//         }

//     }
//     return -1;
// }
// console.log(customIndexOf("hello","o"));

// Question # 6

// function removeVowels(str){

//     var result = " ";
// for(var i = 0; i< str.length; i++){
//     var char = str[i]
//     if(char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u"){
//      result += char;
//     }
// }
// return result;
// }
// var str = "Hello World";
// console.log(removeVowels(str))

// // Question # 7

// function countVowelPairs(text) {
//     var count = 0;
//     var vowels = "aeiouAEIOU";

//     for (var  i = 0; i < text.length - 1; i++) {
//         var pair = text[i] + text[i + 1];
        
//         switch (true) {
//             case vowels.includes(text[i]) && vowels.includes(text[i + 1]):
//                 count++;
//                 break;
//         }
//     }
    
//     return count;
// }

// var  sentence = "Pleases read this application and give me gratuity";
// console.log("Number of vowel pairs:", countVowelPairs(sentence));


// // Question # 8

// function kmToMeters(km) {
//     return km * 1000;
// }

// function kmToFeet(km) {
//     return km * 3280.84;
// }

// function kmToInches(km) {
//     return km * 39370.1;
// }

// function kmToCentimeters(km) {
//     return km * 100000;
// }

// var kilometers = parseFloat(prompt("Enter distance between two cities in kilometers:"));

// if (isNaN(kilometers) || kilometers < 0) {
//     console.log("Please enter a valid distance in kilometers.");
// } else {
//     console.log(`Distance in meters: ${kmToMeters(kilometers)} m`);
//     console.log(`Distance in feet: ${kmToFeet(kilometers)} ft`);
//     console.log(`Distance in inches: ${kmToInches(kilometers)} in`);
//     console.log(`Distance in centimeters: ${kmToCentimeters(kilometers)} cm`);
// }

// // Question # 9

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12;
    
//     if (hoursWorked > regularHours) {
//         var overtimeHours = hoursWorked - regularHours;
//         var overtimePay = overtimeHours * overtimeRate;
//         return `Overtime Pay: Rs. ${overtimePay}`;
//     } else {
//         return "No Overtime Pay.";
//     }
// }

// let hoursWorked = 45; 
// console.log(calculateOvertimePay(hoursWorked));

// // Question # 10

// function withdrawAmount(amount) {
//     var hundred = Math.floor(amount / 100);  
//     amount %= 100;  

//    var fifty = Math.floor(amount / 50);  
//     amount %= 50;  

//     var ten = Math.floor(amount / 10);
//     amount %= 10;  

//     if (amount !== 0) {
//         console.log("Invalid amount! Only multiples of 10 allowed.");
//         return;
//     }

//     console.log(`You will have ${hundred} hundred notes, ${fifty} fifty notes, ${ten} ten notes.`);
// }

// withdrawAmount(470);
