function add(x, y) {
  return x + y;
}

function remove(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

console.log(add(10, 20));
console.log(divide(10, 2));
console.log(remove(30, 10));
console.log(multiply(5, 5));

module.exports = { add, remove, multiply, divide };
