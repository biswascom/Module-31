// 1) Write an arrow function that will take 3 parameters, will multiply 
// the parameters and will return the result.

const multiply = (num1, num2, num3) => {return num1 * num2 * num3};


const result = multiply(10, 10, 2);
console.log(result);

// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const templateString = `I am a web developer.
I love to code.
I love to eat biryani.`;

console.log(templateString);

// 3) Write an arrow function that will take 2 parameters: One parameter 
// will come from you and the other parameter will be a default 
// parameter. Add these two parameters and return the result.

const defaultParameter = (one, two = 5) => console.log(one * two);

defaultParameter(3);
defaultParameter(5, 7);