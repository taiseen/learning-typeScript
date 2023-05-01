// ✅ Nullish Coalescing Operator (??)

// only work on ==> null & undefined (??)

const isAuthenticatedUser1 = null;
const isAuthenticatedUser2 = undefined;
const isAuthenticatedUser3 = '';
const isAuthenticatedUser4 = 'user';

const user1 = isAuthenticatedUser1 ?? 'Guest1';
const user2 = isAuthenticatedUser2 ?? 'Guest2';
const user3 = isAuthenticatedUser3 ?? 'Guest3';
const user4 = isAuthenticatedUser4 ?? 'Guest4';

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


type Person = {
    name: string
    age: number
    address: {
        city: 'Not specific'
        home?: '' // ✅ optional operator...
    }
}


const man1: Person = {
    name: 'John',
    age: 23,
    address: {
        city: 'Not specific'
    }
}

// console.log(man1);

// const home = man1.address.home;
// console.log(home); // undefined

const home = man1.address.home ?? 'No Home';
console.log(home); // No Home

// const { home = 'No Home...' } = man1.address;
// console.log(home); // No Home...





// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


function generateAdder(a: number): (b: number) => number {

    return function (b: number) {

        return a + b;
    };
}

const addTwo = generateAdder(2);

console.log(generateAdder(2));
console.log(addTwo(3));
console.log(addTwo(5));
