// 05 - May - 2023

// Type Guards, also known as Type Narrowing

// TS allow you to narrow down the type of a variable

// [typeof] type guards       : checking the type of a =variable=
// [instanceof] type guards   : checking if a variable is an instance of a specific {class}
// [in] type guards           : checking if a property or method exists on an {object}


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 key-of gard 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

(() => {
    type AlphaNumeric = string | number;

    const addData = (a: AlphaNumeric, b: AlphaNumeric): AlphaNumeric => {

        // this approach is called ==> type Narrowing... 
        // by using "typeof" operator we achieve type Narrowing effect

        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        } else {
            return a.toString() + b.toString()
        }
    }

    console.log(addData(1, 1));
    console.log(addData('1', '5'));

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // 🔴🔴🔴 in gard  🔴🔴🔴
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

    type gustType = { name: string }
    type adminType = { name: string, role: 'admin' }
    type userType = adminType | gustType

    const guest: gustType = { name: 'Zon' }
    const admin: adminType = { name: 'Sam', role: 'admin' }

    function getUser(user: userType) {
        if ('role' in user) { // 🟢🟢🟢 <== using 'in' operator...
            return `${user.name} is ${user.role} user`
        } else {
            return `${user.name} is guest user`
        }
    }

    console.log(getUser(admin));
    console.log(getUser(guest));

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // 🔴🔴🔴 instance of gard 🔴🔴🔴
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // gard ==> class & object...

    class Animal {
        constructor(public name: string, public color: string) { }
        defaultSound() {
            console.log('Default Sound');
        }
    }

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    class Cat extends Animal {
        constructor(name: string, color: string) {
            super(name, color);
        }
        catSound() {
            console.log('Cat sound...');
        }
    }

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    class Dog extends Animal {
        constructor(name: string, color: string) {
            super(name, color);
        }
        dogSound() {
            console.log('Dog sound...');
        }
    }

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    const cat = new Cat('Neo', 'Drown');
    const dog = new Dog('Tom', 'Gray');

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    // approach ==> 1 | using 'instanceof' operator...

    function playSound1(animal: Animal) {
        if (animal instanceof Cat) {
            animal.catSound();
        } else if (animal instanceof Dog) {
            animal.dogSound();
        } else {
            animal.defaultSound();
        }
    }

    // playSound1(cat1)
    // playSound1(cat1)
    // playSound1(dog1)

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    // approach ==> 2 | using 'instanceof' + 'is' operator...

    function isDog(animal: Animal): animal is Dog {
        return animal instanceof Dog;
    }

    function isCat(animal: Animal): animal is Cat {
        return animal instanceof Cat;
    }

    function playSound2(animal: Animal) {
        if (isCat(animal)) {
            animal.catSound();
        } else if (isDog(animal)) {
            animal.dogSound();
        } else {
            animal.defaultSound();
        }
    }

    playSound2(dog)
    playSound2(cat)
    playSound2(dog)
})()