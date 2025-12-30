// Exercises: Level 1
// 1. Create a closure which has one inner function
{
  function outerFunction(x: number) {
    function ts(y: number): number {
      return x + y;
    }

    return ts;
  }
  const closureInstance = outerFunction(5);
  const result = closureInstance(10);
  console.log(result);
}

// 2.Create a closure which has three inner functions
function outerFunction(initialValue: number) {
  let value = initialValue;

  function add(n: number) {
    value += n;
    return value;
  }

  function subtract(n: number) {
    value -= n;
    return value;
  }

  function multiply(n: number) {
    value *= n;
    return value;
  }

  return {
    add,
    subtract,
    multiply,
  };
}

const calculator = outerFunction(10);

console.log(calculator.add(5));
console.log(calculator.subtract(3));
console.log(calculator.multiply(2));
