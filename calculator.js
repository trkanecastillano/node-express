const addition = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const difference = (array) => {
  let subtract = 0;
  for (let i = 0; i < array.length; i++) {
    subtract -= array[i];
  }

  return subtract;
};

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

module.exports = { addition, difference, multiply, divide };
