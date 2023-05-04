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
// const u3 = userWithId(userData3);

console.log(u1);
console.log(u2);
// console.log(u3);
