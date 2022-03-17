'use strict';
// let marksMass = 78;
// let marksHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let marksBMI = marksMass / marksHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// console.log(marksBMI);
// console.log(johnBMI);

// const markHigherBMI = marksBMI > johnBMI;
// console.log(markHigherBMI);

// if (marksBMI > johnBMI) {
//     console.log('Mark has a higher BMI than John. Marks BMI is' + marksBMI)
// } else {
//     console.log('John has a higher BMI than Mark. John BMI is ' + johnBMI)
// };

let bill = 415;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(bill);
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)