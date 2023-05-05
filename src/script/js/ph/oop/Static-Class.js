"use strict";
// 05 - May - 2023
class Counter1 {
    constructor(counter) {
        this.counter = counter;
    }
    increment() {
        return this.counter += 4;
    }
    decrement() {
        return this.counter -= 2;
    }
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const inc1 = new Counter1(4); // create different memory location...
const inc2 = new Counter1(0); // create different memory location...
// console.log(inc1.increment());
// console.log(inc1.decrement());
// console.log(inc2.increment());
// console.log(inc2.decrement());
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
class Counter2 {
    static increment() {
        return Counter2.counter += 5;
    }
    static decrement() {
        return Counter2.counter -= 1;
    }
}
Counter2.counter = 0;
console.log(Counter2.counter);
console.log(Counter2.increment());
console.log(Counter2.decrement());
console.log(Counter2.counter);
