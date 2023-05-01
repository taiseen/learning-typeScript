"use strict";
// ✅ Nullish Coalescing Operator (??)
var _a;
// only work on ==> null & undefined (??)
const isAuthenticatedUser1 = null;
const isAuthenticatedUser2 = undefined;
const isAuthenticatedUser3 = '';
const isAuthenticatedUser4 = 'user';
const user1 = isAuthenticatedUser1 !== null && isAuthenticatedUser1 !== void 0 ? isAuthenticatedUser1 : 'Guest1';
const user2 = isAuthenticatedUser2 !== null && isAuthenticatedUser2 !== void 0 ? isAuthenticatedUser2 : 'Guest2';
const user3 = isAuthenticatedUser3 !== null && isAuthenticatedUser3 !== void 0 ? isAuthenticatedUser3 : 'Guest3';
const user4 = isAuthenticatedUser4 !== null && isAuthenticatedUser4 !== void 0 ? isAuthenticatedUser4 : 'Guest4';
const man1 = {
    name: 'John',
    age: 23,
    address: {
        city: 'Not specific'
    }
};
// console.log(man1);
// const home = man1.address.home;
// console.log(home); // undefined
const home = (_a = man1.address.home) !== null && _a !== void 0 ? _a : 'No Home';
console.log(home); // No Home
// const { home = 'No Home...' } = man1.address;
// console.log(home); // No Home...
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(generateAdder(2));
console.log(addTwo(3));
console.log(addTwo(5));
