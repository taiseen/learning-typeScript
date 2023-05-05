// by using "keyof", one generic can force to other generic type

interface IPersonDataType {
    name: string
    age: number
}

const personData: IPersonDataType = {
    name: 'Era',
    age: 20,
}

type manualPersonType = 'name' | 'age'; // manual union type...

type dynamicPersonType = keyof IPersonDataType // dynamically union type...

// type functionType = <A, B extends keyof A>(personObj: A, key: B) => A[B]

// B = 'name' | 'age'  // <== dynamically union type...

const getUserPropertyValue = <A, B extends keyof A>(personObj: A, key: B): A[B] => {
    return personObj[key]
}

const getPV = getUserPropertyValue(personData, 'name');
console.log(getPV);


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// Quiz Question...

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];
}

const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users, 0, 'name'))