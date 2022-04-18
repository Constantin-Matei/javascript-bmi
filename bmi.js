const weightMark = 78;
const weightMark2 = 95;
const weightJohn = 92;
const weightJohn2 = 85;
const heightMark = 1.69;
const heightMark2 = 1.88;
const heightJohn = 1.95;
const heightJohn2 = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiMark2 = weightMark2 / (heightMark2 * heightMark2);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
const bmiJohn2 = weightJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI = bmiMark > bmiJohn;
const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(bmiMark, bmiJohn, markHigherBMI);
console.log(bmiMark2, bmiJohn2, markHigherBMI2);
