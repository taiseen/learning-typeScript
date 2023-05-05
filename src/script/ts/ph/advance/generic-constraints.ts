// force generic type to be constant...
// its mean - our data type structure is fixed, no small change allow...
// so do not accept any object structure, only accept "extends" object structure...

interface IUser {
    name: string
    age: number
}

const userData1: IUser = {
    name: 'Don',
    age: 27,
}

const userData2 = {
    name: 'Pol',
    age: 25,
    isMarried: false,
}

const userData3 = {
    name: 'Sam',
    // age: 28,
}

const userWithId = <T extends IUser>(data: T) => {
    const id = '101';
    const userData = { id, ...data };
    return userData;
}

const u1 = userWithId<IUser>(userData1);
const u2 = userWithId(userData2);
// const u3 = userWithId(userData3); // object structure doesn't match... for using "extends" keyword

console.log(u1);
console.log(u2);
// console.log(u3);


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// Quiz Question...

interface IPersonQ {
    firstName: string;
    lastName: string;
}

const personQ: IPersonQ = {
    firstName: 'Saida',
    lastName: 'Andalib',
}

function fullName<T extends IPersonQ>(person: T): string {
    return `${person.firstName} ${person.lastName}`;
}

console.log(fullName<IPersonQ>(personQ));