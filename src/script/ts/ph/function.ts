
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 2));


const addNumbers = (a: number, b: number): number => a + b;
console.log(addNumbers(20, 20));


const arr: number[] = [1, 2, 3, 4, 5]
console.log(arr.map((num: number) => num * 2));



const personInfo: {
    name: string;
    marks: number;
    getMarks(mark: number): string;
} = {
    name: 'taiseen',
    marks: 55,
    getMarks(mark: number) {
        return `Total mark is : ${this.marks + mark}`
    },
};

console.log(personInfo.getMarks(25));
console.log(personInfo);



