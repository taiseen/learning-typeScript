// 06 - May - 2023

class Counter1 {
    constructor(public counter: number) { /* ..... */ }

    increment(): number {
        return this.counter += 4;
    }

    decrement(): number {
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
    static counter = 0;

    static increment(): number {
        return Counter2.counter += 4;
    }

    static decrement(): number {
        return Counter2.counter -= 2;
    }
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

console.log(Counter2.counter);
console.log(Counter2.increment()); // point at one memory location...
console.log(Counter2.decrement()); // point at one memory location...
console.log(Counter2.counter);