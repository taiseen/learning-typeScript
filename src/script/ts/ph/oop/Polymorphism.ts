// 06 - May - 2023

// Polymorphism is - same method() produce different different results,  base on by object calling...
// we achieve this behavioral by overriding concept

// Polymorphism Example - 1

class Person1 {
    sleep(): void {
        console.log('Sleep 8 Hours...');
    }
}

class JobHolder extends Person1 {
    // overwrite to get polymorphism behavior
    sleep(): void {
        console.log('Sleep 7 Hours...');
    }
}

class Developer extends Person1 {
    // overwrite to get polymorphism behavior
    sleep(): void {
        console.log('Sleep 6 Hours...');
    }
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const h1 = new Person1();
const h2 = new JobHolder();
const h3 = new Developer();


function sleepInfo(obj: Person1) {
    obj.sleep(); // 🟢 polymorphism (same method act as differently base on object of a {class})
}

sleepInfo(h1);
sleepInfo(h2);
sleepInfo(h3);


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// Polymorphism Example - 2

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {

    constructor(public radius: number) {
        super();
    }

    // overwrite to get polymorphism behavior
    getArea(): number {
        return +(Math.PI * this.radius * this.radius).toFixed(2);
    }
}

class Rectangle extends Shape {
    constructor(public height: number, public weight: number) {
        super();
    }

    getArea(): number {
        return this.height * this.weight;
    }
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const s1 = new Shape();
const s2 = new Circle(3);
const s3 = new Rectangle(20, 30);

function getShapeOfArea(shape: Shape): void {
    const area = shape.getArea();
    console.log(area);
}

getShapeOfArea(s1);
getShapeOfArea(s2);
getShapeOfArea(s3);