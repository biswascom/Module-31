const numbersOne = [11, 22 , 33, 44, 55, 66, 77, 88, 99];
const numbersTwo = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const maximumNumber = (arrayOne, arrayTwo) => {
    const NewNumbers = [...arrayOne, ...arrayTwo];
    return Math.max(...NewNumbers);
};

const result = maximumNumber(numbersOne, numbersTwo);
console.log(result);