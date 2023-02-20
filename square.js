const numbers = [12, 22, 43, 36, 88, 54, 98, 23];

const multipleCalculation = numbers => {
    let sum = 0;
    for(const number of numbers){
        const square = number * number;
        sum = sum + square;
    };
    const average = sum / numbers.length;
    return average;
};

const result = multipleCalculation(numbers);
console.log(result);
