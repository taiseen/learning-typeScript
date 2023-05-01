type PersonType = {
    name: string;
    age: number;
    address: string;
    profession?: string; // ✅ optional...
}

const person1: PersonType = {
    name: 'John',
    age: 25,
    address: 'Mexico',
};

const person2: PersonType = {
    name: 'Sam',
    age: 27,
    address: 'India',
    profession: 'Web Developer',
};

console.log(person1);
console.log(person2);


type OperationType = (a: number, b: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => operation(num1, num2)

console.log(calculate(10, 10, (a, b) => a + b));
console.log(calculate(20, 10, (a, b) => a - b));
console.log(calculate(10, 10, (a, b) => a * b));
console.log(calculate(10, 10, (a, b) => a / b));
