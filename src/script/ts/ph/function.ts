// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Normal Function 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

// function addJS(a, b) {
//     return a + b
// }

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 2));

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Arrow Function🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

// const addNumbersJS = (a, b) => a + b;

// without type alias...

const addNumbersNormal = (a: number, b: number): number => a + b;

console.log(addNumbersNormal(20, 20));

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// with type alias...

type addNumbersType = (a: number, b: number) => number   // <== 🟩🟩🟩 arrow function alias...

const addNumbersWithType: addNumbersType = (a, b) => a + b;

console.log(addNumbersWithType(40, 40));

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


const arr: number[] = [1, 2, 3, 4, 5]
console.log(arr.map((num: number) => num * 2));


// for method...
type personInfoType = {
    name: string;
    marks: number;
    getMarks(mark: number): string;  // <== 🟩🟩🟩 for method... 🟩🟩🟩
}

const personInfo: personInfoType = {
    name: 'taiseen',
    marks: 55,
    getMarks(mark: number) {
        return `Total mark is : ${this.marks + mark}`
    },
};

console.log(personInfo);
console.log(personInfo.getMarks(25));