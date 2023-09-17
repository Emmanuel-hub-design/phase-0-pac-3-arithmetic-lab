function add(a, b) {
return a + b;    
  }
const addResult = add(6, 4);
console.log(addResult);

function subtract(a, b) {
    return a - b;
}
 subtractResult = subtract(10, 4);
console.log(subtractResult);

function multiply(a, b){

return a * b;
}
const multiplyResult = multiply(6, 4);
console.log(multiplyResult)

function divide(a, b) {
    if (b === 0) {
      // Check for division by zero
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  // Example usage:
  const result = divide(10, 2);
  console.log(result);

  function subtract(a, b) {
    return a - b;
  }
  
  // Example usage:
  let newrsult = subtract(10, 4);
  console.log(newrsult);

  function increment(n) {
    return n + 1;
  }
  
  // Example usage:
  let num = 9;
  letnum = increment(num);
  console.log(letnum);

  function decrement(n) {
    return n - 1;
  }
  
  // Example usage:
  newnum = 9;
  giveoutresult = decrement(newnum);
  console.log(giveoutresult);



  function makeInt(n) {
    // Use parseInt to parse n as an integer
    const parsedInt = parseInt(n, 10);
  
    // Check if the parsed result is NaN (Not-a-Number)
    if (isNaN(parsedInt)) {
      return null; // or you can return any other default value or handle the error as needed
    }
  
    // Return the parsed integer
    return parsedInt;
  }
  
  // Example usage:
  const input = "42";
  conult = makeInt(input);
  console.log(conult)


  function preserveDecimal(n) {
    // Use parseFloat to parse n as a floating-point number
    return parseFloat(n);
  }
  
  // Example usage:
  const number = "3.14159"; // This can be a string or a number
  const preserved = preserveDecimal(number);
  console.log(preserved);