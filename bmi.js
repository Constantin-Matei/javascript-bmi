const weightMark = 78;
const weightMark2 = 95;
const weightJohn = 92;
const weightJohn2 = 85;
const heightMark = 1.69;
const heightMark2 = 1.88;
const heightJohn = 1.95;
const heightJohn2 = 1.76;

const bmiJohn = weightJohn / (heightJohn * heightJohn);
const bmiMark = weightMark / heightMark ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;
const bmiMark2 = weightMark2 / heightMark2 ** 2;

/* const markHigherBMI = bmiMark > bmiJohn;
const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(bmiMark, bmiJohn, markHigherBMI);
console.log(bmiMark2, bmiJohn2, markHigherBMI2); */

if (bmiJohn > bmiMark) {
  console.log(
    `John's BMI (${bmiJohn.toFixed(
      2
    )}) is higher than Mark's! (${bmiMark.toFixed(2)})`
  );
} else {
  console.log(
    `Mark's BMI (${bmiMark.toFixed(
      2
    )}) is higher than John's (${bmiJohn.toFixed(2)})!`
  );
}

if (bmiJohn2 > bmiMark2) {
  console.log(
    `John's BMI (${bmiJohn2.toFixed(
      2
    )}) is higher than Mark's! (${bmiMark2.toFixed(2)})`
  );
} else {
  console.log(
    `Mark's BMI (${bmiMark2.toFixed(
      2
    )}) is higher than John's! (${bmiJohn2.toFixed(2)})`
  );
}
