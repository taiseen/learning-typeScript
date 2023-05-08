// 08 - May - 2023

// Conceptual-Session

(() => {


    /*  
        🔴🔴🔴 Mo 4:-
        Implement a generic function called reverseArray that takes an array of any type 
        & returns the reversed version of the array. 
        Test it with different types of arrays (e.g., numbers, strings) 
        to ensure it works correctly.
    */

    const reverseArray = <T>(array: T[]): T[] => {
        return array.reverse();
    }

    const numbers: number[] = [1, 2, 3, 4, 5];
    // console.log(reverseArray(numbers));  // Output: [5, 4, 3, 2, 1]

    const strings: string[] = ["apple", "banana", "cherry"];
    // console.log(reverseArray(strings));  // Output: ["cherry", "banana", "apple"]


    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*
        🔴🔴🔴 Mo 5:-
        Create a generic interface called Repository that represents a generic data repository. 
        It should have methods like getAll, getById, create, update, & delete. 
        Define the types for the methods & create a class that implements this interface.
    */

    // generic interface ✅ 
    interface IRepository<T> {
        getAll(): T[],
        getById(id: number): T | undefined;
        create(obj: T): void;
        update(obj: T): void;
        delete(id: number): void;
    }

    interface IUser {
        id: number
        name: string
        age: number
    }

    // #######################################################################################
    // #######################################################################################

    class GenericRepository<T extends IUser> implements IRepository<T> {
        private items: T[]

        constructor() {
            this.items = []
        }

        getAll(): T[] {
            return this.items;
        }

        getById(id: number): T | undefined {
            return this.items.find(item => item.id === id);
        }

        create(obj: T): void {
            this.items.push(obj);
        }

        update(obj: T): void {
            // this.items = this.items.map((item: any) => item.id === obj.id ? obj : item);

            const index = this.items.findIndex((item: T) => item.id === obj.id);

            index !== -1
                ? this.items[index] = obj
                : console.log('Updated - id do not exist...');
        }

        delete(id: number): void {

            const index = this.items.findIndex((item: T) => item.id === id);

            index !== -1
                ? this.items.splice(index, 1)
                : console.log('Deleted - id do not exist...');
        }

    }

    // #######################################################################################
    // #######################################################################################

    const listOfUsers: IUser[] = [
        { id: 1, name: "Jon", age: 25 },
        { id: 2, name: "Sam", age: 28 },
        { id: 3, name: "Neo", age: 22 },
        // { id: 4, name: "Era", age: 25 },
        // { id: 5, name: "Taj", age: 29 },
    ];

    const userRepository = new GenericRepository<IUser>();
    listOfUsers.forEach((user: IUser) => userRepository.create(user));

    // console.log(userRepository.getAll());
    // console.log(userRepository.getById(2));

    // userRepository.update({ id: 1, name: "Jon", age: 20 });
    // userRepository.update({ id: 10, name: "Jon", age: 20 });

    // userRepository.delete(3);
    // userRepository.delete(30);

    // console.log(userRepository.getAll());

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 6:-
        Define a type alias called Coordinates that represents the latitude & longitude of a location. 
        It should be an object with latitude & longitude properties, both of which are numbers. 
        Create a variable of type Coordinates & assign some sample values to it.
    */

    type Coordinates = {
        latitude: number
        longitude: number
    }

    const dhakaCoord: Coordinates = {
        latitude: 23.8103,
        longitude: 90.4125,
    }

    // console.log(dhakaCoord);

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 7:-
        Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). 
        Create a function that takes a Color value as input & prints out a corresponding message 
        (e.g., "You selected Red").
    */

    enum Color {
        Red = 'Red',
        Green = 'Green',
        Blue = 'Blue',
    }

    const colorMessages = (color: Color): void => {

        switch (color) {

            case Color.Red:
                console.log(`You selected ${color}`);
                break;

            case Color.Green:
                console.log(`You selected ${color}`);
                break;

            case Color.Blue:
                console.log(`You selected ${color}`);
                break;

            default:
                console.log(`You selected color not found...`);
                break;
        }
    }

    // colorMessages(Color.Green)
    // colorMessages(Color.Orange)
    // colorMessages('Orange')

    // const selectedColor: Color = Color.Red;
    // colorMessages(selectedColor)

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 8:-
        Create a base class called Shape with a method calculateArea that returns the area of the shape. 
        Extend this class to create subclasses for specific shapes like Rectangle & Circle. 
        Implement the calculateArea method in each subclass & test it with different dimensions.
    */

    abstract class Shape {
        abstract calculateArea(): void;
    }

    // #######################################################################################
    // #######################################################################################

    class Rectangle extends Shape {

        constructor(private width: number, private height: number) {
            super()
        }

        calculateArea(): number {
            return this.width * this.height;
        }
    }

    // #######################################################################################
    // #######################################################################################

    class Circle extends Shape {

        constructor(private radius: number) {
            super();
        }

        calculateArea(): number {
            return Math.PI * this.radius ** 2;
        }
    }

    // #######################################################################################
    // #######################################################################################

    const rect = new Rectangle(10, 10);
    // console.log('Rectangle area is: ', rect.calculateArea());

    const circ = new Circle(2);
    // console.log('Circle radius is: ', circ.calculateArea());

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 9:-
        Define two interfaces: 
        Car with properties like make, model, & year, & 
        Driver with properties like name & licenseNumber. 
        Create a function that takes objects of type Car & Driver & 
        returns an object with the combined properties of both types.
    */

    interface ICar {
        make: string;
        model: string,
        year: number
    }

    interface IDriver {
        name: string;
        licenseNumber: number
    }

    // ###########################################################

    const car: ICar = {
        make: 'BMW',
        model: '2022 Black Edition',
        year: 2022
    }

    const driver: IDriver = {
        name: 'Jon Doe',
        licenseNumber: 201050,
    }

    // ###########################################################

    const combineObj = (car: ICar, driver: IDriver): { car: ICar, driver: IDriver } => {
        return { car, driver };
    }

    // console.log(combineObj(car, driver));

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 10:-
        Create a function that takes a parameter which can be either a string or an array of strings. 
        If it's a string, return the uppercase version of the string. 
        If it's an array of strings, return an array with each string in uppercase.
    */

    type dataType = string | string[];

    const convertToUppercase = (data: dataType): dataType => {

        if (typeof data === 'string') {
            return data.toUpperCase();
        } else if (Array.isArray(data)) {
            return data.map(item => item.toUpperCase());
        } else {
            throw new Error('Invalid input');
        }

    }

    // console.log(convertToUppercase('hello'));
    // console.log(convertToUppercase(['jon', 'sam', 'lee']));
    // console.log(convertToUppercase(0));

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 11:-
        Declare a variable with an initial value of null and type it as string. 
        Use type assertion to assign a string value to this variable 
        and then print its length.
    */

    let userName: string | null = null;

    userName = 'Jon' as string;

    // console.log(userName.length);

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 12:-
        Create a function that takes an input parameter of type unknown. 
        Inside the function, implement type guards to check
        if the input is of type string or number and perform different operations based on the type.
    */

    const checkByTypeGard = (data: unknown) => {
        if (typeof data === 'string') {
            console.log(`Input type is string : ${data.toUpperCase()}`);
        } else if (typeof data === 'number') {
            console.log(`Input type is number : ${data * 2}`);
        } else {
            console.log('Unknown data type');
        }
    }

    // checkByTypeGard('hello');
    // checkByTypeGard(5);
    // checkByTypeGard(true);

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 13:-
        Create a generic function that takes an array of elements and returns the first element of the array. 
        Add a constraint to ensure that the generic type can be compared using the > operator.
    */

    type eDataType = string | number;

    const getFirstElement = <T extends eDataType>(data: T[]): T | undefined => {
        return data.length > 0
            ? data[0]
            : undefined
    }

    const numberArray: number[] = [1, 2, 3, 4, 5, 6];
    const stringArray: string[] = ['Ali', 'Neo', 'Sam'];

    // console.log(getFirstElement(numberArray));
    // console.log(getFirstElement(stringArray));
    // console.log(getFirstElement([{ name: 'Jon' }, { name: 'Tom' }]));

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 14:-
        Create a function that takes two parameters: 
        one can be either a string or number, and the other can be either a boolean or an array of strings. 
        Implement logic in the function to perform different operations based on the types of the parameters.
    */

    type type1 = string | number;
    type type2 = boolean | string[];

    const operationPerform = (parm1: type1, parm2: type2) => {

        const combination1 = typeof parm1 === 'string' && typeof parm2 === 'boolean';
        const combination2 = typeof parm1 === 'string' && Array.isArray(parm2);
        const combination3 = typeof parm1 === 'number' && typeof parm2 === 'boolean';
        const combination4 = typeof parm1 === 'number' && Array.isArray(parm2);

        if (combination1) {
            console.log('Operation 1:-', parm1.toUpperCase(), !parm2);
        } else if (combination2) {
            console.log('Operation 2:-', parm1.toUpperCase(), parm2.reverse());
        } else if (combination3) {
            console.log('Operation 4:-', parm1 * 5, !parm2);
        } else if (combination4) {
            console.log('Operation 3:-', parm1 * 5, parm2.reverse());
        } else {
            console.log('No operation support');
        }
    }

    // operationPerform('apple', false);
    // operationPerform('cat', ['a', 'b', 'c']);
    // operationPerform(10, true);
    // operationPerform(20, ['z', 'y', 'x']);
    // operationPerform('10', 'true');

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    /*  
        🔴🔴🔴 No 15:-
        Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. 
        The function should return a new array that contains only the elements for which the predicate function returns true. 
        Ensure that the function is flexible enough to work with different types of arrays.
    */

    // Generics are able to create a component or function to work over a variety of types rather than a single one.

    interface funType<T> {
        (value: T): boolean; // input pattern of function signature with dynamic type...
    }

    const filterArray = <T>(dataArray: T[], fun: funType<T>): T[] => {

        const newArray: T[] = [];

        for (const item of dataArray) {
            if (fun(item)) {
                newArray.push(item);
            }
        }

        return newArray;
    }

    const numberList = [1, 2, 3, 4, 5];
    const nameList = ['Alice', 'Bob', 'Charlie', 'Dave'];
    const dataList = [true, false, false, true, false];

    type objListType = { age: number };
    const objList: objListType[] = [{ age: 20 }, { age: 16 }, { age: 17 }, { age: 19 }];

    console.log(filterArray<number>(numberList, (num) => num % 2 === 0));
    console.log(filterArray<string>(nameList, (name) => name.length > 4));
    console.log(filterArray<boolean>(dataList, (value) => !value));
    console.log(filterArray<objListType>(objList, (value) => value.age > 18));

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

})()